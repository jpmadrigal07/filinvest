"use client";
import FeaturedArticles from "@/components/list/FeaturedArticles";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageRightTextLeft = ({ content, news }: any) => {
  const data = content?.content.find(
    (item: any) => item.id === "63f07a3acac4bd45ced7816e"
  );
  return (
    <>
      <div className="mt-20 flex flex-col items-center gap-12 lg:flex-row lg:gap-0">
        <div className="hidden flex-1 pr-24 pl-36 lg:block">
          <h2 className="text-jet text-4xl font-bold">{data.title}</h2>
          {data.description.map((description: any, index: number) => (
            <p className="text-dim-gray mt-4" key={index}>
              {description.description}
            </p>
          ))}
        </div>
        <div className="flex-1">
          <Image
            src={`${data.image.url}`}
            width={1834}
            height={1414}
            alt={data.image.alt}
          />
        </div>
      </div>
      <div className="bg-ghost-white py-24">
        <h3 className="text-center text-4xl font-bold">Latest News</h3>
        <FeaturedArticles
          className="mx-9 mt-16 md:mx-24"
          sliderOnMobile
          articles={news}
        />
      </div>
    </>
  );
};

export default ImageRightTextLeft;
