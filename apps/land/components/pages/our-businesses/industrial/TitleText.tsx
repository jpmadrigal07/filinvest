"use client";
import React from "react";

const TitleText = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "industrial-title-and-text"
  );
  return (
    <section className="mx-9 mt-16 mb-32 xl:mx-16 2xl:mx-44">
      <div>
        <div>
          <h2 className="text-jet text-center text-4xl font-bold">
            {data.title}
          </h2>
          <p className="text-dim-gray mt-8">{data.description}</p>
        </div>
      </div>
    </section>
  );
};

export default TitleText;
