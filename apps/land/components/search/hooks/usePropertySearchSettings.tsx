import { useQuery } from "@tanstack/react-query";

export async function getPropertySearch() {
  const res = await fetch(`/api/globals/property-search`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const jsonData = await res.json();
  return jsonData ? jsonData : null;
}

function usePropertySearchSettings() {
  const query = useQuery(
    ["propertySearchSettings"],
    () => getPropertySearch(),
    {
      refetchOnWindowFocus: false,
    }
  );
  return query;
}

export default usePropertySearchSettings;
