"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const YearsOfExperience = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.id === "63f07a04cac4bd45ced7816b"
  );
  return (
    <div className="mt-32 flex flex-col items-center gap-12 lg:flex-row lg:gap-0">
      <div className="flex-1">
        <Image
          src={`${data.image.url}`}
          width={1834}
          height={1414}
          alt={data.image.alt}
        />
      </div>
      <div className="flex-1 px-8 md:px-24 lg:pl-24">
        <h2 className="text-jet text-6xl font-bold">{data.title}</h2>
        {data.description.map((description: any) => (
          <p className="text-dim-gray mt-4">{description.description}</p>
        ))}
      </div>
    </div>
  );
};

export default YearsOfExperience;
