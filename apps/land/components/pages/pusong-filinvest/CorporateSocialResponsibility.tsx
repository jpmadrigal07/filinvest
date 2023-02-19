"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";

const CorporateSocialResponsibility = ({ content }: any) => {
  return (
    <div className="bg-ghost-white mt-24 py-16">
      <div className="mx-6 flex flex-col items-center justify-center gap-12 md:flex-row lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="flex-1">
          <Image
            src={`${content.content[1].image.url}`}
            width={1682}
            height={1288}
            alt="Picture of the author"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-dark-cornflower-blue font-bold">
            {content.content[1].title}
          </h3>
          <h2 className="mt-4 text-4xl font-bold">
            {content.content[1].subTitle}
          </h2>
          {content.content[1].descriptionParagraphs.map((item) => (
            <p className="text-dim-gray mt-2">{item.paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorporateSocialResponsibility;
