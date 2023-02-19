"use client";
import React from "react";
import Image from "next/image";
import SelectLocation from "@/components/select/SelectLocation";
import Projects from "@/components/list/Projects";
import { SAMPLE_PROJECTS } from "@/helpers/constants";

const OfficeParks = ({ content }: any) => {
  return (
    <section className="mx-9 mt-16 mb-32 xl:mx-16 2xl:mx-44">
      <div>
        <div>
          <h2 className="text-jet text-center text-4xl font-bold">
            {content.content[0].title}
          </h2>
          <p className="text-dim-gray mt-4">{content.content[0].description}</p>
        </div>
        <div className="mt-10 flex flex-col gap-9 md:flex-row">
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
      </div>
    </section>
  );
};

export default OfficeParks;
