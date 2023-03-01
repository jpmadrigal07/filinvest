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
    projectType: "Townscapes",
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
            Our Master-Planned Township
          </h2>
          <p className="text-dim-gray mt-8">
            Filinvest creates sprawling township developments that feature a
            complete live-work-play environment where residents can live life to
            the fullest. Drawing from the rich culture and natural beauty of
            their locations, these township feature residential communities,
            commercial areas and civic places within a short distance from each
            other to make a family’s life more convenient.
          </p>
        </div>
        <div className="mt-16 mb-24">
          <div className="flex flex-col items-center gap-7 md:flex-row">
            <div className="flex-1">
              {!isFetching ? (
                <h3 className="text-jet text-2xl">
                  {data ? data.length : projects.length} townscapes found
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
