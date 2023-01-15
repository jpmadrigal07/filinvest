"use client";
import Image from "next/image";
import React, { useRef } from "react";
import BorderButton from "../../button/BorderButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ChevronLeft from "@/components/svg/ChevronLeft";
import ChevronRight from "@/components/svg/ChevronRight";

const Projects = () => {
  const swiperRef = useRef();
  const swiperRefMobile = useRef();
  return (
    <section
      className={`short:pt-[28rem] pt-60 md:pt-72 lg:pt-[22rem] 2xl:pt-72`}
    >
      <h4 className="text-dark-cornflower-blue mx-6 text-center font-bold md:mx-0">
        PROJECTS
      </h4>
      <h2 className="text-jet pt- mx-6 mt-2 text-center text-4xl font-extrabold md:mx-0">
        Our Flagship Projects
      </h2>
      <h4 className="text-dim-gray mx-6 mt-4 text-center md:mx-0">
        Filinvest Land properties are some of the most sought after in the
        Philippines.
      </h4>
      <div className="relative hidden md:block">
        <div className="absolute right-6 bottom-6 z-40">
          <div className="flex gap-7">
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
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          onBeforeInit={(swiper) => {
            // @ts-expect-error
            swiperRef.current = swiper;
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative mt-28">
              <div className="absolute flex w-1/2 flex-col items-center gap-6 bg-white px-12 pt-4 pb-12 lg:w-1/4 lg:gap-12">
                <div className="hidden lg:block">
                  <Image
                    src="/activa-logo.png"
                    width={228}
                    height={50}
                    alt="Picture of the author"
                  />
                </div>
                <div className="block lg:hidden">
                  <Image
                    src="/activa-logo.png"
                    width={114}
                    height={25}
                    alt="Picture of the author"
                  />
                </div>
                <div>
                  <h2 className="text-jet mb-2 text-center text-xl font-bold lg:text-3xl">
                    Activa Cubao
                  </h2>
                  <h4 className="text-dim-gray lg:text-normal text-center text-xs font-bold">
                    Neque sodales ut etiam sit amet nisl. Quis lectus nulla at
                    volutpat diam. Euismod nisi porta.
                  </h4>
                </div>
                <div className="mt-2 lg:mt-0">
                  <button type="button">
                    <BorderButton
                      buttonText="Learn More"
                      textColor="dark-cornflower-blue"
                      borderColor="dark-cornflower-blue"
                    />
                  </button>
                </div>
              </div>
              <Image
                src="/projects-activa.png"
                width={2840}
                height={560}
                alt="Picture of the author"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex items-center justify-center md:hidden">
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
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          onBeforeInit={(swiper) => {
            // @ts-expect-error
            swiperRefMobile.current = swiper;
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative mt-28">
              <Image
                src="/projects-activa.png"
                width={2840}
                height={560}
                alt="Picture of the author"
              />
              <div className="relative mx-8 -mt-20 mb-12 flex flex-col items-center gap-6 bg-white px-12 pt-4 pb-12 shadow-xl">
                <div className="hidden lg:block">
                  <Image
                    src="/activa-logo.png"
                    width={228}
                    height={50}
                    alt="Picture of the author"
                  />
                </div>
                <div className="block lg:hidden">
                  <Image
                    src="/activa-logo.png"
                    width={114}
                    height={25}
                    alt="Picture of the author"
                  />
                </div>
                <div>
                  <h2 className="text-jet mb-2 text-center text-xl font-bold lg:text-3xl">
                    Activa Cubao
                  </h2>
                  <h4 className="text-dim-gray lg:text-normal text-center text-xs font-bold">
                    Neque sodales ut etiam sit amet nisl. Quis lectus nulla at
                    volutpat diam. Euismod nisi porta.
                  </h4>
                </div>
                <div className="mt-2 lg:mt-0">
                  <button type="button">
                    <BorderButton
                      buttonText="Learn More"
                      textColor="dark-cornflower-blue"
                      borderColor="dark-cornflower-blue"
                    />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
