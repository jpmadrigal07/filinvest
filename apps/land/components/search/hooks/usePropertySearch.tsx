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
import flattenBedroomRange from "@/helpers/flattenBedroomRange";
import flattenSubLocations from "@/helpers/flattenSubLocations";
import { CACHE_REVALIDATE } from "@/helpers/constants";

export async function getProperties(searchParams: T_SearchQuery) {
  const query = {
    ...(searchParams.brand
      ? {
          "site.title": {
            ...(searchParams.brand === "All"
              ? { exist: true }
              : { equals: searchParams.brand }),
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
    ...(searchParams.locationGroup
      ? {
          "locationGroup.title": {
            equals: searchParams.locationGroup,
          },
        }
      : {}),
    ...(searchParams.projectType
      ? {
          "projectType.title": {
            equals: searchParams.projectType,
          },
        }
      : {}),
    ...(searchParams.subLocation
      ? {
          "subLocationTwo.title": {
            equals: searchParams.subLocation,
          },
        }
      : {}),
    ...(searchParams.propertyName
      ? {
          title: {
            equals: searchParams.propertyName,
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
      ...(searchParams.bedroomsFrom
        ? [
            {
              numberOfBedrooms: {
                greater_than_equal: searchParams.bedroomsFrom,
              },
            },
            {
              numberOfBedrooms: {
                less_than_equal: searchParams.bedroomsTo,
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
    next: { revalidate: CACHE_REVALIDATE },
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
  const [propertyName, setPropertyName] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [subLocation, setSubLocation] = useState("");
  const [projectType, setProjectType] = useState("");
  const [locationGroup, setLocationGroup] = useState("");
  const decode = (target: string) => {
    return target?.replaceAll("_", "%20")?.replaceAll("and", "%26");
  };
  const findElement = (query: any, target: string) => {
    return query?.indexOf(target);
  };
  const getValue = (splitted: any, params: any, target: string) => {
    return splitted[findElement(params, target)]?.split(":")[1];
  };
  useEffect(() => {
    if (searchParams?.get("q")) {
      const q = searchParams?.get("q");
      const splitted = q?.split("|");
      let params = splitted?.map((r) => {
        let divide = r?.split(":");
        return divide[0];
      });

      if (splitted) {
        const propertyType = decode(getValue(splitted, params, "propertyType"));

        const location = getValue(splitted, params, "location");
        const brand = getValue(splitted, params, "brand");
        const unitSize = decode(getValue(splitted, params, "unitSize"));
        const priceRangeFrom = getValue(splitted, params, "priceRangeFrom");
        const projectType = getValue(splitted, params, "projectType");
        const priceRangeTo = getValue(splitted, params, "priceRangeTo");
        const propertyName = decode(getValue(splitted, params, "propertyName"));
        const bedrooms = decode(getValue(splitted, params, "bedrooms"));
        const locationGroup = getValue(splitted, params, "locationGroup");
        const subLocation = decode(getValue(splitted, params, "subLocation"));
        const numberFrom = priceRangeFrom ? Number(priceRangeFrom) : 0;
        const numberTo = priceRangeTo ? Number(priceRangeTo) : 0;
        setPropertyType(propertyType ? decodeURIComponent(propertyType) : "");
        setLocation(location ? location : "");
        setUnitSize(unitSize ? decodeURIComponent(unitSize) : "");
        setPriceRange([numberFrom, numberTo]);
        setBrand(brand ? brand : "");
        setPropertyName(propertyName ? decodeURIComponent(propertyName) : "");
        setBedrooms(bedrooms ? decodeURIComponent(bedrooms) : "");
        setSubLocation(subLocation ? decodeURIComponent(subLocation) : "");
        setProjectType(projectType ? projectType : "");
        setLocationGroup(locationGroup ? locationGroup : "");
      }
      return;
    }

    const propertyType = searchParams?.get("propertyType");
    const location = searchParams?.get("location");
    const brand = searchParams?.get("brand");
    const unitSize = searchParams?.get("unitSize");
    const priceRangeFrom = searchParams?.get("priceRangeFrom");
    const projectType = searchParams?.get("projectType");
    const priceRangeTo = searchParams?.get("priceRangeTo");
    const propertyName = searchParams?.get("propertyName");
    const bedrooms = searchParams?.get("bedrooms");
    const locationGroup = searchParams?.get("locationGroup");
    const subLocation = searchParams?.get("subLocation");
    const numberFrom = priceRangeFrom ? Number(priceRangeFrom) : 0;
    const numberTo = priceRangeTo ? Number(priceRangeTo) : 0;
    setPropertyType(propertyType ? decodeURIComponent(propertyType) : "");
    setLocation(location ? location : "");
    setUnitSize(unitSize ? unitSize : "");
    setPriceRange([numberFrom, numberTo]);
    setBrand(brand ? brand : "");
    setPropertyName(propertyName ? propertyName : "");
    setBedrooms(bedrooms ? bedrooms : "");
    setSubLocation(subLocation ? subLocation : "");
    setProjectType(projectType ? projectType : "");
    setLocationGroup(locationGroup ? locationGroup : "");
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
    bedroomsFrom: bedrooms ? Number(bedrooms.split(" ")[0]) : 0,
    bedroomsTo: bedrooms ? Number(bedrooms.split(" ")[2]) : 0,
    priceRangeFrom: priceRange[0],
    priceRangeTo: priceRange[1],
    priceRange,
    brand,
    propertyName,
    subLocation,
    bedrooms,
    projectType,
    locationGroup,
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
    setBedrooms,
    setPropertyName,
    setSubLocation,
    priceRangeSteps,
    bedroomsSettings: inputSettings
      ? flattenBedroomRange(inputSettings.bedroomRange)
      : [],
    subLocationSettings: inputSettings
      ? flattenSubLocations(inputSettings.locations)
      : {},
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
