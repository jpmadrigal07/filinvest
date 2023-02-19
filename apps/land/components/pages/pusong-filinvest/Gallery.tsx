"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const Gallery = ({ content }: any) => {
  return (
    <div className="mt-24">
      <h3 className="text-dark-cornflower-blue text-center font-bold">
        {content.content[2].title}
      </h3>
      <h2 className="mx-6 mt-4 text-center text-4xl font-bold">
        {content.content[2].subTitle}
      </h2>
      <p className="text-dim-gray mt-4 text-center">
        {content.content[2].descriptions}
      </p>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        freeMode={true}
        loop={true}
        pagination={true}
        modules={[Pagination, FreeMode]}
        className="mySwiper mt-12"
      >
        {content.content[2].image.map((item) => (
          <SwiperSlide>
            <Image
              src={`${item.image.url}`}
              width={329}
              height={567}
              alt={item.image.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
