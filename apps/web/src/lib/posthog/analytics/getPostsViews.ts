"use server";

const getPostsViews = async (slugs: string[] = []) => {
  const events = [
    {
      id: "$pageview",
      math: "total",
      name: "$pageview",
      type: "events",
      order: 0,
    },
  ];

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
          key: "slug",
          type: "event",
          value: slug,
          operator: "icontains",
        })),
      },
    ],
  };

  const trendsUrl = new URL("api/projects/21331/insights/trend", "https://eu.posthog.com");

  trendsUrl.searchParams.append("events", JSON.stringify(events));
  trendsUrl.searchParams.append("properties", JSON.stringify(properties));
  trendsUrl.searchParams.append("display", "ActionsTable");
  trendsUrl.searchParams.append("date_from", "ALL");
  trendsUrl.searchParams.append("breakdown", "$current_url");
  trendsUrl.searchParams.append("refresh", "true");

  const response = await fetch(trendsUrl.toString(), {
    method: "GET",
    headers: {
      Authorization: "Bearer phx_KUXOAdVxBcgxp3kCVv1DndTq1Hr1Al5cJ8c9KdUQg7L",
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
};

export default getPostsViews;
