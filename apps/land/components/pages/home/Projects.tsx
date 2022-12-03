"use client";
import Image from "next/image";
import React from "react";
import BorderButton from "../../button/BorderButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <section className="pt-60 md:pt-72 lg:pt-[22rem] 2xl:pt-72">
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
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
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
    </section>
  );
};

export default Projects;
