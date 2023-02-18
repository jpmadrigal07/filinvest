"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const YearsOfExperience = ({ content }: any) => {
  return (
    <div className="mt-32 flex flex-col items-center gap-12 lg:flex-row lg:gap-0">
      <div className="flex-1">
        <Image
          src={`${content.content[0].image.url}`}
          width={1834}
          height={1414}
          alt="Picture of the author"
        />
      </div>
      <div className="flex-1 px-8 md:px-24 lg:pl-24">
        <h2 className="text-jet text-6xl font-bold">
          {content.content[0].title}
        </h2>
        {content.content[0].description.map((description: any) => (
          <p className="text-dim-gray mt-4">{description.description}</p>
        ))}
      </div>
    </div>
  );
};

export default YearsOfExperience;
