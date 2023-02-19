"use client";
import PropertySearch from "@/components/search/PropertySearch";
import React from "react";

const TitleText = ({ content }: any) => {
  return (
    <>
      <PropertySearch className="mx-9 lg:mx-0" />
      <div className="mx-9 mt-16 xl:mx-16 2xl:mx-44">
        <h2 className="text-jet text-center text-4xl font-bold">
          {content.content[0].title}
        </h2>
        <p className="text-dim-gray mt-6">
          {content.content[0].title.description}
        </p>
      </div>
    </>
  );
};

export default TitleText;
