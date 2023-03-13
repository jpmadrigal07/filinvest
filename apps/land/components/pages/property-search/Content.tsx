"use client";
import PropertySearch from "@/components/search/PropertySearch";
import React, { useEffect, useState } from "react";
import TileProjects from "@/components/list/TileProjects";
import { Project } from "shared-types";

const Content = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isPropertyLoading, setIsPropertyLoading] = useState<boolean>(false);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="-mt-24 flex flex-col gap-9 2xl:-mt-44">
      <PropertySearch
        className="mx-9 lg:mx-0"
        onPropertyResultChange={setProjects}
        showSearch={false}
        onLoading={setIsPropertyLoading}
        //setSearchParams={setSearchParams}
      />
      <div className="mx-9 mt-16 mb-24 xl:mx-16 2xl:mx-44">
        {!isPropertyLoading ? (
          <>
            <div className="text-xl">
              {projects.length}{" "}
              {projects.length > 1 ? "properties" : "property"} found
            </div>
            <TileProjects projects={projects} />
          </>
        ) : (
          <div className="text-xl">Searching...</div>
        )}
      </div>
    </section>
  );
};

export default Content;
