"use client";
import React from "react";
import Image from "next/image";

const OfficeParks = ({ content }: any) => {
  return (
    <section className="mx-9 mb-32 -mt-12 md:-mt-12 lg:-mt-32 xl:mx-16 2xl:mx-44 2xl:-mt-40">
      <div className="flex flex-col gap-9 md:flex-row">
        {content.content[0].officeParks.map((item: any) => (
          <div className="flex-1">
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
    </section>
  );
};

export default OfficeParks;
