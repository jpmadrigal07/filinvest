import { CACHE_REVALIDATE } from "@/helpers/constants";
import { useQuery } from "@tanstack/react-query";

export async function getPropertyTyPes() {
  const res = await fetch("/api/property-categories", {
    next: { revalidate: CACHE_REVALIDATE },
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const jsonData = await res.json();
  return jsonData ? jsonData.docs : null;
}

function useGetPropertyTypes() {
  const query = useQuery(["propertyTypes"], () => getPropertyTyPes(), {
    refetchOnWindowFocus: false,
  });
  return query;
}

export default useGetPropertyTypes;
