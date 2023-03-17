"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const OfficeParks = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "offices-parks-office-parks"
  );
  return (
    <>
      <div className="flex flex-col gap-9 md:flex-row">
        {data.officeParks.map((item: any, index: number) => (
          <Link
            href="/our-businesses/office-parks/north-gate"
            className="flex-1 transition delay-150 hover:opacity-70"
            key={index}
          >
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
          </Link>
        ))}
      </div>
    </>
  );
};

export default OfficeParks;
