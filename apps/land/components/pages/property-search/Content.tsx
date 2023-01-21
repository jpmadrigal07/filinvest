"use client";
import PropertySearch from "@/components/search/PropertySearch";
import Flag from "@/components/svg/Flag";
import Peso from "@/components/svg/Peso";
import SizeBox from "@/components/svg/SizeBox";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TileProjects from "@/components/list/TileProjects";
import { T_Locations } from "@/types/global";
import { Project } from "shared-types";

const Content = ({
  locations,
  propertyTypes,
}: {
  locations: T_Locations;
  propertyTypes: string[];
}) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isPropertyLoading, setIsPropertyLoading] = useState<boolean>(false);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <section className="-mt-24 flex flex-col gap-9 2xl:-mt-44">
      <PropertySearch
        className="mx-9 lg:mx-0"
        locations={locations}
        propertyTypes={propertyTypes}
        onPropertyResultChange={setProjects}
        showSearch={false}
        onLoading={setIsPropertyLoading}
      />
      <div className="mx-9 mt-16 xl:mx-16 2xl:mx-44">
        {!isPropertyLoading ? (
          <>
            <p>
              {projects.length}{" "}
              {projects.length > 1 ? "properties" : "property"} found
            </p>
            <TileProjects projects={projects} />
          </>
        ) : (
          <p>Searching...</p>
        )}
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
            <div className="relative">
              <Image
                src="/quest-cenia.png"
                width={1042}
                height={748}
                alt="Picture of the author"
              />
              <Image
                src={`/futura-property.png`}
                width={222}
                height={222}
                alt={`Futura Tag`}
                className="absolute -right-12 -bottom-28"
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
            <div className="relative">
              <Image
                src="/quest-cenia.png"
                width={1042}
                height={748}
                alt="Picture of the author"
              />
              <Image
                src={`/futura-property.png`}
                width={222}
                height={222}
                alt={`Futura Tag`}
                className="absolute -right-12 -bottom-28"
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
            <div className="relative">
              <Image
                src="/quest-cenia.png"
                width={1042}
                height={748}
                alt="Picture of the author"
              />
              <Image
                src={`/futura-property.png`}
                width={222}
                height={222}
                alt={`Futura Tag`}
                className="absolute -right-12 -bottom-28"
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
