import React from "react";

const MediaSection = ({ content }: any) => {
  return (
    <div className="m-0 h-[740px] w-full md:mx-auto lg:-mt-36 lg:w-[85%]">
      <iframe
        className="pointer-events-none bottom-0 right-0 block h-full w-full object-cover"
        src={`https://www.youtube.com/embed/lQ6Yrf_5EOw?autoplay=1&mute=1&cc_load_policy=1&controls=0&loop=1&showinfo=0&modestbranding=1`}
        allow="autoplay; modestbranding"
      ></iframe>
    </div>
  );
};

export default MediaSection;
