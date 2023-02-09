import { useQuery } from "@tanstack/react-query";
import qs from "qs";

export async function getNews(searchParams: string) {
  const query = {
    ...(searchParams && {
      "tags.title": {
        equals: searchParams,
      },
    }),
  };
  const stringifiedQuery = qs.stringify(
    {
      where: query, // ensure that `qs` adds the `where` property, too!
    },
    { addQueryPrefix: true }
  );
  const res = await fetch(`/api/news${stringifiedQuery}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const jsonData = await res.json();
  return jsonData ? (jsonData.docs ? jsonData.docs : []) : null;
}

function useGetNews({ searchParams }: { searchParams: string }) {
  const query = useQuery(["news", searchParams], () => getNews(searchParams), {
    refetchOnWindowFocus: false,
  });

  return {
    ...query,
  };
}

export default useGetNews;
