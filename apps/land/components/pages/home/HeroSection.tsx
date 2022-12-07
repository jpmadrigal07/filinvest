"use client";
import Image from "next/image";
import React from "react";
import MainLogo from "@/components/svg/MainLogo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
  return (
    <>
      <section className="flex h-screen w-full bg-[url('/hero-bg.png')] bg-cover bg-no-repeat">
        <div className="xs:mt-72 mx-auto mt-40 w-3/4 text-center lg:mt-64 2xl:w-2/4">
          <h1 className="mb-4 text-6xl font-extrabold text-white md:text-8xl">
            Dreams Built Green
          </h1>
          <h4 className="text-lg text-white">
            With over 50 years of experience, Filinvest Land, Inc. (FLI) is one
            of the leading full-range
            <br className="hidden md:block" />
            property developers in the Philippines with a diverse project
            portfolio spanning the archipelago.
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
        <Swiper
          slidesPerView={2}
          spaceBetween={15}
          centeredSlides={true}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, FreeMode]}
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
