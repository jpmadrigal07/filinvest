"use client";
import React from "react";
import SelectLocation from "@/components/select/SelectLocation";
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
    propertyType: "Co-living",
    location: location ? location : "",
    unitSize: unitSize ? unitSize : "",
    priceRangeFrom: priceRangeFrom ? priceRangeFrom : "",
    priceRangeTo: priceRangeTo ? priceRangeTo : "",
  };
  return (
    <section className="-mt-24 mb-32 flex flex-col gap-9 2xl:-mt-32">
      <PropertySearch className="mx-9 lg:mx-0" searchQuery={searchQuery} />
      <div className="mx-9 mt-16 xl:mx-16 2xl:mx-44">
        <div>
          <h2 className="text-jet text-center text-4xl font-bold">
            Erat nam at lectus urna duis
          </h2>
          <p className="text-dim-gray mt-8">
            Adipiscing enim eu turpis egestas pretium aenean pharetra.
            Consectetur a erat nam at lectus urna duis. Quam quisque id diam vel
            quam elementum pulvinar etiam non. Enim ut tellus elementum sagittis
            vitae et leo. Lacus sed viverra tellus in hac habitasse platea. In
            ante metus dictum at tempor commodo. Cursus risus at ultrices mi
            tempus.
          </p>
        </div>
        <div className="mt-16">
          <div className="flex flex-col items-center gap-7 md:flex-row">
            <div className="flex-1">
              <h3 className="text-jet text-2xl">6 co-living found</h3>
            </div>
            <div className="flex flex-none items-center gap-9">
              <h3 className="text-jet text-xl">Filter by</h3>
              <SelectLocation />
            </div>
          </div>
          <Projects projects={SAMPLE_PROJECTS} />
        </div>
      </div>
    </section>
  );
};

export default Content;
