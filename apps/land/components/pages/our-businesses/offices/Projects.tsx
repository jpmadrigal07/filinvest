"use client";
import React, { useState } from "react";
import SelectLocation from "@/components/select/SelectLocation";
import Projects from "@/components/list/Projects";
import { LocationCategory, Project } from "shared-types";
import useGetProjectsByLocation from "@/components/list/hooks/useGetProjectsByLocation";

const ProjectsContent = ({
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
    <section className="mx-9 mt-16 mb-32 xl:mx-16 2xl:mx-44">
      <div>
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

export default ProjectsContent;
