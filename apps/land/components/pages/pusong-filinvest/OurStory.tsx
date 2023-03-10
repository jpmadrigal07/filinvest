"use client";
// import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";

const OurStory = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "pusong-filinvest-our-story"
  );

  return (
    <div className="mt-10 md:mt-0 lg:mx-9 xl:mx-16 2xl:mx-44">
      <h3 className="text-dark-cornflower-blue text-center text-lg font-bold lg:text-xl">
        {data?.title}
      </h3>
      <h2 className="mt-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
        {data?.subTitle}
      </h2>
      <p className="text-dim-gray mx-6 mt-3 text-center text-base md:text-xl lg:mx-56">
        {data?.description}
      </p>
      <div className="mx-6 mt-8 md:mt-10 lg:mx-9 lg:mt-12 xl:mx-16 2xl:mx-44">
        <video loop autoPlay muted height={635}>
          <source
            src={data.coverImage.url ? data.coverImage.url : ""}
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default OurStory;
