"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { OUR_BUSINESSES_SUB_ROUTES } from "../../../helpers/routes/ourBusinesses";

const OurBusinesses = () => {
  return (
    <div className="divide-sonic-silver flex divide-x py-8">
      <div className="flex-none pr-24">
        {OUR_BUSINESSES_SUB_ROUTES.map((routes, index) => {
          return (
            <div key={index} className={`${index > 0 && "mt-12"}`}>
              <Link href={routes.url} className="text-white hover:underline">
                <h3 className="text-xl text-white">{routes.name}</h3>
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
              <h3 className="text-xl text-white">Project Type</h3>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-white opacity-50">Condo</h4>
              <h4 className="text-white opacity-50">House & Lot</h4>
              <h4 className="text-white opacity-50">Lot Only</h4>
            </div>
          </div>
          <div className="flex gap-24">
            <div className="w-1/3 flex-none">
              <h3 className="text-xl text-white">Browse by</h3>
              <h3 className="text-xl text-white">Location</h3>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-white opacity-50">Metro Manila</h4>
              <h4 className="text-white opacity-50">Rest of Luzon</h4>
              <h4 className="text-white opacity-50">Visayas</h4>
              <h4 className="text-white opacity-50">Mindanao</h4>
            </div>
          </div>
          <div className="flex gap-24">
            <div className="w-1/3 flex-none">
              <h3 className="text-xl text-white">Browse by</h3>
              <h3 className="text-xl text-white">Brand</h3>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-white opacity-50">Prestige</h4>
              <h4 className="text-white opacity-50">Aspire</h4>
              <h4 className="text-white opacity-50">Futura</h4>
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
