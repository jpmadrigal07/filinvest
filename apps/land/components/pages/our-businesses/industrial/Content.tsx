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
    projectType: "Industrial",
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
            Erat nam at lectus urna duis
          </h2>
          <p className="text-dim-gray mt-8">
            Adipiscing enim eu turpis egestas pretium aenean pharetra.
            Consectetur a erat nam at lectus urna duis. Quam quisque id diam vel
            quam elementum pulvinar etiam non. Enim ut tellus elementum sagittis
            vitae et leo. Lacus sed viverra tellus in hac habitasse platea. In
            ante metus dictum at tempor commodo. Cursus risus at ultrices mi
            tempus.
          </p>
        </div>
        <div className="mt-16 mb-24">
          <div className="flex flex-col items-center gap-7 md:flex-row">
            <div className="flex-1">
              {!isFetching ? (
                <h3 className="text-jet text-2xl">
                  {data ? data.length : projects.length} industrial found
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
