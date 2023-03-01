import { useQuery } from "@tanstack/react-query";
import qs from "qs";

export async function getProjectsByLocation({
  location,
  projectType,
}: {
  location: string;
  projectType: string;
}) {
  const query = {
    "projectType.title": {
      equals: projectType,
    },
    "location.title": {
      equals: location,
    },
  };

  const stringifiedQuery = qs.stringify(
    {
      where: query, // ensure that `qs` adds the `where` property, too!
    },
    { addQueryPrefix: true }
  );
  const res = await fetch(`/api/projects${stringifiedQuery}`, {
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
}: {
  location: string;
  projectType: string;
}) {
  const query = useQuery(
    ["project", location],
    () => getProjectsByLocation({ location, projectType }),
    {
      enabled: !!location && !!projectType,
      refetchOnWindowFocus: false,
    }
  );
  return query;
}

export default useGetProjectsByLocation;
