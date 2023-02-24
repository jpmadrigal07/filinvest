"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ChevronRight from "@/components/svg/ChevronRight";
import useGetLocationGroup from "../MainNavigation/hooks/useGetLocationGroup";
import useGetPropertyTypes from "../MainNavigation/hooks/useGetPropertyTypes";
import useGetSites from "../MainNavigation/hooks/useGetSites";
import { LocationGroupCategory, PropertyCategory, Site } from "shared-types";

type T_OurBusinessesMenu = {
  title: string;
  subTitle?: string;
  link: string;
  featured: any;
};
const OurBusinesses = ({
  ourBusinessesMenu,
}: {
  ourBusinessesMenu?: T_OurBusinessesMenu[];
}) => {
  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedFeatured, setSelectedFeatured] = useState<any>(null);
  const { data: locationGroup } = useGetLocationGroup();
  const { data: propertyTypes } = useGetPropertyTypes();
  const { data: brands } = useGetSites();
  useEffect(() => {
    if (
      selectedMenu === "" &&
      ourBusinessesMenu &&
      ourBusinessesMenu?.length > 0
    ) {
      setSelectedMenu(ourBusinessesMenu[0].title);
    }
    if (ourBusinessesMenu && ourBusinessesMenu?.length > 0) {
      const menu = ourBusinessesMenu.find(
        (menu) => menu.title === selectedMenu
      );
      setSelectedFeatured(menu?.featured);
    }
  }, [ourBusinessesMenu, selectedMenu]);

  return (
    <div className="divide-sonic-silver flex divide-x py-8">
      <div className="max-h-[700px] flex-none overflow-hidden pr-24 hover:overflow-auto">
        {ourBusinessesMenu &&
          ourBusinessesMenu.map(
            (routes: T_OurBusinessesMenu, index: number) => {
              return (
                <div key={index} className={`${index > 0 && "mt-9"}`}>
                  <Link
                    href={routes.link}
                    className={`cursor-pointer text-white transition delay-150 ${
                      routes.title === "Residentials" &&
                      selectedMenu === "Residentials"
                        ? "opacity-70"
                        : "hover:opacity-70"
                    }`}
                    onMouseEnter={() => setSelectedMenu(routes.title)}
                  >
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl text-white">{routes.title}</h3>
                      {selectedMenu === routes.title &&
                      routes.title === "Residentials" ? (
                        <ChevronRight />
                      ) : null}
                    </div>
                    <h4 className="text-white opacity-50">{routes.subTitle}</h4>
                  </Link>
                </div>
              );
            }
          )}
      </div>
      <div className="flex flex-1 gap-6 px-24">
        {selectedMenu === "Residentials" ? (
          <>
            <div className="flex flex-1 flex-col gap-12 overflow-hidden hover:overflow-auto">
              <div className="flex gap-24">
                <div className="w-1/3 flex-none">
                  <h3 className="text-xl text-white">Browse by</h3>
                  <h3 className="text-xl text-white">Property Type</h3>
                </div>
                <div className="flex flex-col gap-4">
                  {propertyTypes ? (
                    propertyTypes.map(
                      (type: PropertyCategory, index: number) => {
                        return (
                          <Link
                            key={index}
                            className="text-white opacity-50 transition delay-150 hover:opacity-100"
                            href={`/property-search?projectType=${selectedMenu}&propertyType=${type.title}`}
                          >
                            {type.title}
                          </Link>
                        );
                      }
                    )
                  ) : (
                    <p className="text-white opacity-50 hover:underline">
                      Loading...
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-24">
                <div className="w-1/3 flex-none">
                  <h3 className="text-xl text-white">Browse by</h3>
                  <h3 className="text-xl text-white">Location</h3>
                </div>
                <div className="flex flex-col gap-4">
                  {locationGroup ? (
                    locationGroup.map(
                      (location: LocationGroupCategory, index: number) => {
                        return (
                          <Link
                            key={index}
                            className="text-white opacity-50 transition delay-150 hover:opacity-100"
                            href={`/property-search?projectType=${selectedMenu}&locationGroup=${location.title}`}
                          >
                            {location.title}
                          </Link>
                        );
                      }
                    )
                  ) : (
                    <p className="text-white opacity-50 hover:underline">
                      Loading...
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-24">
                <div className="w-1/3 flex-none">
                  <h3 className="text-xl text-white">Browse by</h3>
                  <h3 className="text-xl text-white">Brand</h3>
                </div>
                <div className="flex flex-col gap-4">
                  {brands ? (
                    brands.map((brand: Site, index: number) => {
                      return (
                        <Link
                          key={index}
                          className="text-white opacity-50 transition delay-150 hover:opacity-100"
                          href={`/property-search?projectType=${selectedMenu}&brand=${brand.title}`}
                        >
                          {brand.title}
                        </Link>
                      );
                    })
                  ) : (
                    <p className="text-white opacity-50 hover:underline">
                      Loading...
                    </p>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : null}
        <div className="flex-1">
          <h3 className="text-xl text-white">Our Business Units</h3>
          <Link
            href={`/projects/${selectedFeatured?.value.slug}`}
            className="cursor-pointer transition delay-150 hover:opacity-70"
          >
            <h2 className="mt-4 text-4xl text-white">{selectedMenu}</h2>
            <h4 className="mt-4 text-white opacity-70">
              {selectedFeatured?.value.title}
            </h4>
            <p className="mt-6 text-white opacity-50">
              {selectedFeatured?.value.shortDescription
                ? selectedFeatured?.value.shortDescription
                : ""}
              {selectedFeatured?.value.description
                ? selectedFeatured?.value.description
                : ""}
            </p>
            <div className="mt-9">
              <Image
                src={`${!selectedFeatured?.value.coverImage.url ? "/" : ""}${
                  selectedFeatured?.value.coverImage.url
                }`}
                width={350}
                height={
                  selectedFeatured?.value.coverImage.height
                    ? selectedFeatured?.value.coverImage.height
                    : 350
                }
                alt="property"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurBusinesses;
