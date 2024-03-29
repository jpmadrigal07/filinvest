import { CACHE_REVALIDATE } from "@/helpers/constants";
import { useQuery } from "@tanstack/react-query";

export async function getSites() {
  const res = await fetch(`/api/sites`, {
    next: { revalidate: CACHE_REVALIDATE },
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const jsonData = await res.json();
  return jsonData ? jsonData.docs : null;
}

function useGetSites() {
  const query = useQuery(["sites"], () => getSites(), {
    refetchOnWindowFocus: false,
  });
  return query;
}

export default useGetSites;
