"use client";
import React from "react";
import RedDownTriangle from "@/components/svg/RedDownTriangle";

const Stocks = () => {
  return (
    <section className="flex">
      <div className="bg-dark-cornflower-blue flex-none py-20 px-9">
        <div className="mx-12">
          <h2 className="text-4xl font-bold text-white">Stock Information</h2>
          <div className="flex flex-col py-6 px-12">
            <h3 className="ml-7 text-4xl font-bold text-white">FLI</h3>
            <div className="flex items-end gap-3">
              <RedDownTriangle />
              <h3 className="text-8xl font-bold text-white">0.93</h3>
              <h4 className="text-4xl font-bold text-white">PHP</h4>
            </div>
            <h4 className="mt-12 ml-12 text-lg text-white">
              as of June 10, 2022
            </h4>
          </div>
        </div>
      </div>
      <div className="bg-oxford-blue flex-1 py-20 px-16">
        <div className="flex flex-col gap-2 border-b-[1px] border-solid border-white py-6 pb-2">
          <div className="flex">
            <h3 className="w-4/6 flex-none text-xl font-bold text-white">
              Open
            </h3>
            <h3 className="flex-none text-xl font-bold text-white">%Change</h3>
          </div>
          <div className="flex">
            <h3 className="w-4/6 flex-none text-xl text-white">0.93</h3>
            <h3 className="flex-none text-xl text-white">-1.06%</h3>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-b-[1px] border-solid border-white py-4">
          <div className="flex">
            <h3 className="w-4/6 flex-none text-xl font-bold text-white">
              Close
            </h3>
            <h3 className="flex-none text-xl font-bold text-white">
              52-Week High
            </h3>
          </div>
          <div className="flex">
            <h3 className="w-4/6 flex-none text-xl text-white">0.94</h3>
            <h3 className="flex-none text-xl text-white">-1.19</h3>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-4">
          <div className="flex">
            <h3 className="w-4/6 flex-none text-xl font-bold text-white">
              Change
            </h3>
            <h3 className="flex-none text-xl font-bold text-white">
              52-Week Low
            </h3>
          </div>
          <div className="flex">
            <h3 className="w-4/6 flex-none text-xl text-white">-0.01</h3>
            <h3 className="flex-none text-xl text-white">-0.92</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stocks;
