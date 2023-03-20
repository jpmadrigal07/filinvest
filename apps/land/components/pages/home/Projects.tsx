"use client";
import FullPropertySlider from "@/components/Slider/FullPropertySlider";
import React from "react";
import useAnimation from "../../../hooks/useAnimation";
const Projects = ({ content }: any) => {
  const { container } = useAnimation("#anim-text");
  return (
    <section
      ref={container}
      className={`short:pt-[28rem] pt-52 md:pt-72 lg:pt-[22rem] 2xl:pt-72`}
    >
      <h4
        id="anim-text"
        className="text-dark-cornflower-blue mx-6 text-center font-black tracking-widest md:mx-0"
      >
        {content.content[1].title}
      </h4>
      <h2
        id="anim-text"
        className="text-jet pt- mx-6 mt-2 text-center text-2xl font-black tracking-tighter md:mx-0 md:text-4xl"
      >
        {content.content[1].subTitle}
      </h2>
      <h4
        id="anim-text"
        className="text-dim-gray mx-6 mt-4 -mb-16 text-center md:mx-0 md:mb-0"
      >
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
