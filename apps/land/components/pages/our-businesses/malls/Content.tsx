"use client";
import React from "react";
import Image from "next/image";
import Flag from "@/components/svg/Flag";
import SelectLocation from "@/components/select/SelectLocation";

const Content = () => {
  return (
    <section className="mx-9 mt-24 mb-32 xl:mx-16 2xl:mx-44">
      <div>
        <h2 className="text-jet text-center text-4xl font-bold">
          Bringing life to the city
        </h2>
        <p className="text-dim-gray mt-4">
          Filinvest creates a wealth of shopping, dining and entertainment
          options with retail hubs such as Festival Supermall and Westgate
          Center, as well as pocket commercial areas near its residential
          projects. The company continues to aggressively expand its retail
          portfolio with new developments such as the Il Corso lifestyle strip
          within City di Mare in Cebu, Main Square in Rizal, Fora in Tagaytay
          with a number of malls and other commercial developments bringing
          retail choices to Filipinos soon.
        </p>
      </div>
      <div className="mt-16">
        <div className="flex flex-col items-center gap-7 md:flex-row">
          <div className="flex-1">
            <h3 className="text-jet text-2xl">6 malls found</h3>
          </div>
          <div className="flex flex-none items-center gap-9">
            <h3 className="text-jet text-xl">Filter by</h3>
            <SelectLocation />
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
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
