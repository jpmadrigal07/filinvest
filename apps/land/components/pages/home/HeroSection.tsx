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

const HeroSection = ({ content }: any) => {
  const swiperRef = useRef();
  const background = () => {
    if (content.content[0].backgroundType === "image") {
      return (
        <Image
          src={`${!content.content[0].mediaBackground.url ? "/" : ""}${
            content.content[0].mediaBackground.url
          }`}
          fill
          alt={content.content[0].prestigeImage.alt}
        />
      );
    } else if (content.content[0].backgroundType === "video") {
      return (
        <video
          autoPlay
          muted
          loop
          className="absolute right-0 bottom-0 h-full w-full object-cover"
        >
          <source
            src={content.content[0]?.videoBackground.url}
            type={content.content[0]?.videoBackground.mimeType}
          />
        </video>
      );
    } else if (content.content[0].backgroundType === "youtube") {
      const urlYt = content.content[0]?.youtubeBackground;
      const formattedUrlYt = urlYt?.includes("https://www.youtube.com/watch?v=")
        ? urlYt.replace("https://www.youtube.com/watch?v=", "")
        : "";
      return (
        <iframe
          className="pointer-events-none absolute right-0 bottom-0 h-full w-full object-cover"
          src={`https://www.youtube.com/embed/${formattedUrlYt}?autoplay=1&mute=1&cc_load_policy=1&controls=0&loop=1&showinfo=0&modestbranding=1`}
          allow="autoplay; modestbranding"
        ></iframe>
      );
    }
  };
  return (
    <>
      <section className={`flex h-screen w-full`}>
        <div className="xs:mt-72 z-40 mx-auto mt-40 w-3/4 text-center lg:mt-64 2xl:w-2/4">
          <h1 className="mb-4 text-5xl font-extrabold text-white md:text-7xl lg:text-4xl xl:text-6xl 2xl:text-8xl">
            {content.content[0].title}
          </h1>
          <h4 className="text-base text-white md:text-lg">
            {content.content[0].description}
          </h4>
        </div>
        {background()}
      </section>
      <div
        className={`2xl:-pt-80 short:pt-32 absolute -mt-64 hidden w-full items-center justify-center gap-6 lg:flex 2xl:gap-12`}
      >
        <div className="relative">
          <Image
            src={`${!content.content[0].prestigeImage.url ? "/" : ""}${
              content.content[0].prestigeImage.url
            }`}
            width={434}
            height={500}
            alt={content.content[0].prestigeImage.alt}
          />
          <div className="absolute -mt-24 flex w-full items-center justify-center">
            <Image
              src={`${!content.content[0].prestigeLogo.url ? "/" : ""}${
                content.content[0].prestigeLogo.url
              }`}
              width={190}
              height={68}
              alt={content.content[0].prestigeLogo.alt}
            />
          </div>
        </div>
        <div className="relative">
          <Image
            src={`${!content.content[0].aspireImage.url ? "/" : ""}${
              content.content[0].aspireImage.url
            }`}
            width={434}
            height={500}
            alt={content.content[0].aspireImage.alt}
          />
          <div className="absolute -mt-24 flex w-full items-center justify-center">
            <Image
              src={`${!content.content[0].aspireLogo.url ? "/" : ""}${
                content.content[0].aspireLogo.url
              }`}
              width={190}
              height={68}
              alt={content.content[0].aspireLogo.alt}
            />
          </div>
        </div>
        <div className="relative">
          <Image
            src={`${!content.content[0].futuraImage.url ? "/" : ""}${
              content.content[0].futuraImage.url
            }`}
            width={434}
            height={500}
            alt={content.content[0].futuraImage.alt}
          />
          <div className="absolute -mt-24 flex w-full items-center justify-center">
            <Image
              src={`${!content.content[0].futuraLogo.url ? "/" : ""}${
                content.content[0].futuraLogo.url
              }`}
              width={198}
              height={67}
              alt={content.content[0].futuraLogo.alt}
            />
          </div>
        </div>
      </div>
      <div className="absolute -mt-24 flex w-full items-center justify-center gap-12 md:-mt-64 lg:hidden 2xl:-mt-80">
        <div className="absolute z-40">
          <div className="flex gap-64 md:gap-[43rem]">
            <div
              className="rounded-full bg-white px-4 py-3 shadow-md"
              // @ts-expect-error
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeft color="#000000" />
            </div>
            <div
              className="rounded-full bg-white px-4 py-3 shadow-md"
              // @ts-expect-error
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
                src={`${!content.content[0].prestigeImage.url ? "/" : ""}${
                  content.content[0].prestigeImage.url
                }`}
                width={434}
                height={500}
                alt={content.content[0].prestigeImage.alt}
              />
              <div className="absolute -mt-24 flex w-full items-center justify-center">
                <Image
                  src={`${!content.content[0].prestigeLogo.url ? "/" : ""}${
                    content.content[0].prestigeLogo.url
                  }`}
                  width={190}
                  height={68}
                  alt={content.content[0].prestigeLogo.alt}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <Image
                src={`${!content.content[0].aspireImage.url ? "/" : ""}${
                  content.content[0].aspireImage.url
                }`}
                width={434}
                height={500}
                alt={content.content[0].aspireImage.alt}
              />
              <div className="absolute -mt-24 flex w-full items-center justify-center">
                <Image
                  src={`${!content.content[0].aspireLogo.url ? "/" : ""}${
                    content.content[0].aspireLogo.url
                  }`}
                  width={190}
                  height={68}
                  alt={content.content[0].aspireLogo.alt}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <Image
                src={`${!content.content[0].futuraImage.url ? "/" : ""}${
                  content.content[0].futuraImage.url
                }`}
                width={434}
                height={500}
                alt={content.content[0].futuraImage.alt}
              />
              <div className="absolute -mt-24 flex w-full items-center justify-center">
                <Image
                  src={`${!content.content[0].futuraLogo.url ? "/" : ""}${
                    content.content[0].futuraLogo.url
                  }`}
                  width={198}
                  height={67}
                  alt={content.content[0].futuraLogo.alt}
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
