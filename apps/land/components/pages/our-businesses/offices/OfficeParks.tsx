"use client";
import React from "react";
import Image from "next/image";

const OfficeParks = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "offices-office-parks"
  );
  return (
    <>
      <div>
        <h2 className="text-jet text-center text-4xl font-bold">
          {data.title}
        </h2>
        <p className="text-dim-gray mt-4">{data.description}</p>
      </div>
      <div className="mt-10 flex flex-col gap-9 md:flex-row">
        {data.officeParks.map((item: any, index: number) => (
          <div className="flex-1" key={index}>
            <div>
              <Image
                src={`${item.image.url}`}
                width={1574}
                height={882}
                alt={item.image.alt}
              />
            </div>
            <h3 className="text-jet mt-6 text-2xl font-bold">{item.title}</h3>
            <p className="text-dim-gray mt-3">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default OfficeParks;
