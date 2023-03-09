"use client";
import FullPropertySlider from "@/components/Slider/FullPropertySlider";
import React from "react";

const Projects = ({ content }: any) => {
  return (
    <section
      className={`short:pt-[28rem] pt-52 md:pt-72 lg:pt-[22rem] 2xl:pt-72`}
    >
      <h4 className="text-dark-cornflower-blue mx-6 text-center font-black tracking-widest md:mx-0">
        {content.content[1].title}
      </h4>
      <h2 className="text-jet pt- mx-6 mt-2 text-center text-4xl font-black tracking-tighter md:mx-0">
        {content.content[1].subTitle}
      </h2>
      <h4 className="text-dim-gray mx-6 mt-4 -mb-16 text-center text-lg md:mx-0 md:mb-0">
        {content.content[1].description}
      </h4>
      <FullPropertySlider
        sliders={content.content[1].imageSlides}
        isDefault={false}
        with360={true}
      />
    </section>
  );
};

export default Projects;
