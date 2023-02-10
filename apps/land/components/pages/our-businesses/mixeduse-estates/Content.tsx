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
            Dynamic Live-Work-Play Address
          </h2>
          <p className="text-dim-gray mt-8">
            Filinvest mixed-use developments feature a complete live-work-play
            environment in one dynamic location that makes up for an ideal
            address that affords you to make waves in your career and enjoy
            life’s simple joys, close to your home.
          </p>
        </div>
        <div className="mt-16">
          <div className="flex flex-col items-center gap-7 md:flex-row">
            <div className="flex-1">
              <h3 className="text-jet text-2xl">6 mixed-use estates found</h3>
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
