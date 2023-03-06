"use client";
import React from "react";
import Image from "next/image";
import Positions from "./Positions";
export default function CareersImageText({ content }: any) {
  const careersImageTextBlock = content?.content.find(
    (item: any) => item.blockType === "careers-image-text"
  );

  const items = careersImageTextBlock?.item;

  return (
    <section className="mx-9 mt-24 xl:mx-16 2xl:mx-44">
      <h2 className="text-dark-cornflower-blue text-4xl font-bold">
        {careersImageTextBlock?.title}
      </h2>
      <div className="mt-20 flex flex-col gap-12 md:flex-row">
        {items?.map((item: any) => (
          <div key={item?.id}>
            <div className="flex items-center gap-6">
              <div>
                <Image
                  src={item?.logo?.url}
                  width={105}
                  height={105}
                  alt={item?.logo?.alt}
                />
              </div>
              <h3 className="text-jet text-2xl font-bold">{item?.title}</h3>
            </div>
            <p className="text-dim-gray mt-6">{item?.description}</p>
          </div>
        ))}
      </div>
      <h2 className="text-dark-cornflower-blue mt-20 text-center text-4xl font-bold">
        Open Positions
      </h2>
      <Positions content={content} />
    </section>
  );
}
