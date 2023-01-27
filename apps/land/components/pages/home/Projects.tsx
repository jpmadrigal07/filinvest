"use client";
import FullPropertySlider from "@/components/Slider/FullPropertySlider";
import React from "react";

const Projects = () => {
  return (
    <section
      className={`short:pt-[28rem] pt-60 md:pt-72 lg:pt-[22rem] 2xl:pt-72`}
    >
      <h4 className="text-dark-cornflower-blue mx-6 text-center font-bold md:mx-0">
        PROJECTS
      </h4>
      <h2 className="text-jet pt- mx-6 mt-2 text-center text-4xl font-extrabold md:mx-0">
        Our Featured Projects
      </h2>
      <h4 className="text-dim-gray mx-6 mt-4 text-center md:mx-0">
        Filinvest Land properties are some of the most sought after in the
        Philippines.
      </h4>
      <FullPropertySlider />
    </section>
  );
};

export default Projects;
