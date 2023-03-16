"use client";
import React, { Dispatch, useEffect, useMemo, useState } from "react";
import Search from "@/components/svg/Search";
import { toCurrency } from "@/helpers/homeCalculator";
import MainDropdown from "../dropdown/MainDropdown";
import { useRouter } from "next/navigation";
import usePropertySearch from "@/components/search/hooks/usePropertySearch";
import { Project } from "shared-types";
import SecondaryDropdown from "../dropdown/SecondaryDropdown";
import RangeSliderStep from "../range-sliders/RangeSliderStep";
import MainInput from "../input/MainInput";
import { T_SearchQuery } from "@/types/global";

const PropertySearch = ({
  showSearch = true,
  className,
  onPropertyResultChange,
  onLoading,
  setSearchParams,
}: //refetch,
{
  showSearch?: boolean;
  className?: string;
  onPropertyResultChange?: Dispatch<Project[]>;
  onLoading?: Dispatch<boolean>;
  setSearchParams?: Dispatch<T_SearchQuery>;
  refetch?: Function;
}) => {
  const router = useRouter();
  const {
    data: propertiesRes,
    isLoading,
    isFetching,
    searchParams,
    setPropertyType,
    setLocation,
    setUnitSize,
    setPriceRange,
    setBedrooms,
    setPropertyName,
    setSubLocation,
    locationSettings,
    propertyTypeSettings,
    unitSizeSettings,
    bedroomsSettings,
    subLocationSettings,
    priceRangeSteps,
  } = usePropertySearch();
  const {
    priceRange,
    propertyType,
    unitSize,
    priceRangeFrom,
    priceRangeTo,
    location,
    bedrooms,
    subLocation,
    propertyName,
    projectType,
    locationGroup,
  } = searchParams;
  const searchInit = () => {
    const params = [
      `propertyType=${encodeURIComponent(propertyType)}`,
      `location=${location}`,
      `unitSize=${unitSize}`,
      `priceRangeFrom=${priceRangeFrom}`,
      `priceRangeTo=${priceRangeTo}`,
      `propertyName=${propertyName}`,
      `projectType=${projectType}`,
      `locationGroup=${locationGroup}`,
      `bedrooms=${bedrooms}`,
      `subLocation=${subLocation}`,
    ];
    router.push(`/property-search?${params.join("&")}`);
  };
  const [formattedUnitSizes, setFormattedUnitSizes] = useState<any>([]);
  const [formattedBedroomRange, setFormattedBedroomRange] = useState<any>([]);
  const [isAdvanceSearchOpen, setIsAdvanceSearchOpen] = useState(false);
  useEffect(() => {
    if (propertiesRes && onPropertyResultChange) {
      onPropertyResultChange(propertiesRes);
    }
  }, [propertiesRes, onPropertyResultChange]);
  useEffect(() => {
    if (onLoading) {
      const isLoadingOrFetching = isLoading || isFetching;
      onLoading(isLoadingOrFetching);
    }
  }, [isLoading, isFetching, onLoading]);
  useEffect(() => {
    if (unitSizeSettings && formattedUnitSizes.length === 0) {
      const dataT = unitSizeSettings.map((unitSize) => {
        return {
          text: `${unitSize[0]} to ${unitSize[1]}`,
          value: unitSize,
        };
      });
      setFormattedUnitSizes(dataT);
    }
  }, [unitSizeSettings, formattedUnitSizes]);
  useEffect(() => {
    if (bedroomsSettings && formattedBedroomRange.length === 0) {
      const dataT = bedroomsSettings.map((bedroom) => {
        return {
          text: `${bedroom[0]} to ${bedroom[1]}`,
          value: bedroom,
        };
      });
      setFormattedBedroomRange(dataT);
    }
  }, [bedroomsSettings, formattedBedroomRange]);
  useEffect(() => {
    if (!isAdvanceSearchOpen && (propertyName || bedrooms || subLocation)) {
      setIsAdvanceSearchOpen(true);
    }
  }, [propertyName, bedrooms, subLocation]);

  //https://app.asana.com/0/1204059442999640/1204080301274375
  useEffect(() => {
    console.log("called");
    if (setSearchParams) {
      setSearchParams(searchParams);
    }
  }, [
    priceRange,
    propertyType,
    unitSize,
    priceRangeFrom,
    priceRangeTo,
    location,
    bedrooms,
    subLocation,
    propertyName,
    projectType,
    locationGroup,
    setSearchParams,
  ]);

  //alt-solution causing network bug
  /* useEffect(() => {
    console.log("called");
    if (refetch) {
      refetch();
    }
    console.log(searchParams);
  }, [searchParams,]); */
  //

  const filteredSublocations = useMemo(() => {
    //@ts-expect-error
    if (subLocationSettings?.length) {
      const settings = subLocationSettings
        //@ts-expect-error
        ?.map((loc: any) => {
          return loc.filter((subLoc: any) => {
            return subLoc.mainLocation === location;
          });
        })
        .flatMap((item: any) => item);

      if (settings.length === 0) return [];

      const filtered = settings[0].subLocations?.map((subLoc: any) => {
        return subLoc.title;
      });

      console.log(filtered);
      return filtered;
    }

    return [];
  }, [subLocationSettings, location]);

  console.log({ filteredSublocations, location });

  return (
    <>
      {/* Large Screen */}
      <div
        className={`bg-dark-cornflower-blue mx-3 mt-12 hidden px-10 py-6 lg:mx-9 lg:block xl:mx-16 2xl:mx-44 ${className}`}
      >
        <div className="items-center gap-8 lg:flex">
          <div className="w-full flex-1">
            <h3 className="text-white">Property Type</h3>
            <MainDropdown
              values={propertyTypeSettings}
              defaultValue={propertyType}
              onValueChange={setPropertyType}
            />
          </div>
          <div className="w-full flex-1">
            <h3 className="text-white">Location</h3>
            <MainDropdown
              values={locationSettings}
              defaultValue={location}
              onValueChange={setLocation}
            />
          </div>
          <div className="w-full flex-1">
            <h3 className="text-white">Unit Size (sqm)</h3>
            <SecondaryDropdown
              values={formattedUnitSizes}
              defaultValue={unitSize}
              onValueChange={setUnitSize}
            />
          </div>
          <div className="w-full flex-1">
            <h3 className="mb-1 text-white">Price Range</h3>
            <RangeSliderStep
              steps={priceRangeSteps}
              onValueChange={setPriceRange}
              value={priceRange}
            />
            <h4 className="mt-1 text-sm text-white">
              Php {toCurrency(priceRangeFrom)} - Php {toCurrency(priceRangeTo)}
            </h4>
          </div>
          {showSearch && (
            <div className="flex-none">
              <button
                className="hover:bg-platinum focus:bg-platinum delay-50 bg-white py-4 px-8 transition"
                onClick={() => searchInit()}
              >
                <div className="text-dark-cornflower-blue flex items-center gap-2 font-bold">
                  <Search /> Search
                </div>
              </button>
            </div>
          )}
        </div>
        <div className="bg-dark-cornflower-blue flex flex-col gap-4 pt-6">
          <span
            className={`cursor-pointer text-white hover:underline ${
              isAdvanceSearchOpen && "font-bold underline"
            }`}
            onClick={() => setIsAdvanceSearchOpen(!isAdvanceSearchOpen)}
          >
            Advance Search
          </span>
          {isAdvanceSearchOpen && (
            <div className="flex gap-8">
              <div className="w-full flex-1">
                <h3 className="text-white">Project Name</h3>
                <MainInput
                  placeholder="Write here..."
                  onChange={(e) => setPropertyName(e.target.value)}
                />
              </div>
              <div className="w-full flex-1">
                <h3 className="text-white">No. of Bedrooms</h3>
                <SecondaryDropdown
                  values={formattedBedroomRange}
                  defaultValue={bedrooms}
                  onValueChange={setBedrooms}
                />
              </div>
              <div className="w-full flex-1">
                <h3 className="text-white">Sub-Location</h3>
                <MainDropdown
                  values={filteredSublocations}
                  defaultValue={subLocation}
                  onValueChange={setSubLocation}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Tablet and Mobile Phone */}
      <div
        className={`bg-dark-cornflower-blue mt-12 flex flex-col items-center gap-8 px-6 py-6 md:px-10 lg:mx-9 lg:hidden xl:mx-16 2xl:mx-44 ${className}`}
      >
        <div className="flex w-full flex-1 flex-col gap-8 md:flex-row">
          <div className="w-full flex-1">
            <h3 className="text-white">Property Type</h3>
            <MainDropdown
              values={propertyTypeSettings}
              defaultValue={propertyType}
              onValueChange={setPropertyType}
            />
          </div>
          <div className="w-full flex-1">
            <h3 className="text-white">Location</h3>
            <MainDropdown
              values={locationSettings}
              defaultValue={location}
              onValueChange={setLocation}
            />
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col gap-8 md:flex-row">
          <div className="w-full flex-1">
            <h3 className="text-white">Unit Size(sqm)</h3>
            <SecondaryDropdown
              values={formattedUnitSizes}
              defaultValue={unitSize}
              onValueChange={setUnitSize}
            />
          </div>
          <div className="w-full flex-1">
            <h3 className="mb-1 text-white">Price Range</h3>
            <RangeSliderStep
              steps={priceRangeSteps}
              onValueChange={setPriceRange}
              value={priceRange}
            />
            <h4 className="mt-1 text-sm text-white">
              Php {toCurrency(priceRangeFrom)} - Php {toCurrency(priceRangeTo)}
            </h4>
          </div>
          {showSearch && (
            <div className="flex-none">
              <button
                className="hover:bg-platinum focus:bg-platinum delay-50 w-full bg-white py-4 px-8 transition md:w-auto"
                onClick={() => searchInit()}
              >
                <div className="text-dark-cornflower-blue flex items-center justify-center gap-2 font-bold md:justify-start">
                  <Search /> Search
                </div>
              </button>
            </div>
          )}
        </div>
        <div className="w-full">
          <span
            className={`cursor-pointer text-white hover:underline ${
              isAdvanceSearchOpen && "font-bold underline"
            }`}
            onClick={() => setIsAdvanceSearchOpen(!isAdvanceSearchOpen)}
          >
            Advance Search
          </span>
          {isAdvanceSearchOpen && (
            <div className="mt-6 mb-2 grid grid-cols-1 gap-8">
              <div className="w-full flex-1">
                <h3 className="text-white">Project Name</h3>
                <MainInput
                  placeholder="Write here..."
                  onChange={(e) => setPropertyName(e.target.value)}
                />
              </div>
              <div className="w-full flex-1">
                <h3 className="text-white">No. of Bedrooms</h3>
                <SecondaryDropdown
                  values={formattedBedroomRange}
                  defaultValue={bedrooms}
                  onValueChange={setBedrooms}
                />
              </div>
              <div className="w-full flex-1">
                <h3 className="text-white">Sub-Location</h3>
                <MainDropdown
                  values={filteredSublocations}
                  defaultValue={subLocation}
                  onValueChange={setSubLocation}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PropertySearch;
