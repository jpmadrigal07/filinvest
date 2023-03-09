"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";

const CorporateSocialResponsibility = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) =>
      item.blockType === "pusong-filinvest-corporate-social-responsibility"
  );
  return (
    <div className="bg-ghost-white mt-24 py-16">
      <div className="mx-6 flex flex-col items-center justify-center gap-12 md:flex-row lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="flex-1">
          <Image
            src={`${data?.image?.url}`}
            width={1682}
            height={1288}
            alt="Picture of the author"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-dark-cornflower-blue font-bold">{data?.title}</h3>
          <h2 className="mt-4 text-4xl font-bold">{data?.subTitle}</h2>
          {data?.descriptionParagraphs.map((item: any, index: number) => (
            <p className="text-dim-gray mt-2" key={index}>
              {item?.paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorporateSocialResponsibility;
