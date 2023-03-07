import { CACHE_REVALIDATE } from "@/helpers/constants";
import { useQuery } from "@tanstack/react-query";

export async function getFooter() {
  const res = await fetch(`/api/globals/footer`, {
    next: { revalidate: CACHE_REVALIDATE },
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const jsonData = await res.json();
  return jsonData ? jsonData : null;
}

function useGetFooter() {
  const query = useQuery(["footer"], () => getFooter(), {
    refetchOnWindowFocus: false,
  });
  return query;
}

export default useGetFooter;
