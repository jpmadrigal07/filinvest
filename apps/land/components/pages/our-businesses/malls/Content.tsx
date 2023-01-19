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
    propertyType: "Malls",
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
            Bringing life to the city
          </h2>
          <p className="text-dim-gray mt-8">
            Filinvest creates a wealth of shopping, dining and entertainment
            options with retail hubs such as Festival Supermall and Westgate
            Center, as well as pocket commercial areas near its residential
            projects. The company continues to aggressively expand its retail
            portfolio with new developments such as the Il Corso lifestyle strip
            within City di Mare in Cebu, Main Square in Rizal, Fora in Tagaytay
            with a number of malls and other commercial developments bringing
            retail choices to Filipinos soon.
          </p>
        </div>
        <div className="mt-16">
          <div className="flex flex-col items-center gap-7 md:flex-row">
            <div className="flex-1">
              <h3 className="text-jet text-2xl">6 malls found</h3>
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
