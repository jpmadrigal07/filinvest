"use client";
import Image from "next/image";
import React from "react";

const Residences = () => {
  return (
    <div className="divide-sonic-silver flex divide-x py-8">
      <div className="flex-none pr-24">
        <h3 className="text-xl text-white">Featured Projects</h3>
        <h2 className="mt-4 text-4xl text-white">Activa Cubao</h2>
        <h4 className="mt-4 text-white opacity-50">
          Mattis molestie a iaculis at erat pellentesque adipiscing
          <br />
          commodo nunc lobortis mattis.
        </h4>
        <div className="mt-9">
          <Image
            src="/activa-residences.png"
            width={427}
            height={240}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="flex flex-1 gap-6 px-24">
        <div className="flex flex-1 flex-col gap-12">
          <div className="flex gap-24">
            <div className="w-1/3 flex-none">
              <h3 className="text-xl text-white">Browse by</h3>
              <h3 className="text-xl text-white">Property Type</h3>
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
        </div>
        <div className="flex flex-1 flex-col gap-12">
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
      </div>
    </div>
  );
};

export default Residences;
