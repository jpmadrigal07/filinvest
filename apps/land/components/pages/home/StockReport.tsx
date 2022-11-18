"use client";
import Image from "next/image";
import React from "react";
import BorderButton from "@/components/button/BorderButton";
import RedDownTriangle from "@/components/svg/RedDownTriangle";

const StockReport = () => {
  return (
    <section className="flex pt-24">
      <div className="bg-oxford-blue flex-1 py-20 px-9">
        <div className="mx-auto w-1/2 w-full">
          <h2 className="text-3xl font-bold text-white">Stock Information</h2>
          <div className="flex flex-col py-6 px-12">
            <h3 className="ml-7 text-2xl text-white">FLI</h3>
            <div className="flex items-end gap-3">
              <RedDownTriangle />
              <h3 className="text-4xl text-white">1.00</h3>
              <h4 className="text-lg text-white">PHP</h4>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-b-[1px] border-solid border-white py-6 pb-2">
            <div className="flex">
              <h3 className="w-4/6 flex-none text-xl font-bold text-white">
                Open
              </h3>
              <h3 className="flex-none text-xl font-bold text-white">
                %Change
              </h3>
            </div>
            <div className="flex">
              <h3 className="w-4/6 flex-none text-xl text-white">1.00</h3>
              <h3 className="flex-none text-xl text-white">-1.96%</h3>
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
              <h3 className="w-4/6 flex-none text-xl text-white">1.02</h3>
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
              <h3 className="w-4/6 flex-none text-xl text-white">-0.02</h3>
              <h3 className="flex-none text-xl text-white">-1.00</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-vivid-sky-blue flex-1 py-20 px-16">
        <h2 className="text-3xl font-bold text-white">Annual Report</h2>
        <div className="mt-24 flex gap-14">
          <div className="flex items-center gap-12">
            <div className="w-1/3 flex-none">
              <Image
                src="/fli-stock-reports.png"
                width={487}
                height={671}
                alt="Picture of the author"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <div className="w-1/4 flex-none">
                  <Image
                    src="/download-stock-report.png"
                    width={143}
                    height={143}
                    alt="Picture of the author"
                  />
                </div>
                <h4 className="text-normal text-white">
                  Download Annual Report For 2021
                </h4>
              </div>
              <div>
                <button type="button" className="mt-28">
                  <BorderButton
                    buttonText="View All Annual Report"
                    sidePadding="4"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StockReport;
