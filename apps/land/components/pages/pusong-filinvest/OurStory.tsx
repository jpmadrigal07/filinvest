"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";

const OurStory = ({ content }: any) => {
  return (
    <div className="lg:mx-9 xl:mx-16 2xl:mx-44">
      <h3 className="text-dark-cornflower-blue text-center font-bold">
        {content.content[0].title}
      </h3>
      <h2 className="mt-4 text-center text-4xl font-bold">
        {content.content[0].subTitle}
      </h2>
      <p className="text-dim-gray mx-6 mt-2 text-center lg:mx-96">
        {content.content[0].description}
      </p>
    </div>
  );
};

export default OurStory;
