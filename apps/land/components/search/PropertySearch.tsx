"use client";
import React, { useEffect, useState } from "react";
import Search from "@/components/svg/Search";
import RangeSliderMark from "@/components/range-sliders/RangeSliderMark";
import { toCurrency } from "@/helpers/homeCalculator";
import MainDropdown from "../dropdown/MainDropdown";
import { LOCATION_OBJ, PROJECT_TYPE, UNIT_SIZE } from "@/helpers/constants";
import { useRouter } from "next/navigation";
import { T_Locations, T_SearchQuery } from "@/types/global";

const PropertySearch = ({
  showSearch = true,
  className,
  searchQuery,
  locations,
  propertyTypes,
}: {
  showSearch?: boolean;
  className?: string;
  searchQuery?: T_SearchQuery;
  locations: T_Locations;
  propertyTypes: string[];
}) => {
  const router = useRouter();
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [unitSize, setUnitSize] = useState("");
  const [priceRange, setPriceRange] = useState([20, 50]);
  const [priceCurrencyRange, setPriceCurrencyRange] = useState([0, 0]);
  useEffect(() => {
    if (searchQuery) {
      const { priceRangeFrom, priceRangeTo, propertyType, location, unitSize } =
        searchQuery;
      const numberFrom = priceRangeFrom ? Number(priceRangeFrom) : 0;
      const numberTo = priceRangeTo ? Number(priceRangeTo) : 0;
      setPropertyType(propertyType);
      setLocation(location);
      setUnitSize(unitSize);
      setPriceRange([numberFrom / 1000000, numberTo / 1000000]);
      setPriceCurrencyRange([numberFrom, numberTo]);
    }
  }, [searchQuery]);
  useEffect(() => {
    const pricePerValue = 1000000;
    const min = priceRange[0] * pricePerValue;
    const max = priceRange[1] * pricePerValue;
    setPriceCurrencyRange([min, max]);
  }, [priceRange]);
  const searchInit = () => {
    router.push(
      `/property-search?propertyType=${propertyType}&location=${location}&unitSize=${unitSize}&priceRangeFrom=${priceCurrencyRange[0]}&priceRangeTo=${priceCurrencyRange[1]}`
    );
  };
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
          />
        </div>
        <div className="w-full flex-1">
          <h3 className="text-white">Location</h3>
          <MainDropdown
            values={locations}
            defaultValue={location}
            onValueChange={setLocation}
          />
        </div>
        <div className="w-full flex-1">
          <h3 className="text-white">Unit Size</h3>
          <MainDropdown
            values={UNIT_SIZE}
            defaultValue={unitSize}
            onValueChange={setUnitSize}
          />
        </div>
        <div className="w-full flex-1">
          <h3 className="mb-1 text-white">Price Range</h3>
          <RangeSliderMark
            range
            defaultValue={priceRange}
            onValueChange={setPriceRange}
            value={priceRange}
          />
          <h4 className="mt-1 text-sm text-white">
            Php {toCurrency(priceCurrencyRange[0])} - Php{" "}
            {toCurrency(priceCurrencyRange[1])}
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
              values={PROJECT_TYPE}
              defaultValue={propertyType}
              onValueChange={setPropertyType}
            />
          </div>
          <div className="w-full flex-1">
            <h3 className="text-white">Location</h3>
            <MainDropdown
              values={LOCATION_OBJ}
              defaultValue={location}
              onValueChange={setLocation}
            />
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col gap-8 md:flex-row">
          <div className="w-full flex-1">
            <h3 className="text-white">Unit Size</h3>
            <MainDropdown
              values={UNIT_SIZE}
              defaultValue={unitSize}
              onValueChange={setUnitSize}
            />
          </div>
          <div className="w-full flex-1">
            <h3 className="mb-1 text-white">Price Range</h3>
            <RangeSliderMark
              range
              defaultValue={priceRange}
              onValueChange={setPriceRange}
              value={priceRange}
            />
            <h4 className="mt-1 text-sm text-white">
              Php {toCurrency(priceCurrencyRange[0])} - Php{" "}
              {toCurrency(priceCurrencyRange[1])}
            </h4>
          </div>
          {showSearch && (
            <div className="flex-none">
              <button className="hover:bg-platinum focus:bg-platinum delay-50 bg-white py-4 px-8 transition">
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
