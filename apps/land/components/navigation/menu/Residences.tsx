"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LocationGroupCategory, PropertyCategory, Site } from "shared-types";
import useGetLocationGroup from "../MainNavigation/hooks/useGetLocationGroup";
import useGetPropertyTypes from "../MainNavigation/hooks/useGetPropertyTypes";
import useGetSites from "../MainNavigation/hooks/useGetSites";

const Residences = ({ property }: { property: any }) => {
  const { data: locationGroup } = useGetLocationGroup();
  const { data: propertyTypes } = useGetPropertyTypes();
  const { data: brands } = useGetSites();
  return (
    <div className="divide-sonic-silver flex divide-x py-8">
      <div className="w-96 flex-none pr-24">
        <h3 className="text-xl text-white">Featured Projects</h3>
        <Link
          href={`/projects/${property?.value.slug}`}
          className="cursor-pointer transition delay-150 hover:opacity-70"
        >
          <h2 className="mt-4 text-4xl text-white">{property.value.title}</h2>
          <h4 className="mt-4 text-white opacity-50">
            {property.value.shortDescription}
          </h4>
          <div className="mt-9">
            <Image
              src={`${!property.value.coverImage.url ? "/" : ""}${
                property.value.coverImage.url
              }`}
              width={350}
              height={
                property.value.coverImage.height
                  ? property.value.coverImage.height
                  : 350
              }
              alt="property"
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-1 gap-6 px-24">
        <div className="flex flex-1 flex-col gap-12">
          <div className="flex gap-24">
            <div className="w-1/3 flex-none">
              <h3 className="text-xl text-white">Browse by</h3>
              <h3 className="text-xl text-white">Property Type</h3>
            </div>
            <div className="flex flex-col gap-4">
              {propertyTypes ? (
                propertyTypes.map((type: PropertyCategory, index: number) => {
                  return (
                    <Link
                      key={index}
                      className="text-white opacity-50 transition delay-150 hover:opacity-100"
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
            <div className="flex flex-col gap-4">
              {locationGroup ? (
                locationGroup.map(
                  (location: LocationGroupCategory, index: number) => {
                    return (
                      <Link
                        key={index}
                        className="text-white opacity-50 transition delay-150 hover:opacity-100"
                        href={`/property-search?locationGroup=${location.title}`}
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
        </div>
        <div className="flex flex-1 flex-col gap-12">
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
      </div>
    </div>
  );
};

export default Residences;
