import { CACHE_REVALIDATE } from "@/helpers/constants";
import { useQuery } from "@tanstack/react-query";
import qs from "qs";

export async function getProjectsByCategory({
  projectType,
}: {
  projectType: string;
}) {
  const query = {
    ...(projectType && {
      "projectTypeTag.title": {
        equals: projectType,
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
    next: { revalidate: CACHE_REVALIDATE },
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const jsonData = await res.json();
  return jsonData ? jsonData.docs : null;
}

function useGetProjectsByCategory({ projectType }: { projectType: string }) {
  const query = useQuery(
    ["project", { projectType }],
    () => getProjectsByCategory({ projectType }),
    {
      enabled: !!projectType,
      refetchOnWindowFocus: false,
    }
  );
  return query;
}

export default useGetProjectsByCategory;
