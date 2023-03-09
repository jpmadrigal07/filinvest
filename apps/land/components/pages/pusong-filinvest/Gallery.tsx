"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const Gallery = ({ content }: any) => {
  const data = content?.content?.find(
    (item: any) => item?.blockType === "pusong-filinvest-gallery"
  );
  // console.log(data);
  return (
    <div className="my-16 lg:my-24">
      <h3 className="text-dark-cornflower-blue text-center text-lg font-bold lg:text-xl">
        {data?.title}
      </h3>
      <h2 className="mx-6 mt-4 text-center text-3xl font-bold lg:text-5xl">
        {data?.subTitle}
      </h2>
      <p className="text-dim-gray mt-4 text-center text-xl lg:text-2xl">
        {data?.description}
      </p>
      <div>
        {!!data && (
          <Swiper
            slidesPerView="auto"
            breakpoints={
              {
                // when window width is >= 320px
                320: {
                  slidesPerView: 2,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 3,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 4,
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 5,
                },
              } as any
            }
            centeredSlides={true}
            freeMode={true}
            loop={true}
            pagination={{
              clickable: true,
              bulletActiveClass: "!bg-dim-gray swiper-pagination-bullet-active",
            }}
            modules={[Pagination, FreeMode]}
            className="mt-8 h-[650px] min-w-[100%]"
          >
            {data?.image?.map((item: any, index: number) => (
              <SwiperSlide
                className="flex h-[400px] w-[329px] md:h-[569px]"
                key={index}
              >
                <Image
                  src={`${item.image.url ? item.image.url : ""}`}
                  width={329}
                  height={569}
                  alt={item.image.alt ? item.image.alt : ""}
                  className={"h-[569px] w-[329px] object-cover "}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Gallery;
