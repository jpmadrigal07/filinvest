"use client";
import PropertySearch from "@/components/search/PropertySearch";
import React, { useEffect, useState } from "react";
import TileProjects from "@/components/list/TileProjects";
import { Project } from "shared-types";
import Link from "next/link";
import BorderButton from "@/components/button/BorderButton";
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
            <p>
              {projects.length}{" "}
              {projects.length > 1 ? "properties" : "property"} found
            </p>
            <TileProjects projects={projects} />
          </>
        ) : (
          <p>Searching...</p>
        )}
      </div>
      <div className="bg-ghost-white mt-24 flex flex-col items-center py-24">
        <section>
          <div className="mx-6 lg:mx-9 xl:mx-16 2xl:mx-44">
            <div className="flex flex-col justify-center md:flex-row md:items-center">
              <div className="flex-1">
                <h2 className="text-jet mt-2 text-4xl font-extrabold">
                  Featured Articles
                </h2>
                <h4 className="text-dim-gray mt-4">
                  Get updated to Filinvest Land{"'"}s latest happenings.
                </h4>
              </div>
              <div className="mt-12 flex-none">
                <Link href="/">
                  <button type="button">
                    <BorderButton
                      buttonText="See More"
                      textColor="dark-cornflower-blue"
                      borderColor="dark-cornflower-blue"
                    />
                  </button>
                </Link>
              </div>
            </div>
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
