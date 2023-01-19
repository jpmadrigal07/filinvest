"use client";
import SelectLocation from "@/components/select/SelectLocation";
import React from "react";
import Projects from "@/components/list/Projects";
import { SAMPLE_PROJECTS } from "@/helpers/constants";

const Content = () => {
  return (
    <section className="mt-12 mb-32 gap-9 lg:mx-9 xl:mx-16 2xl:mx-44 2xl:mt-16">
      <div>
        <div className="flex items-center gap-7">
          <div className="flex-1">
            <h3 className="text-jet text-2xl">6 Corporate Centers found</h3>
          </div>
          <div className="flex flex-none items-center gap-9">
            <h3 className="text-jet text-xl">Filter by</h3>
            <SelectLocation />
          </div>
        </div>
        <Projects projects={SAMPLE_PROJECTS} />
      </div>
    </section>
  );
};

export default Content;
