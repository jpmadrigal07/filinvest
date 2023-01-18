"use client";
import SelectLocation from "@/components/select/SelectLocation";
import Flag from "@/components/svg/Flag";
import Image from "next/image";
import React from "react";
import PropertySearch from "@/components/search/PropertySearch";
import { useSearchParams } from "next/navigation";

const Content = () => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const unitSize = searchParams.get("unitSize");
  const priceRangeFrom = searchParams.get("priceRangeFrom");
  const priceRangeTo = searchParams.get("priceRangeTo");
  const searchQuery = {
    propertyType: "Corporate Centers",
    location: location ? location : "",
    unitSize: unitSize ? unitSize : "",
    priceRangeFrom: priceRangeFrom ? priceRangeFrom : "",
    priceRangeTo: priceRangeTo ? priceRangeTo : "",
  };
  return (
    <section className="-mt-24 mb-32 flex flex-col gap-9 2xl:-mt-32">
      <PropertySearch className="mx-9 lg:mx-0" searchQuery={searchQuery} />
      <div className="mt-12 gap-9 lg:mx-9 xl:mx-16 2xl:mx-44 2xl:mt-16">
        <div className="flex items-center gap-7">
          <div className="flex-1">
            <h3 className="text-jet text-2xl">6 Corporate Centers found</h3>
          </div>
          <div className="flex flex-none items-center gap-9">
            <h3 className="text-jet text-xl">Filter by</h3>
            <SelectLocation />
          </div>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-x-12 gap-y-16">
          <div className="flex flex-1 flex-col gap-4">
            <Image
              src="/100-west-cyberzone.png"
              width={507}
              height={407}
              alt="Picture of the author"
            />
            <h3 className="text-jet text-2xl font-bold">100 West Cyberzone</h3>
            <div className="flex gap-4">
              <button
                type="button"
                className="border-blue-ryb flex items-center gap-3 rounded-full border-[1px] px-6 py-2"
              >
                <div className="flex-none">
                  <Flag color="#303030" classes="w-5 h-5" />
                </div>
                <p className="text-md text-jet">Offices</p>
              </button>
              <button
                type="button"
                className="bg-blue-ryb flex items-center gap-3 rounded-full px-6 py-2"
              >
                <div className="flex-none">
                  <Flag color="#ffffff" classes="w-5 h-5" />
                </div>
                <p className="text-md text-white">Makati</p>
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <Image
              src="/100-west-cyberzone.png"
              width={507}
              height={407}
              alt="Picture of the author"
            />
            <h3 className="text-jet text-2xl font-bold">100 West Cyberzone</h3>
            <div className="flex gap-4">
              <button
                type="button"
                className="border-blue-ryb flex items-center gap-3 rounded-full border-[1px] px-6 py-2"
              >
                <div className="flex-none">
                  <Flag color="#303030" classes="w-5 h-5" />
                </div>
                <p className="text-md text-jet">Offices</p>
              </button>
              <button
                type="button"
                className="bg-blue-ryb flex items-center gap-3 rounded-full px-6 py-2"
              >
                <div className="flex-none">
                  <Flag color="#ffffff" classes="w-5 h-5" />
                </div>
                <p className="text-md text-white">Makati</p>
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <Image
              src="/100-west-cyberzone.png"
              width={507}
              height={407}
              alt="Picture of the author"
            />
            <h3 className="text-jet text-2xl font-bold">100 West Cyberzone</h3>
            <div className="flex gap-4">
              <button
                type="button"
                className="border-blue-ryb flex items-center gap-3 rounded-full border-[1px] px-6 py-2"
              >
                <div className="flex-none">
                  <Flag color="#303030" classes="w-5 h-5" />
                </div>
                <p className="text-md text-jet">Offices</p>
              </button>
              <button
                type="button"
                className="bg-blue-ryb flex items-center gap-3 rounded-full px-6 py-2"
              >
                <div className="flex-none">
                  <Flag color="#ffffff" classes="w-5 h-5" />
                </div>
                <p className="text-md text-white">Makati</p>
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <Image
              src="/100-west-cyberzone.png"
              width={507}
              height={407}
              alt="Picture of the author"
            />
            <h3 className="text-jet text-2xl font-bold">100 West Cyberzone</h3>
            <div className="flex gap-4">
              <button
                type="button"
                className="border-blue-ryb flex items-center gap-3 rounded-full border-[1px] px-6 py-2"
              >
                <div className="flex-none">
                  <Flag color="#303030" classes="w-5 h-5" />
                </div>
                <p className="text-md text-jet">Offices</p>
              </button>
              <button
                type="button"
                className="bg-blue-ryb flex items-center gap-3 rounded-full px-6 py-2"
              >
                <div className="flex-none">
                  <Flag color="#ffffff" classes="w-5 h-5" />
                </div>
                <p className="text-md text-white">Makati</p>
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <Image
              src="/100-west-cyberzone.png"
              width={507}
              height={407}
              alt="Picture of the author"
            />
            <h3 className="text-jet text-2xl font-bold">100 West Cyberzone</h3>
            <div className="flex gap-4">
              <button
                type="button"
                className="border-blue-ryb flex items-center gap-3 rounded-full border-[1px] px-6 py-2"
              >
                <div className="flex-none">
                  <Flag color="#303030" classes="w-5 h-5" />
                </div>
                <p className="text-md text-jet">Offices</p>
              </button>
              <button
                type="button"
                className="bg-blue-ryb flex items-center gap-3 rounded-full px-6 py-2"
              >
                <div className="flex-none">
                  <Flag color="#ffffff" classes="w-5 h-5" />
                </div>
                <p className="text-md text-white">Makati</p>
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <Image
              src="/100-west-cyberzone.png"
              width={507}
              height={407}
              alt="Picture of the author"
            />
            <h3 className="text-jet text-2xl font-bold">100 West Cyberzone</h3>
            <div className="flex gap-4">
              <button
                type="button"
                className="border-blue-ryb flex items-center gap-3 rounded-full border-[1px] px-6 py-2"
              >
                <div className="flex-none">
                  <Flag color="#303030" classes="w-5 h-5" />
                </div>
                <p className="text-md text-jet">Offices</p>
              </button>
              <button
                type="button"
                className="bg-blue-ryb flex items-center gap-3 rounded-full px-6 py-2"
              >
                <div className="flex-none">
                  <Flag color="#ffffff" classes="w-5 h-5" />
                </div>
                <p className="text-md text-white">Makati</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
