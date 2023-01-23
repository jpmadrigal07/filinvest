"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LocationGroupCategory, PropertyCategory, Site } from "shared-types";
import useGetLocationGroup from "../MainNavigation/hooks/useGetLocationGroup";
import useGetPropertyTypes from "../MainNavigation/hooks/useGetPropertyTypes";
import useGetSites from "../MainNavigation/hooks/useGetSites";

const Residences = () => {
  const { data: locationGroup } = useGetLocationGroup();
  const { data: propertyTypes } = useGetPropertyTypes();
  const { data: brands } = useGetSites();
  return (
    <div className="divide-sonic-silver flex divide-x py-8">
      <div className="flex-none pr-24">
        <h3 className="text-xl text-white">Featured Projects</h3>
        <h2 className="mt-4 text-4xl text-white">Activa Cubao</h2>
        <h4 className="mt-4 text-white opacity-50">
          Mattis molestie a iaculis at erat pellentesque adipiscing
          <br />
          commodo nunc lobortis mattis.
        </h4>
        <div className="mt-9">
          <Image
            src="/activa-residences.png"
            width={427}
            height={240}
            alt="Picture of the author"
          />
        </div>
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
        </div>
        <div className="flex flex-1 flex-col gap-12">
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
                      href={`/property-search?locationGroup=${brand.title}`}
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
      </div>
    </div>
  );
};

export default Residences;
