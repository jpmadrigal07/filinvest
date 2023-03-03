"use client";
import React from "react";

const TitleText = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "mixed-used-and-estates-title-and-text"
  );
  return (
    <>
      <div>
        <h2 className="text-jet text-center text-4xl font-bold">
          {data.title}
        </h2>
        <p className="text-dim-gray mt-8">{data.description}</p>
      </div>
    </>
  );
};

export default TitleText;
