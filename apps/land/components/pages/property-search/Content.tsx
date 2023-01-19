import PropertySearch from "@/components/search/PropertySearch";
import Flag from "@/components/svg/Flag";
import Peso from "@/components/svg/Peso";
import SizeBox from "@/components/svg/SizeBox";
import Image from "next/image";
import React from "react";
import { T_SearchQuery } from "@/types/global";
import flattenLocations from "@/helpers/flattenLocations";
import { getRequest } from "@/helpers/getRequest";
import { PropertyCategory } from "shared-types";

type PageProps = {
  searchParams: T_SearchQuery;
};

const Content = async ({ searchParams }: PageProps) => {
  const propertyTypesRes: PropertyCategory[] = await getRequest(
    "/api/property-categories"
  );
  const locationsRes = await getRequest("/api/location-categories?limit=20");
  const propertyTypes = propertyTypesRes.map(
    (propertyType) => propertyType.title
  );
  const locations = flattenLocations(locationsRes);
  return (
    <section className="-mt-24 flex flex-col gap-9 2xl:-mt-44">
      <PropertySearch
        className="mx-9 lg:mx-0"
        searchQuery={searchParams}
        locations={locations}
        propertyTypes={propertyTypes}
      />
      <div className="mx-9 mt-16 xl:mx-16 2xl:mx-44">
        <p>4 properties found</p>
        <div className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  <Peso color="#23A0CF" classes="h-5 w-5" />
                  <p className="font-bold">7.5 M - 16 M</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Flag color="#23A0CF" classes="h-5 w-5" />
                  <p className="font-bold">Cebu</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <SizeBox color="#23A0CF" classes="h-6 w-6" />
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
                  <Peso color="#23A0CF" classes="h-5 w-5" />
                  <p className="font-bold">7.5 M - 16 M</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Flag color="#23A0CF" classes="h-5 w-5" />
                  <p className="font-bold">Cebu</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <SizeBox color="#23A0CF" classes="h-6 w-6" />
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
                  <Peso color="#23A0CF" classes="h-5 w-5" />
                  <p className="font-bold">7.5 M - 16 M</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Flag color="#23A0CF" classes="h-5 w-5" />
                  <p className="font-bold">Cebu</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <SizeBox color="#23A0CF" classes="h-6 w-6" />
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
                  <Peso color="#23A0CF" classes="h-5 w-5" />
                  <p className="font-bold">7.5 M - 16 M</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Flag color="#23A0CF" classes="h-5 w-5" />
                  <p className="font-bold">Cebu</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <SizeBox color="#23A0CF" classes="h-6 w-6" />
                  <p className="font-bold">730 - 2500 sqm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-ghost-white mt-24 flex flex-col items-center py-24">
        <div className="mx-6 md:mx-9 lg:mx-0 lg:w-1/3">
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
        <div className="mx-9 mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:mx-16 2xl:mx-44">
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
                  <Peso color="#E02826" classes="h-5 w-5" />
                  <p className="font-bold">7.5 M - 16 M</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Flag color="#E02826" classes="h-5 w-5" />
                  <p className="font-bold">Cebu</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <SizeBox color="#E02826" classes="h-6 w-6" />
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
                  <Peso color="#E02826" classes="h-5 w-5" />
                  <p className="font-bold">7.5 M - 16 M</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Flag color="#E02826" classes="h-5 w-5" />
                  <p className="font-bold">Cebu</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <SizeBox color="#E02826" classes="h-6 w-6" />
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
                  <Peso color="#E02826" classes="h-5 w-5" />
                  <p className="font-bold">7.5 M - 16 M</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Flag color="#E02826" classes="h-5 w-5" />
                  <p className="font-bold">Cebu</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <SizeBox color="#E02826" classes="h-6 w-6" />
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
