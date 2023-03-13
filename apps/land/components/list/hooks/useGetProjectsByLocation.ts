import { CACHE_REVALIDATE } from "@/helpers/constants";
import { useQuery } from "@tanstack/react-query";
import qs from "qs";

export async function getProjectsByLocation({
  location,
  projectType,
  status,
}: {
  location: string;
  projectType: string;
  status?: string;
}) {
  const query = {
    ...(location && {
      "location.title": {
        equals: location,
      },
    }),
    ...(projectType && {
      "projectType.title": {
        equals: projectType,
      },
    }),
    ...(status && {
      "status.title": {
        equals: status,
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

function useGetProjectsByLocation({
  location,
  projectType,
  status,
}: {
  location: string;
  projectType: string;
  status?: string;
}) {
  const query = useQuery(
    ["project", { location, projectType, status }],
    () => getProjectsByLocation({ location, projectType, status }),
    {
      enabled: (!!location && !!projectType) || !!status,
      refetchOnWindowFocus: false,
    }
  );
  return query;
}

export default useGetProjectsByLocation;
