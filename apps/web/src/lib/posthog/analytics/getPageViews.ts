"use server";

import { cache } from "@/modules/root/utils/cache";
import posthogClient from "../client";
import serverEnv from "@/server.env";

const getPageViews = async (slugs: string[] = []) =>
  cache(async () => {
    const properties = {
      type: "AND",
      values: [
        {
          type: "AND",
          values: [
            {
              key: "$current_url",
              type: "event",
              value: "http://localhost:3000/",
              operator: "icontains",
            },
          ],
        },
        {
          type: "OR",
          values: slugs.map((slug) => ({
            key: "$current_url",
            type: "event",
            value: slug,
            operator: "icontains",
          })),
        },
      ],
    };

    const response = await posthogClient.POST("/api/projects/{project_id}/insights/trend/", {
      params: {
        path: {
          project_id: serverEnv.POSTHOG_PROJECT_ID,
        },
      },
      body: {
        events: [
          {
            id: "$pageview",
            math: "total",
          },
        ],
        // @ts-expect-error - The format is correct
        properties,
        display: "ActionsTable",
        date_from: "ALL",
        breakdown: "$current_url",
      },
    });

    if (!response.data?.result) {
      throw new Error("Failed to fetch posts views");
    }

    return response.data.result.reduce(
      (acc, item) => {
        // @ts-expect-error - The format is correct
        acc[item.label] = item.aggregated_value;
        return acc;
      },
      {} as Record<string, number>,
    );
  }, ["getPageViews", slugs.join(",")])();

export default getPageViews;
