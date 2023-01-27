import { useQuery } from "@tanstack/react-query";

export async function getPriceRange() {
  const res = await fetch(`/api/globals/property-search`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const jsonData = await res.json();
  return jsonData
    ? [jsonData.minimumPriceRange, jsonData.maximumPriceRangeTo]
    : null;
}

function usePriceRangeSettings() {
  const query = useQuery(["priceRangeSettings"], () => getPriceRange(), {
    refetchOnWindowFocus: false,
  });
  return query;
}

export default usePriceRangeSettings;
