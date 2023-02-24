"use client";
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
    projectType: "Malls",
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
          <h2 className="text-jet text-center text-4xl font-bold">
            Bringing life to the city
          </h2>
          <p className="text-dim-gray mt-8">
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
        <div className="mt-16 mb-24">
          <div className="flex flex-col items-center gap-7 md:flex-row">
            <div className="flex-1">
              {!isFetching ? (
                <h3 className="text-jet text-2xl">
                  {data ? data.length : projects.length} malls found
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
