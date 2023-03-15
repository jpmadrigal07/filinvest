"use client";
import React, { useState } from "react";
import SelectLocation from "@/components/select/SelectLocation";
import Projects from "@/components/list/Projects";
import { LocationCategory, Project } from "shared-types";
import useGetProjectsByLocation from "@/components/list/hooks/useGetProjectsByLocation";
import SelectStatus from "@/components/select/SelectStatus";

const ProjectsContent = ({
  projects,
  locations,
  projectStatus,
}: {
  projects: Project[];
  locations: LocationCategory[];
  projectStatus: any;
}) => {
  const [currentLocation, setCurrentLocation] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const { data, isFetching } = useGetProjectsByLocation({
    location: currentLocation,
    projectType: "Offices",
    status: currentStatus,
  });
  const locationString =
    locations.length > 0
      ? locations.map((location) => {
          return location.title;
        })
      : [];
  const statusString =
    projectStatus.length > 0
      ? projectStatus.map((status: any) => {
          return status.title;
        })
      : [];
  return (
    <>
      <div>
        <div className="mt-16 mb-24">
          <div className="flex flex-col items-center gap-7 md:flex-row">
            <div className="flex-1">
              {!isFetching ? (
                <h3 className="text-jet text-2xl">
                  {data
                    ? data.length
                    : projects.length > 1
                    ? `${projects.length} offices`
                    : `${projects.length} office`}{" "}
                  found
                </h3>
              ) : (
                <h3 className="text-jet text-2xl">Loading...</h3>
              )}
            </div>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
              <h3 className="text-jet text-xl">Filter by</h3>
              <SelectStatus
                status={statusString}
                setCurrentStatus={setCurrentStatus}
                currentStatus={currentStatus}
              />
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
    </>
  );
};

export default ProjectsContent;
