"use client";
// import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";

const OurStory = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "pusong-filinvest-our-story"
  );
  // console.log(data);
  return (
    <div className="mt-10 md:mt-0 lg:mx-9 xl:mx-16 2xl:mx-44">
      <h3 className="text-dark-cornflower-blue text-center font-bold">
        {data.title}
      </h3>
      <h2 className="mt-4 text-center text-4xl font-bold">{data.subTitle}</h2>
      <p className="text-dim-gray mx-6 mt-2 text-center lg:mx-96">
        {data.description}
      </p>
      <div className="mx-6 mt-12 lg:mx-9 xl:mx-16 2xl:mx-44">
        {/* <Image
          src={data.coverImage.url ? data.coverImage.url : ""}
          width={data.coverImage.width ? data.coverImage.width : 507}
          height={data.coverImage.height ? data.coverImage.height : 407}
          alt={data.coverImage.alt ? data.coverImage.alt : ""}
        /> */}
        <video controls loop muted height={635}>
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
