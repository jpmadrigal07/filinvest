"use client";
import React from "react";
import SelectLocation from "@/components/select/SelectLocation";
import Projects from "@/components/list/Projects";
import { SAMPLE_PROJECTS } from "@/helpers/constants";

const Content = () => {
  return (
    <section className="mx-9 mt-16 xl:mx-16 2xl:mx-44">
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
        <div className="mt-16">
          <div className="flex flex-col items-center gap-7 md:flex-row">
            <div className="flex-1">
              <h3 className="text-jet text-2xl">6 co-living found</h3>
            </div>
            <div className="flex flex-none items-center gap-9">
              <h3 className="text-jet text-xl">Filter by</h3>
              <SelectLocation />
            </div>
          </div>
          <Projects projects={SAMPLE_PROJECTS} />
        </div>
      </div>
    </section>
  );
};

export default Content;
