import ChevronDown from "@/components/svg/ChevronDown";
import Diamond from "@/components/svg/Diamond";
import MapPin from "@/components/svg/MapPin";
import Image from "next/image";
import React from "react";
import RangeSlider from "../home/RangeSlider";

const Content = () => {
  return (
    <section className="-mt-24 flex flex-col gap-9 2xl:-mt-32">
      <div className="bg-dark-cornflower-blue mx-16 flex items-center gap-8 px-10 py-6 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="w-full flex-1">
          <h3 className="text-white">Property Type</h3>
          <div className="border-silver-chalice flex items-center gap-3 border-b-[1px] py-2 hover:cursor-pointer">
            <input
              type="text"
              placeholder="Condominium"
              className="ring-none w-full border-none bg-transparent text-white hover:cursor-pointer"
            />
            <ChevronDown />
          </div>
        </div>
        <div className="w-full flex-1">
          <h3 className="text-white">Location</h3>
          <div className="border-silver-chalice flex items-center gap-3 border-b-[1px] py-2 hover:cursor-pointer">
            <input
              type="text"
              placeholder="Cebu"
              className="ring-none w-full border-none bg-transparent text-white hover:cursor-pointer"
            />
            <ChevronDown />
          </div>
        </div>
        <div className="w-full flex-1">
          <h3 className="text-white">Unit Size</h3>
          <div className="border-silver-chalice flex items-center gap-3 border-b-[1px] py-2 hover:cursor-pointer">
            <input
              type="text"
              placeholder="Any"
              className="ring-none w-full border-none bg-transparent text-white hover:cursor-pointer"
            />
            <ChevronDown />
          </div>
        </div>
        <div className="w-full flex-1">
          <h3 className="mb-1 text-white">Price Range</h3>
          <RangeSlider />
          <h4 className="mt-1 text-sm text-white">
            Php 1,000,000 - Php 50,000,000
          </h4>
        </div>
      </div>
      <div className="mt-16 lg:mx-9 xl:mx-16 2xl:mx-44">
        <p>4 properties found</p>
        <div className="mt-7 grid grid-cols-3 gap-8">
          <div className="bg-white shadow-xl">
            <div>
              <Image
                src="/quest-cenia.png"
                width={1042}
                height={748}
                alt="Picture of the author"
              />
            </div>
            <div className="divide-gainsboro divide-y p-6">
              <div className="pb-4">
                <h2 className="text-jet text-2xl font-bold">
                  Grand Cenia Residences
                </h2>
                <p className="text-jet">
                  Excepteur sint occaecat cupidatat non proident
                </p>
              </div>
              <div className="flex gap-2 pt-4 2xl:gap-6">
                <div className="flex items-center justify-center gap-3">
                  <p className="text-vivid-sky-blue text-2xl font-bold">P</p>
                  <p className="font-bold">7.5 M - 16 M</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin color="#1AC5E8" />
                  <p className="font-bold">Cebu</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Diamond color="#1AC5E8" />
                  <p className="font-bold">730 - 2500 sqm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl">
            <div>
              <Image
                src="/quest-cenia.png"
                width={1042}
                height={748}
                alt="Picture of the author"
              />
            </div>
            <div className="divide-gainsboro divide-y p-6">
              <div className="pb-4">
                <h2 className="text-jet text-2xl font-bold">
                  Grand Cenia Residences
                </h2>
                <p className="text-jet">
                  Excepteur sint occaecat cupidatat non proident
                </p>
              </div>
              <div className="flex gap-2 pt-4 2xl:gap-6">
                <div className="flex items-center justify-center gap-3">
                  <p className="text-vivid-sky-blue text-2xl font-bold">P</p>
                  <p className="font-bold">7.5 M - 16 M</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin color="#1AC5E8" />
                  <p className="font-bold">Cebu</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Diamond color="#1AC5E8" />
                  <p className="font-bold">730 - 2500 sqm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl">
            <div>
              <Image
                src="/quest-cenia.png"
                width={1042}
                height={748}
                alt="Picture of the author"
              />
            </div>
            <div className="divide-gainsboro divide-y p-6">
              <div className="pb-4">
                <h2 className="text-jet text-2xl font-bold">
                  Grand Cenia Residences
                </h2>
                <p className="text-jet">
                  Excepteur sint occaecat cupidatat non proident
                </p>
              </div>
              <div className="flex gap-2 pt-4 2xl:gap-6">
                <div className="flex items-center justify-center gap-3">
                  <p className="text-vivid-sky-blue text-2xl font-bold">P</p>
                  <p className="font-bold">7.5 M - 16 M</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin color="#1AC5E8" />
                  <p className="font-bold">Cebu</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Diamond color="#1AC5E8" />
                  <p className="font-bold">730 - 2500 sqm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl">
            <div>
              <Image
                src="/quest-cenia.png"
                width={1042}
                height={748}
                alt="Picture of the author"
              />
            </div>
            <div className="divide-gainsboro divide-y p-6">
              <div className="pb-4">
                <h2 className="text-jet text-2xl font-bold">
                  Grand Cenia Residences
                </h2>
                <p className="text-jet">
                  Excepteur sint occaecat cupidatat non proident
                </p>
              </div>
              <div className="flex gap-2 pt-4 2xl:gap-6">
                <div className="flex items-center justify-center gap-3">
                  <p className="text-vivid-sky-blue text-2xl font-bold">P</p>
                  <p className="font-bold">7.5 M - 16 M</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin color="#1AC5E8" />
                  <p className="font-bold">Cebu</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Diamond color="#1AC5E8" />
                  <p className="font-bold">730 - 2500 sqm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-ghost-white mt-24 flex flex-col items-center py-24">
        <div className="w-1/3">
          <h2 className="text-jet text-center text-4xl font-bold">
            Recommendation
          </h2>
          <div className="mt-8 flex justify-center">
            <Image
              src="/futura-red.png"
              width={206}
              height={104}
              alt="Picture of the author"
            />
          </div>
          <p className="text-dim-gray mt-4 text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 lg:mx-9 xl:mx-16 2xl:mx-44">
          <div className="bg-white shadow-xl">
            <div>
              <Image
                src="/quest-cenia.png"
                width={1042}
                height={748}
                alt="Picture of the author"
              />
            </div>
            <div className="divide-gainsboro divide-y p-6">
              <div className="pb-4">
                <h2 className="text-jet text-2xl font-bold">
                  Grand Cenia Residences
                </h2>
                <p className="text-jet">
                  Excepteur sint occaecat cupidatat non proident
                </p>
              </div>
              <div className="flex gap-2 pt-4 2xl:gap-6">
                <div className="flex items-center justify-center gap-3">
                  <p className="text-permanent-geranium-lake text-2xl font-bold">
                    P
                  </p>
                  <p className="font-bold">7.5 M - 16 M</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin color="#E02826" />
                  <p className="font-bold">Cebu</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Diamond color="#E02826" />
                  <p className="font-bold">730 - 2500 sqm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl">
            <div>
              <Image
                src="/quest-cenia.png"
                width={1042}
                height={748}
                alt="Picture of the author"
              />
            </div>
            <div className="divide-gainsboro divide-y p-6">
              <div className="pb-4">
                <h2 className="text-jet text-2xl font-bold">
                  Grand Cenia Residences
                </h2>
                <p className="text-jet">
                  Excepteur sint occaecat cupidatat non proident
                </p>
              </div>
              <div className="flex gap-2 pt-4 2xl:gap-6">
                <div className="flex items-center justify-center gap-3">
                  <p className="text-permanent-geranium-lake text-2xl font-bold">
                    P
                  </p>
                  <p className="font-bold">7.5 M - 16 M</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin color="#E02826" />
                  <p className="font-bold">Cebu</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Diamond color="#E02826" />
                  <p className="font-bold">730 - 2500 sqm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl">
            <div>
              <Image
                src="/quest-cenia.png"
                width={1042}
                height={748}
                alt="Picture of the author"
              />
            </div>
            <div className="divide-gainsboro divide-y p-6">
              <div className="pb-4">
                <h2 className="text-jet text-2xl font-bold">
                  Grand Cenia Residences
                </h2>
                <p className="text-jet">
                  Excepteur sint occaecat cupidatat non proident
                </p>
              </div>
              <div className="flex gap-2 pt-4 2xl:gap-6">
                <div className="flex items-center justify-center gap-3">
                  <p className="text-permanent-geranium-lake text-2xl font-bold">
                    P
                  </p>
                  <p className="font-bold">7.5 M - 16 M</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin color="#E02826" />
                  <p className="font-bold">Cebu</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Diamond color="#E02826" />
                  <p className="font-bold">730 - 2500 sqm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
