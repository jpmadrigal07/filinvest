"use client";
import React from "react";
import PropertySearch from "@/components/search/PropertySearch";

const LookingForProperty = ({ content }: any) => {
  return (
    <section className="mx-6 pt-28 lg:mx-0">
      <h2 className="text-jet mt-2 text-center text-4xl font-extrabold">
        {content.content[2].title}
      </h2>
      <h4 className="text-dim-gray mt-4 text-center">
        {content.content[2].description}
      </h4>
      <PropertySearch />
    </section>
  );
};

export default LookingForProperty;
