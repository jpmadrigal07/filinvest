"use client";
import PropertySearch from "@/components/search/PropertySearch";
import React, { useEffect, useState } from "react";
import TileProjects from "@/components/list/TileProjects";
import { Project } from "shared-types";
// import Recommendation from "@/components/list/Recommendations";
import useGetNews from "../../../hooks/useGetNews";
import FeaturedArticles from "@/components/list/FeaturedArticles";
import { T_SearchQuery } from "@/types/global";

const Content = () => {
  const [searchParams, setSearchParams] = useState<T_SearchQuery | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isPropertyLoading, setIsPropertyLoading] = useState<boolean>(false);
  const { data } = useGetNews({
    searchParams,
  });
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
        setSearchParams={setSearchParams}
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
      {/* <div className="bg-ghost-white py-24">
        <Recommendation />
      </div> */}
      <div className="bg-ghost-white mt-24 flex flex-col items-center py-24">
        <section className="w-full">
          <div className="mx-6 lg:mx-9 xl:mx-16 2xl:mx-44">
            <h3 className="text-jet flex-none text-4xl font-bold">
              Related Articles
            </h3>
            <FeaturedArticles
              className="mt-16"
              sliderOnMobile
              articles={data ? data : []}
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Content;
