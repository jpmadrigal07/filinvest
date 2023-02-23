import { T_SearchQuery } from "@/types/global";
import { useQuery } from "@tanstack/react-query";
import qs from "qs";

export async function getNews(searchParams: T_SearchQuery | null) {
  const query = {
    ...(searchParams?.brand
      ? {
          "site.title": {
            ...(searchParams.brand === "All"
              ? { exist: true }
              : { equals: searchParams.brand }),
          },
        }
      : {}),
    ...(searchParams?.propertyType
      ? {
          "propertyTypeTag.title": {
            equals: searchParams.propertyType,
          },
        }
      : {}),
    ...(searchParams?.locationGroup
      ? {
          "locationTag.locationGroup.title": {
            equals: searchParams.locationGroup,
          },
        }
      : {}),
    ...(searchParams?.projectType
      ? {
          "projectTypeTag.title": {
            equals: searchParams.projectType,
          },
        }
      : {}),
    ...(searchParams?.subLocation
      ? {
          "subLocationTag.title": {
            equals: searchParams.subLocation,
          },
        }
      : {}),
    ...(searchParams?.location
      ? {
          "locationTag.title": {
            equals: searchParams.location,
          },
        }
      : {}),
    limit: 3,
  };
  const stringifiedQuery = qs.stringify(
    {
      where: query, // ensure that `qs` adds the `where` property, too!
    },
    { addQueryPrefix: true }
  );
  const res = await fetch(`/api/news${stringifiedQuery}&limit=3`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const jsonData = await res.json();
  return jsonData ? (jsonData.docs ? jsonData.docs : []) : null;
}

function useGetNews({ searchParams }: { searchParams: T_SearchQuery | null }) {
  const query = useQuery(["news", searchParams], () => getNews(searchParams), {
    enabled: !!searchParams,
    refetchOnWindowFocus: false,
  });

  return {
    ...query,
  };
}

export default useGetNews;
