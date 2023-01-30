"use client";
import React, { Dispatch, useEffect } from "react";
import Search from "@/components/svg/Search";
import RangeSliderMark from "@/components/range-sliders/RangeSliderMark";
import { toCurrency } from "@/helpers/homeCalculator";
import MainDropdown from "../dropdown/MainDropdown";
import { useRouter } from "next/navigation";
import { T_Locations } from "@/types/global";
import usePropertySearch from "@/components/search/hooks/usePropertySearch";
import { Project } from "shared-types";
import MainInput from "../input/MainInput";

const PropertySearch = ({
  showSearch = true,
  className,
  locations,
  propertyTypes,
  onPropertyResultChange,
  onLoading,
}: {
  showSearch?: boolean;
  className?: string;
  locations: T_Locations;
  propertyTypes: string[];
  onPropertyResultChange?: Dispatch<Project[]>;
  onLoading?: Dispatch<boolean>;
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
    priceRangeMinMax,
    propertyType: currentPropertyType,
    location: currentLocation,
  } = usePropertySearch();
  const {
    priceRange,
    propertyType,
    unitSize,
    priceRangeFrom,
    priceRangeTo,
    location,
  } = searchParams;
  const searchInit = () => {
    const params = [
      `propertyType=${encodeURIComponent(propertyType)}`,
      `location=${location}`,
      `unitSize=${unitSize}`,
      `priceRangeFrom=${priceRangeFrom}`,
      `priceRangeTo=${priceRangeTo}`,
    ];
    router.push(`/property-search?${params.join("&")}`);
  };
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

  return (
    <>
      {/* Large Screen */}
      <div
        className={`bg-dark-cornflower-blue mx-3 mt-12 hidden items-center gap-8 px-10 py-6 lg:mx-9 lg:flex xl:mx-16 2xl:mx-44 ${className}`}
      >
        <div className="w-full flex-1">
          <h3 className="text-white">Property Type</h3>
          <MainDropdown
            values={propertyTypes}
            defaultValue={propertyType}
            onValueChange={setPropertyType}
            currentValue={currentPropertyType}
          />
        </div>
        <div className="w-full flex-1">
          <h3 className="text-white">Location</h3>
          <MainDropdown
            values={locations}
            defaultValue={location}
            onValueChange={setLocation}
            currentValue={currentLocation}
          />
        </div>
        <div className="w-full flex-1">
          <h3 className="text-white">Unit Size (sqm)</h3>
          <MainInput
            type="number"
            defaultValue={unitSize}
            onChange={(e) => setUnitSize(e.target.value)}
          />
        </div>
        <div className="w-full flex-1">
          <h3 className="mb-1 text-white">Price Range</h3>
          <RangeSliderMark
            range
            min={priceRangeMinMax ? priceRangeMinMax[0] : 0}
            max={priceRangeMinMax ? priceRangeMinMax[1] : 100000000}
            defaultValue={priceRange}
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
      {/* Tablet and Mobile Phone */}
      <div
        className={`bg-dark-cornflower-blue mt-12 flex flex-col items-center gap-8 px-6 py-6 md:px-10 lg:mx-9 lg:hidden xl:mx-16 2xl:mx-44 ${className}`}
      >
        <div className="flex w-full flex-1 flex-col gap-8 md:flex-row">
          <div className="w-full flex-1">
            <h3 className="text-white">Property Type</h3>
            <MainDropdown
              values={propertyTypes}
              defaultValue={propertyType}
              onValueChange={setPropertyType}
              currentValue={currentPropertyType}
            />
          </div>
          <div className="w-full flex-1">
            <h3 className="text-white">Location</h3>
            <MainDropdown
              values={locations}
              defaultValue={location}
              onValueChange={setLocation}
              currentValue={currentLocation}
            />
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col gap-8 md:flex-row">
          <div className="w-full flex-1">
            <h3 className="text-white">Unit Size(sqm)</h3>
            <MainInput
              type="number"
              defaultValue={unitSize}
              onChange={(e) => setUnitSize(e.target.value)}
            />
          </div>
          <div className="w-full flex-1">
            <h3 className="mb-1 text-white">Price Range</h3>
            <RangeSliderMark
              range
              min={priceRangeMinMax ? priceRangeMinMax[0] : 0}
              max={priceRangeMinMax ? priceRangeMinMax[1] : 100000000}
              defaultValue={priceRange}
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
      </div>
    </>
  );
};

export default PropertySearch;
