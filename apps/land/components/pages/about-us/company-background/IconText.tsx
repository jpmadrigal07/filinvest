"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const IconText = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "company-background-icon-text"
  );
  return (
    <section className="mt-16">
      <div className="mx-3 flex flex-col gap-12 md:flex-row lg:mx-9 lg:gap-36 xl:mx-16 2xl:mx-80">
        {data?.iconText.map((item: any) => (
          <div className="flex flex-1 flex-col items-center gap-4">
            <Image
              src={`${item.iconImage.url}`}
              width={1834}
              height={1414}
              alt={item.iconImage.alt}
            />
            <span className="bg-jet h-16 w-[1px]"></span>

            <h3 className="text-jet text-center text-2xl font-bold">
              {item.description.map((description: any) => (
                <>
                  {description.textLine}
                  <br />
                </>
              ))}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IconText;
