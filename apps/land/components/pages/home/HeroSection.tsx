"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ChevronLeft from "@/components/svg/ChevronLeft";
import ChevronRight from "@/components/svg/ChevronRight";

const HeroSection = ({ homeContent }: any) => {
  const content = homeContent;
  const swiperRef = useRef();
  return (
    <>
      <section className="flex h-screen w-full bg-[url('/hero-bg.png')] bg-cover bg-no-repeat">
        <div className="xs:mt-72 mx-auto mt-40 w-3/4 text-center lg:mt-64 2xl:w-2/4">
          <h1 className="mb-4 text-6xl font-extrabold text-white md:text-8xl">
            {content && content.content
              ? content.content[0].children[0].text
              : "..."}
          </h1>
          <h4 className="text-lg text-white">
            {/* With over 50 years of experience, Filinvest Land, Inc. (FLI) is one
            of the leading full-range
            <br className="hidden md:block" />
            property developers in the Philippines with a diverse project
            portfolio spanning the archipelago. */}
            {content && content.content
              ? content.content[1].children[0].text
              : "..."}
          </h4>
        </div>
      </section>
      <div className="absolute -mt-64 hidden w-full items-center justify-center gap-6 lg:flex 2xl:-mt-80 2xl:gap-12">
        <div className="relative">
          <Image
            src="/prestige-home.png"
            width={434}
            height={500}
            alt="Picture of the author"
          />
          <div className="absolute -mt-24 flex w-full items-center justify-center">
            <Image
              src="/prestige.png"
              width={211}
              height={67}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="relative">
          <Image
            src="/aspire-home.png"
            width={434}
            height={500}
            alt="Picture of the author"
          />
          <div className="absolute -mt-24 flex w-full items-center justify-center">
            <Image
              src="/aspire.png"
              width={190}
              height={68}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="relative">
          <Image
            src="/futura-home.png"
            width={434}
            height={500}
            alt="Picture of the author"
          />
          <div className="absolute -mt-24 flex w-full items-center justify-center">
            <Image
              src="/futura.png"
              width={198}
              height={67}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <div className="absolute -mt-24 flex w-full items-center justify-center gap-12 md:-mt-64 lg:hidden 2xl:-mt-80">
        <div className="absolute z-50">
          <div className="flex gap-64 md:gap-[43rem]">
            {/* @ts-expect-error */}
            <div
              className="rounded-full bg-white px-4 py-3 shadow-2xl"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeft color="#000000" />
            </div>
            {/* @ts-expect-error */}
            <div
              className="rounded-full bg-white px-4 py-3 shadow-2xl"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRight color="#000000" />
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={15}
          centeredSlides={true}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          onBeforeInit={(swiper) => {
            // @ts-expect-error
            swiperRef.current = swiper;
          }}
          modules={[Navigation, FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative">
              <Image
                src="/prestige-home.png"
                width={434}
                height={500}
                alt="Picture of the author"
              />
              <div className="absolute -mt-24 flex w-full items-center justify-center">
                <Image
                  src="/prestige.png"
                  width={211}
                  height={67}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <Image
                src="/aspire-home.png"
                width={434}
                height={500}
                alt="Picture of the author"
              />
              <div className="absolute -mt-24 flex w-full items-center justify-center">
                <Image
                  src="/aspire.png"
                  width={190}
                  height={68}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <Image
                src="/futura-home.png"
                width={434}
                height={500}
                alt="Picture of the author"
              />
              <div className="absolute -mt-24 flex w-full items-center justify-center">
                <Image
                  src="/futura.png"
                  width={198}
                  height={67}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HeroSection;
