"use client";
import React from "react";
import RedDownTriangle from "@/components/svg/RedDownTriangle";

const Stocks = () => {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="bg-dark-cornflower-blue flex-none py-10 lg:px-9 lg:py-20">
        <div className="mx-10 lg:mx-12">
          <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            Stock Information
          </h2>
          <div className="flex flex-col py-6 sm:px-12">
            <h3 className="lg:text-4xlfont-bold ml-7 text-2xl text-white md:text-3xl">
              FLI
            </h3>
            <div className="flex items-end gap-3">
              <RedDownTriangle />
              <h3 className="text-3xl font-bold text-white md:text-5xl lg:text-8xl">
                0.93
              </h3>
              <h4 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                PHP
              </h4>
            </div>
            <h4 className="mt-5 ml-12 text-lg text-white lg:mt-12">
              as of June 10, 2022
            </h4>
          </div>
        </div>
      </div>
      <div className="bg-oxford-blue flex-1 py-10 px-10 lg:px-16 lg:py-20">
        <div className="flex flex-col gap-2 border-b-[1px] border-solid border-white py-6 pb-2">
          <div className="flex">
            <h3 className="w-2/4 flex-none text-xl font-bold text-white lg:w-4/6">
              Open
            </h3>
            <h3 className="w-2/4 flex-none text-xl font-bold text-white lg:w-auto">
              %Change
            </h3>
          </div>
          <div className="flex">
            <h3 className="w-2/4 flex-none text-xl text-white lg:w-4/6">
              0.93
            </h3>
            <h3 className="w-2/4 flex-none text-xl text-white lg:w-auto">
              -1.06%
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-b-[1px] border-solid border-white py-4">
          <div className="flex">
            <h3 className="w-2/4 flex-none text-xl font-bold text-white lg:w-4/6">
              Close
            </h3>
            <h3 className="w-2/4 flex-none text-xl font-bold text-white lg:w-auto">
              52-Week High
            </h3>
          </div>
          <div className="flex">
            <h3 className="w-2/4 flex-none text-xl text-white lg:w-4/6">
              0.94
            </h3>
            <h3 className="w-2/4 flex-none text-xl text-white lg:w-auto">
              -1.19
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-4">
          <div className="flex">
            <h3 className="w-2/4 flex-none text-xl font-bold text-white lg:w-4/6">
              Change
            </h3>
            <h3 className="w-2/4 flex-none text-xl font-bold text-white lg:w-auto">
              52-Week Low
            </h3>
          </div>
          <div className="flex">
            <h3 className="w-2/4 flex-none text-xl text-white lg:w-4/6">
              -0.01
            </h3>
            <h3 className="w-2/4 flex-none text-xl text-white lg:w-auto">
              -0.92
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stocks;
