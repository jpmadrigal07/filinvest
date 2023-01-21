import { T_SearchQuery } from "@/types/global";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import qs from "qs";

export async function getProperties(searchParams: T_SearchQuery) {
  const query = {
    "propertyType.title": {
      equals: searchParams.propertyType,
    },
    "location.title": {
      equals: searchParams.location,
    },
    and: [
      {
        price: {
          greater_than_equal: searchParams.priceRangeFrom,
        },
      },
      {
        price: {
          less_than_equal: searchParams.priceRangeTo,
        },
      },
    ],
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
  return jsonData ? (jsonData.docs ? jsonData.docs : []) : null;
}

function usePropertySearch() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [unitSize, setUnitSize] = useState("");
  const [priceRange, setPriceRange] = useState([20, 50]);
  const [priceCurrencyRange, setPriceCurrencyRange] = useState([0, 0]);
  useEffect(() => {
    const propertyType = searchParams.get("propertyType");
    const location = searchParams.get("location");
    const unitSize = searchParams.get("unitSize");
    const priceRangeFrom = searchParams.get("priceRangeFrom");
    const priceRangeTo = searchParams.get("priceRangeTo");
    const numberFrom = priceRangeFrom ? Number(priceRangeFrom) : 0;
    const numberTo = priceRangeTo ? Number(priceRangeTo) : 0;
    setPropertyType(propertyType ? propertyType : "");
    setLocation(location ? location : "");
    setUnitSize(unitSize ? unitSize : "");
    setPriceRange([numberFrom / 1000000, numberTo / 1000000]);
    setPriceCurrencyRange([numberFrom, numberTo]);
  }, [searchParams]);
  useEffect(() => {
    const pricePerValue = 1000000;
    const min = priceRange[0] * pricePerValue;
    const max = priceRange[1] * pricePerValue;
    setPriceCurrencyRange([min, max]);
  }, [priceRange]);
  const formattedSearchParams = {
    propertyType,
    location,
    unitSize,
    priceRangeFrom: priceCurrencyRange[0],
    priceRangeTo: priceCurrencyRange[1],
    priceRange,
  };
  const query = useQuery(
    ["property", formattedSearchParams],
    () => getProperties(formattedSearchParams),
    {
      enabled: pathname === "/property-search",
      refetchOnWindowFocus: false,
    }
  );
  return {
    ...query,
    searchParams: formattedSearchParams,
    setPropertyType,
    setLocation,
    setUnitSize,
    setPriceRange,
  };
}

export default usePropertySearch;
