"use client";
import Image from "next/image";
import React from "react";
import ChevronRight from "@/components/svg/ChevronRight";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";

const OurServices = ({ content }: any) => {
  return (
    <section className="pt-28">
      <div className="w-full px-6 lg:mx-auto lg:w-1/3">
        <h4 className="text-dark-cornflower-blue text-center font-bold">
          {content.content[4].title}
        </h4>
        <h2 className="text-jet mt-2 text-center text-4xl font-extrabold">
          {content.content[4].subTitle}
        </h2>
        <h4 className="text-dim-gray mt-4 text-center">
          {content.content[4].description}
        </h4>
      </div>
      <div className="mx-6 mt-12 hidden gap-4 md:flex lg:mx-9 xl:mx-16 2xl:mx-44">
        {content
          ? content.content[4].serviceTypes.map((serviceType: any) => {
              return (
                <div className="flex-1">
                  <div className="relative flex items-center justify-center">
                    <button
                      type="button"
                      className="bg-blue-ryb hover:bg-dark-cornflower-blue focus:bg-dark-cornflower-blue delay-50 absolute rounded-full px-7 py-6 text-white transition"
                    >
                      <ChevronRight />
                    </button>
                    <Image
                      src={`${!serviceType.image.url ? "/" : ""}${
                        serviceType.image.url
                      }`}
                      width={356}
                      height={364}
                      alt={serviceType.image.alt}
                    />
                  </div>
                  <h3 className="text-jet mt-6 text-center text-2xl font-bold">
                    {serviceType.title}
                  </h3>
                </div>
              );
            })
          : null}
      </div>
      <div className="mt-14 block md:hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          centeredSlides={true}
          freeMode={true}
          loop={true}
          navigation={true}
          modules={[Navigation, FreeMode]}
          className="mySwiper"
        >
          {content
            ? content.content[4].serviceTypes.map((serviceType: any) => {
                return (
                  <SwiperSlide>
                    <div>
                      <div className="relative flex items-center justify-center">
                        <Image
                          src={`${!serviceType.image.url ? "/" : ""}${
                            serviceType.image.url
                          }`}
                          width={456}
                          height={464}
                          alt={serviceType.image.alt}
                        />
                      </div>
                      <h3 className="text-jet mt-6 text-center text-2xl font-bold">
                        {serviceType.title}
                      </h3>
                    </div>
                  </SwiperSlide>
                );
              })
            : null}
        </Swiper>
      </div>
    </section>
  );
};

export default OurServices;
