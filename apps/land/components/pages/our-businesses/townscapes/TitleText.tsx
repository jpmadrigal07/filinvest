"use client";
import React from "react";

const TitleText = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "townscapes-title-and-text"
  );
  return (
    <>
      <div>
        <div>
          <h2 className="text-jet text-center text-4xl font-bold">
            {data.title}
          </h2>
          <p className="text-dim-gray mt-8">{data.description}</p>
        </div>
      </div>
    </>
  );
};

export default TitleText;
