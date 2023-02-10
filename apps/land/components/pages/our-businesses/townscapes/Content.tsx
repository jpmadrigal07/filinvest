"use client";
import React from "react";
import SelectLocation from "@/components/select/SelectLocation";
import Projects from "@/components/list/Projects";
import { SAMPLE_PROJECTS } from "@/helpers/constants";

const Content = () => {
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
        <div className="mt-16">
          <div className="flex flex-col items-center gap-7 md:flex-row">
            <div className="flex-1">
              <h3 className="text-jet text-2xl">6 townscapes found</h3>
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
