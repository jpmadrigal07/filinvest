"use client";
import React from "react";

const TitleText = ({ content }: any) => {
  return (
    <section className="mx-9 mt-16 mb-32 xl:mx-16 2xl:mx-44">
      <div>
        <div>
          <h2 className="text-jet text-center text-4xl font-bold">
            {content.content[0].title}
          </h2>
          <p className="text-dim-gray mt-8">{content.content[0].description}</p>
        </div>
      </div>
    </section>
  );
};

export default TitleText;
