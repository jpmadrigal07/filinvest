import { CACHE_REVALIDATE } from "@/helpers/constants";
import { useQuery } from "@tanstack/react-query";
import qs from "qs";

export async function getProjectsBySite({ site }: { site: string }) {
  const query = {
    ...(site && {
      "site.title": {
        equals: site,
      },
    }),
  };

  const stringifiedQuery = qs.stringify(
    {
      where: query, // ensure that `qs` adds the `where` property, too!
    },
    { addQueryPrefix: true }
  );

  const res = await fetch(`/api/projects${stringifiedQuery}`, {
    next: { revalidate: CACHE_REVALIDATE },
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const jsonData = await res.json();
  return jsonData ? jsonData.docs : null;
}

function useGetProjectsBySite({ site }: { site: string }) {
  const query = useQuery(
    ["project", { site }],
    () => getProjectsBySite({ site }),
    {
      enabled: !!site,
      refetchOnWindowFocus: false,
    }
  );
  return query;
}

export default useGetProjectsBySite;
