"use client";
import PropertySearch from "@/components/search/PropertySearch";
import React, { useEffect, useState } from "react";
import TileProjects from "@/components/list/TileProjects";
import { Project } from "shared-types";
import FeaturedArticles from "@/components/list/FeaturedArticles";
import { useSearchParams } from "next/navigation";
import useGetNews from "../../../hooks/useGetNews";

const Content = () => {
  const searchParams = useSearchParams();
  const propertyType = searchParams.get("propertyType");
  const { data } = useGetNews({
    searchParams: propertyType ? propertyType : "",
  });
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
      />
      <div className="mx-9 mt-16 xl:mx-16 2xl:mx-44">
        {!isPropertyLoading ? (
          <>
            <p className="text-xl">
              {projects.length}{" "}
              {projects.length > 1 ? "properties" : "property"} found
            </p>
            <TileProjects projects={projects} />
          </>
        ) : (
          <p className="text-xl">Searching...</p>
        )}
      </div>
      <div className="bg-ghost-white mt-24 flex flex-col items-center py-24">
        <section>
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
