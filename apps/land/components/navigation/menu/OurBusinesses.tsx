"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { OUR_BUSINESSES_SUB_ROUTES } from "@/helpers/routes/ourBusinesses";
import { PROPERTY_TYPE, LOCATION_OBJ, BRAND_ARR } from "@/helpers/constants";
import ChevronRight from "@/components/svg/ChevronRight";

const OurBusinesses = () => {
  const locations = Object.keys(LOCATION_OBJ);
  return (
    <div className="divide-sonic-silver flex divide-x py-8">
      <div className="h-[40rem] flex-none pr-24 hover:overflow-auto">
        {OUR_BUSINESSES_SUB_ROUTES.map((routes, index) => {
          return (
            <div key={index} className={`${index > 0 && "mt-12"}`}>
              <Link href={routes.url} className="text-white hover:underline">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl text-white">{routes.name}</h3>
                  {routes.name === "Residential" && <ChevronRight />}
                </div>
                <h4 className="text-white opacity-50">
                  Excepteur sint occaecat cupidatat non.
                </h4>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex flex-1 gap-6 px-24">
        <div className="flex flex-1 flex-col gap-12">
          <div className="flex gap-24">
            <div className="w-1/3 flex-none">
              <h3 className="text-xl text-white">Browse by</h3>
              <h3 className="text-xl text-white">Property Type</h3>
            </div>
            <div className="flex flex-col gap-6">
              {PROPERTY_TYPE.map((type) => {
                return (
                  <Link
                    className="text-white opacity-50 hover:underline"
                    href={"/"}
                  >
                    {type}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex gap-24">
            <div className="w-1/3 flex-none">
              <h3 className="text-xl text-white">Browse by</h3>
              <h3 className="text-xl text-white">Location</h3>
            </div>
            <div className="flex flex-col gap-6">
              {locations.map((location) => {
                return (
                  <Link
                    className="text-white opacity-50 hover:underline"
                    href={"/"}
                  >
                    {location}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex gap-24">
            <div className="w-1/3 flex-none">
              <h3 className="text-xl text-white">Browse by</h3>
              <h3 className="text-xl text-white">Brand</h3>
            </div>
            <div className="flex flex-col gap-6">
              {BRAND_ARR.map((brand) => {
                return (
                  <Link
                    className="text-white opacity-50 hover:underline"
                    href={"/"}
                  >
                    {brand}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl text-white">Our Business Units</h3>
          <h2 className="mt-4 text-4xl text-white">Residential</h2>
          <h4 className="mt-4 text-white opacity-50">
            Mattis molestie a iaculis at erat pellentesque adipiscing commodo
            nunc lobortis mattis.
          </h4>
          <h4 className="mt-6 text-white opacity-50">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </h4>
          <div className="mt-9">
            <Image
              src="/residential-unit-business.png"
              width={387}
              height={324}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBusinesses;
