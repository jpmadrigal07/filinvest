"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { OUR_BUSINESSES_SUB_ROUTES } from "@/helpers/routes/ourBusinesses";
// import { PROPERTY_TYPE, LOCATION_OBJ, BRAND_ARR } from "@/helpers/constants";
import ChevronRight from "@/components/svg/ChevronRight";
import useGetLocationGroup from "../MainNavigation/hooks/useGetLocationGroup";
import useGetPropertyTypes from "../MainNavigation/hooks/useGetPropertyTypes";
import useGetSites from "../MainNavigation/hooks/useGetSites";
import { LocationGroupCategory, PropertyCategory, Site } from "shared-types";

type T_OurBusinessesMenu = {
  title: string;
  subTitle?: string;
  link: string;
};
const OurBusinesses = ({
  ourBusinessesMenu,
  property,
}: {
  ourBusinessesMenu?: T_OurBusinessesMenu[];
  property: any;
}) => {
  const { data: locationGroup } = useGetLocationGroup();
  const { data: propertyTypes } = useGetPropertyTypes();
  const { data: brands } = useGetSites();
  return (
    <div className="divide-sonic-silver flex divide-x py-8">
      <div className="h-[40rem] flex-none overflow-auto pr-24">
        {ourBusinessesMenu &&
          ourBusinessesMenu.map(
            (routes: T_OurBusinessesMenu, index: number) => {
              return (
                <div key={index} className={`${index > 0 && "mt-12"}`}>
                  <Link
                    href={routes.link}
                    className="text-white hover:underline"
                  >
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl text-white">{routes.title}</h3>
                      {routes.title === "Residential" && <ChevronRight />}
                    </div>
                    <h4 className="text-white opacity-50">{routes.subTitle}</h4>
                  </Link>
                </div>
              );
            }
          )}
      </div>
      <div className="flex flex-1 gap-6 px-24">
        <div className="flex flex-1 flex-col gap-12">
          <div className="flex gap-24">
            <div className="w-1/3 flex-none">
              <h3 className="text-xl text-white">Browse by</h3>
              <h3 className="text-xl text-white">Property Type</h3>
            </div>
            <div className="flex flex-col gap-6">
              {propertyTypes ? (
                propertyTypes.map((type: PropertyCategory) => {
                  return (
                    <Link
                      className="text-white opacity-50 hover:underline"
                      href={`/property-search?propertyType=${type.title}`}
                    >
                      {type.title}
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
          <div className="flex gap-24">
            <div className="w-1/3 flex-none">
              <h3 className="text-xl text-white">Browse by</h3>
              <h3 className="text-xl text-white">Location</h3>
            </div>
            <div className="flex flex-col gap-6">
              {locationGroup ? (
                locationGroup.map((location: LocationGroupCategory) => {
                  return (
                    <Link
                      className="text-white opacity-50 hover:underline"
                      href={`/property-search?locationGroup=${location.title}`}
                    >
                      {location.title}
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
          <div className="flex gap-24">
            <div className="w-1/3 flex-none">
              <h3 className="text-xl text-white">Browse by</h3>
              <h3 className="text-xl text-white">Brand</h3>
            </div>
            <div className="flex flex-col gap-6">
              {brands ? (
                brands.map((brand: Site) => {
                  return (
                    <Link
                      className="text-white opacity-50 hover:underline"
                      href={`/property-search?brand=${brand.title}`}
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
        <div className="flex-1">
          <h3 className="text-xl text-white">Our Business Units</h3>
          <h2 className="mt-4 text-4xl text-white">Residential</h2>
          <h4 className="mt-4 text-white opacity-50">{property.value.title}</h4>
          <p className="text-dim-gray mt-6">
            {property.value.shortDescription}
          </p>
          <div className="mt-9">
            <Image
              src={`${process.env.CMS_API_URL}${property.value.coverImage.url}`}
              width={350}
              height={property.value.coverImage.height}
              alt="property"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBusinesses;
