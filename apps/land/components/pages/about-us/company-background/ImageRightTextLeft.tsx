"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageRightTextLeft = ({ content }: any) => {
  return (
    <div className="mt-20 flex flex-col items-center gap-12 lg:flex-row lg:gap-0">
      <div className="hidden flex-1 pr-24 pl-36 lg:block">
        <h2 className="text-jet text-4xl font-bold">
          {content.content[2].title}
        </h2>
        {content.content[2].description.map((description: any) => (
          <p className="text-dim-gray mt-4">{description.description}</p>
        ))}
      </div>
      <div className="flex-1">
        <Image
          src={`${content.content[2].image.url}`}
          width={1834}
          height={1414}
          alt={content.content[2].image.alt}
        />
      </div>
    </div>
  );
};

export default ImageRightTextLeft;
