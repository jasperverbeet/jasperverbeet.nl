"use server";

import { cache } from "@/modules/root/utils/cache";
import posthogClient from "../client";
import serverEnv from "@/server.env";
import getAppUrl from "@/modules/root/utils/getAppUrl";

const getPageViews = async (slugs: string[] = []) =>
  cache(async () => {
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
        properties: {
          type: "AND",
          values: [
            {
              key: "$current_url",
              value: getAppUrl().hostname,
              operator: "icontains",
            },
          ],
        },
        display: "ActionsTable",
        date_from: "2024-01-01",
        breakdown: "$current_url",
        // @ts-expect-error - The format is correct
        refresh: true,
      },
    });

    if (!response.data?.result) {
      throw new Error("Failed to fetch posts views");
    }

    return response.data.result.reduce(
      (acc, item) => {
        // @ts-expect-error - The format is correct
        acc[new URL(item.label).pathname] = item.aggregated_value;
        return acc;
      },
      {} as Record<string, number>,
    );
  }, ["getPageViews", slugs.join(",")])();

export default getPageViews;
