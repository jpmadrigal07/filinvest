import React from "react";
import ChevronDown from "@/components/svg/ChevronDown";
import Search from "@/components/svg/Search";
import RangeSlider from "./RangeSlider";

const LookingForProperty = () => {
  return (
    <section className="mx-6 pt-28 lg:mx-0">
      <h2 className="text-jet mt-2 text-center text-4xl font-extrabold">
        Looking for a Property?
      </h2>
      <h4 className="text-dim-gray mt-4 text-center">
        Find your dream residential, commercial, co-living, or industrial
        properties with our smart search tool.
      </h4>
      {/* Large Screen */}
      <div className="bg-dark-cornflower-blue mx-3 mt-12 hidden items-center gap-8 px-10 py-6 lg:mx-9 lg:flex xl:mx-16 2xl:mx-44">
        <div className="w-full flex-1">
          <h3 className="text-white">Property Type</h3>
          <div className="border-silver-chalice flex items-center gap-3 border-b-[1px] py-2 hover:cursor-pointer">
            <input
              type="email"
              placeholder="Any"
              className="ring-none w-full border-none bg-transparent text-white hover:cursor-pointer"
            />
            <ChevronDown />
          </div>
        </div>
        <div className="w-full flex-1">
          <h3 className="text-white">Location</h3>
          <div className="border-silver-chalice flex items-center gap-3 border-b-[1px] py-2 hover:cursor-pointer">
            <input
              type="email"
              placeholder="Cainta"
              className="ring-none w-full border-none bg-transparent text-white hover:cursor-pointer"
            />
            <ChevronDown />
          </div>
        </div>
        <div className="w-full flex-1">
          <h3 className="text-white">Unit Size</h3>
          <div className="border-silver-chalice flex items-center gap-3 border-b-[1px] py-2 hover:cursor-pointer">
            <input
              type="email"
              placeholder="Any"
              className="ring-none w-full border-none bg-transparent text-white hover:cursor-pointer"
            />
            <ChevronDown />
          </div>
        </div>
        <div className="w-full flex-1">
          <h3 className="mb-1 text-white">Price Range</h3>
          <RangeSlider />
          <h4 className="mt-1 text-sm text-white">
            Php 50,000 - Php 50,000,000
          </h4>
        </div>
        <div className="flex-none">
          <button className="hover:bg-platinum focus:bg-platinum delay-50 bg-white py-5 px-8 transition">
            <div className="text-dark-cornflower-blue flex items-center gap-2 font-bold">
              <Search /> Search
            </div>
          </button>
        </div>
      </div>
      {/* Tablet and Mobile Phone */}
      <div className="bg-dark-cornflower-blue mt-12 flex flex-col items-center gap-8 px-6 py-6 md:px-10 lg:mx-9 lg:hidden xl:mx-16 2xl:mx-44">
        <div className="flex w-full flex-1 flex-col gap-8 md:flex-row">
          <div className="w-full flex-1">
            <h3 className="text-white">Property Type</h3>
            <div className="border-silver-chalice flex items-center gap-3 border-b-[1px] py-2 hover:cursor-pointer">
              <input
                type="email"
                placeholder="Any"
                className="ring-none w-full border-none bg-transparent text-white hover:cursor-pointer"
              />
              <ChevronDown />
            </div>
          </div>
          <div className="w-full flex-1">
            <h3 className="text-white">Location</h3>
            <div className="border-silver-chalice flex items-center gap-3 border-b-[1px] py-2 hover:cursor-pointer">
              <input
                type="email"
                placeholder="Cainta"
                className="ring-none w-full border-none bg-transparent text-white hover:cursor-pointer"
              />
              <ChevronDown />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col gap-8 md:flex-row">
          <div className="w-full flex-1">
            <h3 className="text-white">Unit Size</h3>
            <div className="border-silver-chalice flex items-center gap-3 border-b-[1px] py-2 hover:cursor-pointer">
              <input
                type="email"
                placeholder="Any"
                className="ring-none w-full border-none bg-transparent text-white hover:cursor-pointer"
              />
              <ChevronDown />
            </div>
          </div>
          <div className="w-full flex-1">
            <h3 className="mb-1 text-white">Price Range</h3>
            <RangeSlider />
            <h4 className="mt-1 text-sm text-white">
              Php 50,000 - Php 50,000,000
            </h4>
          </div>
          <div className="flex-none">
            <button className="hover:bg-platinum focus:bg-platinum delay-50 bg-white py-5 px-8 transition">
              <div className="text-dark-cornflower-blue flex items-center gap-1 font-bold">
                <Search /> Search
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookingForProperty;
