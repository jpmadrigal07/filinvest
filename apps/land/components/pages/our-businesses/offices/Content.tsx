"use client";
import Image from "next/image";
import React, { useState } from "react";
import SelectLocation from "@/components/select/SelectLocation";
import Projects from "@/components/list/Projects";
import { LocationCategory, Project } from "shared-types";
import useGetProjectsByLocation from "@/components/list/hooks/useGetProjectsByLocation";

const Content = ({
  projects,
  locations,
}: {
  projects: Project[];
  locations: LocationCategory[];
}) => {
  const [currentLocation, setCurrentLocation] = useState("");
  const { data, isFetching } = useGetProjectsByLocation({
    location: currentLocation,
    projectType: "Offices",
  });
  const locationString =
    locations.length > 0
      ? locations.map((location) => {
          return location.title;
        })
      : [];
  return (
    <section className="mx-9 mb-32 mt-16 xl:mx-16 2xl:mx-44">
      <div>
        <div>
          <h2 className="text-jet text-center text-4xl font-bold">Offices</h2>
          <p className="text-dim-gray mt-4">
            Filinvest connects corporate clients to the right business
            environment with state-of-the-art office buildings and BPO hubs —
            from PEZA-accredited developments such as PBCom Tower and Northgate
            Cyberzone as preferred locations for outsourcing firms and major
            corporations, to smaller modern office spaces and SOHO units that
            are proving to be the ideal addresses for budding entrepreneurs and
            start-up companies.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-9 md:flex-row">
          <div className="flex-1">
            <div>
              <Image
                src="/northgate-office.png"
                width={1574}
                height={882}
                alt="Picture of the author"
              />
            </div>
            <h3 className="text-jet mt-6 text-2xl font-bold">Office Parks</h3>
            <p className="text-dim-gray mt-3">{`Filinvest’s sprawling IT and Technology parks are the proud addresses of many of the country's top BPO, KPO, e-Commerce, and manufacturing companies. These massive developments inspire innovation and unparalleled productivity in an all-in-one environment.`}</p>
          </div>
          <div className="flex-1">
            <div>
              <Image
                src="/100-west-office.png"
                width={1574}
                height={882}
                alt="Picture of the author"
              />
            </div>
            <h3 className="text-jet mt-6 text-2xl font-bold">
              Corporate Centers
            </h3>
            <p className="text-dim-gray mt-3">
              Filinvest’s office buildings are built to keep pace with the needs
              of today’s businesses. Offering a host of amenities for day-to-day
              comfort and convenience, they provide prime real estate solutions
              for progressive enterprises.
            </p>
          </div>
        </div>
        <div className="mt-16 mb-24">
          <div className="flex flex-col items-center gap-7 md:flex-row">
            <div className="flex-1">
              {!isFetching ? (
                <h3 className="text-jet text-2xl">
                  {data ? data.length : projects.length} offices found
                </h3>
              ) : (
                <h3 className="text-jet text-2xl">Loading...</h3>
              )}
            </div>
            <div className="flex flex-none items-center gap-9">
              <h3 className="text-jet text-xl">Filter by</h3>
              <SelectLocation
                locations={locationString}
                setCurrentLocation={setCurrentLocation}
                currentLocation={currentLocation}
              />
            </div>
          </div>
          <Projects projects={data ? data : projects} isLoading={isFetching} />
        </div>
      </div>
    </section>
  );
};

export default Content;
