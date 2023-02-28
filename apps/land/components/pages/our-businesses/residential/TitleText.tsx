"use client";
import PropertySearch from "@/components/search/PropertySearch";
import React from "react";

const TitleText = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "residential-title-and-text"
  );
  return (
    <>
      <PropertySearch className="mx-9 lg:mx-0" />
      <div className="mx-9 mt-16 xl:mx-16 2xl:mx-44">
        <h2 className="text-jet text-center text-4xl font-bold">
          {data.title}
        </h2>
        <p className="text-dim-gray mt-6">{data.description}</p>
      </div>
    </>
  );
};

export default TitleText;
