import { T_SearchQuery } from "@/types/global";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import qs from "qs";
import usePropertySearchSettings from "./usePropertySearchSettings";
import flattenLocations from "@/helpers/flattenLocations";
import flattenPropertyTypes from "@/helpers/flattenPropertyTypes";
import flattenUnitSizes from "@/helpers/flattenUnitSizes";
import flattenPricePoints from "@/helpers/flattenPricePoints";

export async function getProperties(searchParams: T_SearchQuery) {
  const query = {
    ...(searchParams.brand
      ? {
          "site.title": {
            equals: searchParams.brand,
          },
        }
      : {}),
    ...(searchParams.propertyType
      ? {
          "propertyType.title": {
            equals: searchParams.propertyType,
          },
        }
      : {}),
    ...(searchParams.location
      ? {
          "location.title": {
            equals: searchParams.location,
          },
        }
      : {}),
    and: [
      ...(searchParams.priceRangeFrom
        ? [
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
          ]
        : []),
      ...(searchParams.unitSizeFrom
        ? [
            {
              size: {
                greater_than_equal: searchParams.unitSizeFrom,
              },
            },
            {
              size: {
                less_than_equal: searchParams.unitSizeTo,
              },
            },
          ]
        : []),
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
  const { data: inputSettings } = usePropertySearchSettings();
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [brand, setBrand] = useState("");
  const [unitSize, setUnitSize] = useState("");
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [priceRangeSteps, setPriceRangeSteps] = useState([0, 100]);
  useEffect(() => {
    const propertyType = searchParams.get("propertyType");
    const location = searchParams.get("location");
    const brand = searchParams.get("brand");
    const unitSize = searchParams.get("unitSize");
    const priceRangeFrom = searchParams.get("priceRangeFrom");
    const priceRangeTo = searchParams.get("priceRangeTo");
    const numberFrom = priceRangeFrom ? Number(priceRangeFrom) : 0;
    const numberTo = priceRangeTo ? Number(priceRangeTo) : 0;
    setPropertyType(propertyType ? decodeURIComponent(propertyType) : "");
    setLocation(location ? location : "");
    setUnitSize(unitSize ? unitSize : "");
    setPriceRange([numberFrom, numberTo]);
    setBrand(brand ? brand : "");
  }, [searchParams]);
  useEffect(() => {
    if (inputSettings && inputSettings.pricePoints) {
      const steps = inputSettings.pricePoints.map(
        (pricePoint: any) => pricePoint.point
      );
      setPriceRangeSteps(steps);
      if (pathname !== "/property-search") {
        setPriceRange([steps[0], steps[0]]);
      }
    }
  }, [inputSettings, pathname]);

  const formattedSearchParams = {
    propertyType,
    location,
    unitSize,
    unitSizeFrom: unitSize ? Number(unitSize.split(" ")[0]) : 0,
    unitSizeTo: unitSize ? Number(unitSize.split(" ")[2]) : 0,
    priceRangeFrom: priceRange[0],
    priceRangeTo: priceRange[1],
    priceRange,
    brand,
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
    priceRangeSteps,
    unitSizeSettings: inputSettings
      ? flattenUnitSizes(inputSettings.unitSizes)
      : [],
    locationSettings: inputSettings
      ? flattenLocations(inputSettings.locations)
      : {},
    propertyTypeSettings: inputSettings
      ? flattenPropertyTypes(inputSettings.propertyTypes)
      : {},
    priceRangeSettings: inputSettings
      ? flattenPricePoints(inputSettings.pricePoints)
      : [100000, 1000000],
  };
}

export default usePropertySearch;
