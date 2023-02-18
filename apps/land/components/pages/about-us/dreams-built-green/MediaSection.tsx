import React from "react";
import Image from "next/image";

const MediaSection = ({ content }: any) => {
  console.log(content.content[2].backgroundMedia.url);
  return (
    <div
      className={`h-[1080px] w-full bg-[image:${content.content[2].backgroundMedia.url}] bg-opacity-100 bg-cover bg-no-repeat`}
    ></div>
  );
};

export default MediaSection;
