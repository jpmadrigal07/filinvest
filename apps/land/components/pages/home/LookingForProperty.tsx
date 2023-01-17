import React from "react";
import PropertySearch from "@/components/search/PropertySearch";

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
      <PropertySearch />
    </section>
  );
};

export default LookingForProperty;
