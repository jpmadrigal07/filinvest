"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";

const OurBusinesses = () => {
  return (
    <section className="pt-28">
      <h4 className="text-dark-cornflower-blue mx-6 text-center font-bold md:mx-0">
        OUR BUSINESSES
      </h4>
      <h2 className="text-jet mx-6 mt-2 text-center text-4xl font-extrabold md:mx-0">
        Our Business Units
      </h2>
      <h4 className="text-dim-gray mx-6 mt-4 text-center md:mx-0">
        We build properties for different market segments and needs.
      </h4>
      <div className="hidden md:block">
        <div className="mx-6 mt-16 flex gap-8 lg:mx-9 xl:mx-16 2xl:mx-44">
          <div className="relative flex-1">
            <Image
              src="/residential-business.png"
              width={536}
              height={906}
              alt="Picture of the author"
            />
            <div className="absolute -mt-16 ml-9 flex">
              <h3 className="text-2xl font-bold text-white">Residential</h3>
            </div>
          </div>
          <div className="relative mt-12 flex-1">
            <Image
              src="/offices-business.png"
              width={536}
              height={906}
              alt="Picture of the author"
            />
            <div className="absolute -mt-16 ml-9 flex">
              <h3 className="text-2xl font-bold text-white">Offices</h3>
            </div>
          </div>
          <div className="relative mt-24 flex-1">
            <Image
              src="/malls-business.png"
              width={536}
              height={906}
              alt="Picture of the author"
            />
            <div className="absolute -mt-16 ml-9 flex">
              <h3 className="text-2xl font-bold text-white">Malls</h3>
            </div>
          </div>
        </div>
        <div className="mx-6 flex gap-8 lg:mx-9 xl:mx-16 2xl:mx-44">
          <div className="relative flex-1">
            <Image
              src="/industrial-business.png"
              width={536}
              height={906}
              alt="Picture of the author"
            />
            <div className="absolute -mt-16 ml-9 flex">
              <h3 className="text-2xl font-bold text-white">Industrial</h3>
            </div>
          </div>
          <div className="relative mt-12 flex-1">
            <Image
              src="/coliving-business.png"
              width={536}
              height={906}
              alt="Picture of the author"
            />
            <div className="absolute -mt-16 ml-9 flex">
              <h3 className="text-2xl font-bold text-white">Co-Living</h3>
            </div>
          </div>
          <div className="relative mt-24 flex-1">
            <Image
              src="/mixuse-business.png"
              width={536}
              height={906}
              alt="Picture of the author"
            />
            <div className="absolute -mt-16 ml-9 flex">
              <h3 className="text-2xl font-bold text-white">
                Mixed-Use and Estates
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 block md:hidden">
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
          <SwiperSlide>
            <div className="relative">
              <Image
                src="/residential-business.png"
                width={536}
                height={906}
                alt="Picture of the author"
              />
              <div className="absolute -mt-16 w-full">
                <h3 className="text-center text-2xl font-bold text-white">
                  Residential
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <Image
                src="/offices-business.png"
                width={536}
                height={906}
                alt="Picture of the author"
              />
              <div className="absolute -mt-16 w-full">
                <h3 className="text-center text-2xl font-bold text-white">
                  Offices
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <Image
                src="/malls-business.png"
                width={536}
                height={906}
                alt="Picture of the author"
              />
              <div className="absolute -mt-16 w-full">
                <h3 className="text-center text-2xl font-bold text-white">
                  Malls
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <Image
                src="/industrial-business.png"
                width={536}
                height={906}
                alt="Picture of the author"
              />
              <div className="absolute -mt-16 w-full">
                <h3 className="text-center text-2xl font-bold text-white">
                  Industrial
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <Image
                src="/coliving-business.png"
                width={536}
                height={906}
                alt="Picture of the author"
              />
              <div className="absolute -mt-16 w-full">
                <h3 className="text-center text-2xl font-bold text-white">
                  Co-Living
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <Image
                src="/mixuse-business.png"
                width={536}
                height={906}
                alt="Picture of the author"
              />
              <div className="absolute -mt-16 w-full">
                <h3 className="text-center text-2xl font-bold text-white">
                  Mixed-Use and Estates
                </h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OurBusinesses;
