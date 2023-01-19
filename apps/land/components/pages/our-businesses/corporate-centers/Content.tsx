"use client";
import SelectLocation from "@/components/select/SelectLocation";
import React from "react";
import PropertySearch from "@/components/search/PropertySearch";
import { useSearchParams } from "next/navigation";
import Projects from "@/components/list/Projects";
import { SAMPLE_PROJECTS } from "@/helpers/constants";

const Content = () => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const unitSize = searchParams.get("unitSize");
  const priceRangeFrom = searchParams.get("priceRangeFrom");
  const priceRangeTo = searchParams.get("priceRangeTo");
  const searchQuery = {
    propertyType: "Corporate Centers",
    location: location ? location : "",
    unitSize: unitSize ? unitSize : "",
    priceRangeFrom: priceRangeFrom ? priceRangeFrom : "",
    priceRangeTo: priceRangeTo ? priceRangeTo : "",
  };
  return (
    <section className="-mt-24 mb-32 flex flex-col gap-9 2xl:-mt-32">
      <PropertySearch className="mx-9 lg:mx-0" searchQuery={searchQuery} />
      <div className="mt-12 gap-9 lg:mx-9 xl:mx-16 2xl:mx-44 2xl:mt-16">
        <div className="flex items-center gap-7">
          <div className="flex-1">
            <h3 className="text-jet text-2xl">6 Corporate Centers found</h3>
          </div>
          <div className="flex flex-none items-center gap-9">
            <h3 className="text-jet text-xl">Filter by</h3>
            <SelectLocation />
          </div>
        </div>
        <Projects projects={SAMPLE_PROJECTS} />
      </div>
    </section>
  );
};

export default Content;
