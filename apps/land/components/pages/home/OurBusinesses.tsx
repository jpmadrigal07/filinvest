"use client";
import Image from "next/image";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";
import ChevronLeft from "@/components/svg/ChevronLeft";
import ChevronRight from "@/components/svg/ChevronRight";
import Link from "next/link";

const OurBusinesses = ({ content }: any) => {
  const swiperRefMobile = useRef();
  return (
    <section className="pt-28">
      <h4 className="text-dark-cornflower-blue mx-6 text-center font-black tracking-widest md:mx-0">
        {content.content[3].title}
      </h4>
      <h2 className="text-jet mx-6 mt-2 text-center text-4xl font-black tracking-tighter md:mx-0">
        {content.content[3].subTitle}
      </h2>
      <h4 className="text-dim-gray mx-6 mt-4 text-center text-2xl md:mx-0">
        {content.content[3].description}
      </h4>
      <div className="hidden md:block">
        <div className="mx-6 mt-16 flex gap-8 lg:mx-9 xl:mx-16 2xl:mx-44">
          <Link
            href={content.content[3].propertyTypes[0].link}
            className="relative flex-1 transition duration-150"
          >
            <div className="overflow-hidden">
              <Image
                src={`${
                  !content.content[3].propertyTypes[0].image.url ? "/" : ""
                }${content.content[3].propertyTypes[0].image.url}`}
                width={536}
                height={906}
                alt={content.content[3].propertyTypes[0].image.alt}
                className={`relative scale-105 transition duration-500 hover:translate-x-2`}
              />
            </div>
            <div className="absolute -mt-16 ml-9 flex">
              <h3 className="text-2xl font-bold text-white">
                {content.content[3].propertyTypes[0].title}
              </h3>
            </div>
          </Link>
          <Link
            href={content.content[3].propertyTypes[1].link}
            className="relative mt-12 flex-1 transition duration-150"
          >
            <div className="overflow-hidden">
              <Image
                src={`${
                  !content.content[3].propertyTypes[1].image.url ? "/" : ""
                }${content.content[3].propertyTypes[1].image.url}`}
                width={536}
                height={906}
                alt={content.content[3].propertyTypes[1].image.alt}
                className={`relative scale-105 transition duration-500 hover:translate-x-2`}
              />
            </div>
            <div className="absolute -mt-16 ml-9 flex">
              <h3 className="text-2xl font-bold text-white">
                {content.content[3].propertyTypes[1].title}
              </h3>
            </div>
          </Link>
          <Link
            href={content.content[3].propertyTypes[2].link}
            className="relative mt-24 flex-1 transition duration-150"
          >
            <div className="overflow-hidden">
              <Image
                src={`${
                  !content.content[3].propertyTypes[2].image.url ? "/" : ""
                }${content.content[3].propertyTypes[2].image.url}`}
                width={536}
                height={906}
                alt={content.content[3].propertyTypes[2].image.alt}
                className={`relative scale-105 transition duration-500 hover:translate-x-2`}
              />
            </div>
            <div className="absolute -mt-16 ml-9 flex">
              <h3 className="text-2xl font-bold text-white">
                {content.content[3].propertyTypes[2].title}
              </h3>
            </div>
          </Link>
        </div>
        <div className="mx-6 flex gap-8 lg:mx-9 xl:mx-16 2xl:mx-44">
          <Link
            href={content.content[3].propertyTypes[3].link}
            className="relative flex-1 transition duration-150"
          >
            <div className="overflow-hidden">
              <Image
                src={`${
                  !content.content[3].propertyTypes[3].image.url ? "/" : ""
                }${content.content[3].propertyTypes[3].image.url}`}
                width={536}
                height={906}
                alt={content.content[3].propertyTypes[3].image.alt}
                className={`relative scale-105 transition duration-500 hover:translate-x-2`}
              />
            </div>
            <div className="absolute -mt-16 ml-9 flex">
              <h3 className="text-2xl font-bold text-white">
                {content.content[3].propertyTypes[3].title}
              </h3>
            </div>
          </Link>
          <Link
            href={content.content[3].propertyTypes[4].link}
            className="relative mt-12 flex-1 transition duration-150"
          >
            <div className="overflow-hidden">
              <Image
                src={`${
                  !content.content[3].propertyTypes[4].image.url ? "/" : ""
                }${content.content[3].propertyTypes[4].image.url}`}
                width={536}
                height={906}
                alt={content.content[3].propertyTypes[4].image.alt}
                className={`relative scale-105 transition duration-500 hover:translate-x-2`}
              />
            </div>
            <div className="absolute -mt-16 ml-9 flex">
              <h3 className="text-2xl font-bold text-white">
                {content.content[3].propertyTypes[4].title}
              </h3>
            </div>
          </Link>
          <Link
            href={content.content[3].propertyTypes[5].link}
            className="relative mt-24 flex-1 transition duration-150"
          >
            <div className="overflow-hidden">
              <Image
                src={`${
                  !content.content[3].propertyTypes[5].image.url ? "/" : ""
                }${content.content[3].propertyTypes[5].image.url}`}
                width={536}
                height={906}
                alt={content.content[3].propertyTypes[5].image.alt}
                className={`relative scale-105 transition duration-500 hover:translate-x-2`}
              />
            </div>
            <div className="absolute -mt-16 ml-9 flex">
              <h3 className="text-2xl font-bold text-white">
                {content.content[3].propertyTypes[5].title}
              </h3>
            </div>
          </Link>
        </div>
      </div>
      <div className="relative mt-12 flex items-center justify-center md:hidden">
        <div className="absolute z-40">
          <div className="flex gap-64 md:gap-[43rem]">
            <div
              className="rounded-full bg-white px-4 py-3 shadow-md"
              // @ts-expect-error
              onClick={() => swiperRefMobile.current?.slidePrev()}
            >
              <ChevronLeft color="#000000" />
            </div>
            <div
              className="rounded-full bg-white px-4 py-3 shadow-md"
              // @ts-expect-error
              onClick={() => swiperRefMobile.current?.slideNext()}
            >
              <ChevronRight color="#000000" />
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          centeredSlides={true}
          freeMode={true}
          loop={true}
          onBeforeInit={(swiper) => {
            // @ts-expect-error
            swiperRefMobile.current = swiper;
          }}
          modules={[Navigation, FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link
              href={content.content[3].propertyTypes[0].link}
              className="relative"
            >
              <Image
                src={`${
                  !content.content[3].propertyTypes[0].image.url ? "/" : ""
                }${content.content[3].propertyTypes[0].image.url}`}
                width={536}
                height={906}
                alt={content.content[3].propertyTypes[0].image.alt}
              />
              <div className="absolute -mt-16 w-full">
                <h3 className="text-center text-2xl font-bold text-white">
                  {content.content[3].propertyTypes[0].title}
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={content.content[3].propertyTypes[1].link}
              className="relative"
            >
              <Image
                src={`${
                  !content.content[3].propertyTypes[1].image.url ? "/" : ""
                }${content.content[3].propertyTypes[1].image.url}`}
                width={536}
                height={906}
                alt={content.content[3].propertyTypes[1].image.alt}
              />
              <div className="absolute -mt-16 w-full">
                <h3 className="text-center text-2xl font-bold text-white">
                  {content.content[3].propertyTypes[1].title}
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={content.content[3].propertyTypes[2].link}
              className="relative"
            >
              <Image
                src={`${
                  !content.content[3].propertyTypes[2].image.url ? "/" : ""
                }${content.content[3].propertyTypes[2].image.url}`}
                width={536}
                height={906}
                alt={content.content[3].propertyTypes[2].image.alt}
              />
              <div className="absolute -mt-16 w-full">
                <h3 className="text-center text-2xl font-bold text-white">
                  {content.content[3].propertyTypes[2].title}
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={content.content[3].propertyTypes[3].link}
              className="relative"
            >
              <Image
                src={`${
                  !content.content[3].propertyTypes[3].image.url ? "/" : ""
                }${content.content[3].propertyTypes[3].image.url}`}
                width={536}
                height={906}
                alt={content.content[3].propertyTypes[3].image.alt}
              />
              <div className="absolute -mt-16 w-full">
                <h3 className="text-center text-2xl font-bold text-white">
                  {content.content[3].propertyTypes[3].title}
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={content.content[3].propertyTypes[4].link}
              className="relative"
            >
              <Image
                src={`${
                  !content.content[3].propertyTypes[4].image.url ? "/" : ""
                }${content.content[3].propertyTypes[4].image.url}`}
                width={536}
                height={906}
                alt={content.content[3].propertyTypes[4].image.alt}
              />
              <div className="absolute -mt-16 w-full">
                <h3 className="text-center text-2xl font-bold text-white">
                  {content.content[3].propertyTypes[4].title}
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={content.content[3].propertyTypes[5].link}
              className="relative"
            >
              <Image
                src={`${
                  !content.content[3].propertyTypes[5].image.url ? "/" : ""
                }${content.content[3].propertyTypes[5].image.url}`}
                width={536}
                height={906}
                alt={content.content[3].propertyTypes[5].image.alt}
              />
              <div className="absolute -mt-16 w-full">
                <h3 className="text-center text-2xl font-bold text-white">
                  {content.content[3].propertyTypes[5].title}
                </h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OurBusinesses;
