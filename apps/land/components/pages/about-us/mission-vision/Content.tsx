"use client";
import BorderButton from "@/components/button/BorderButton";
import PageNextPrevButton from "@/components/button/PageNextPrevButton";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Content = () => {
  return (
    <section className="-mt-6 2xl:-mt-36">
      <div className="mx-6 flex flex-col gap-2 md:flex-row lg:mx-9 lg:gap-16 xl:mx-16 2xl:mx-44">
        <div className="flex flex-1 flex-col items-center gap-6 bg-white py-16 px-6 shadow-xl lg:w-1/4 lg:flex-none lg:px-12">
          <Image
            src="/vision-icon.png"
            width={79}
            height={79}
            alt="Picture of the author"
          />
          <h3 className="text-jet text-4xl font-bold">Vision</h3>
          <p className="text-jet text-center text-lg">
            To be the most trusted placemaker of environs that inspire and
            enhance a happy life.
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center gap-6 bg-white py-16 pl-10 pr-6 shadow-xl lg:pl-12">
          <Image
            src="/mission-icon.png"
            width={79}
            height={79}
            alt="Picture of the author"
          />
          <h3 className="text-jet text-4xl font-bold">Mission</h3>
          <ul className="text-jet text-lg">
            <li>To enliven and enrich lives in Filinvest communities</li>
            <li>To enable and encourage the growth of our partners</li>
            <li>To create and add value for our investors</li>
            <li>
              To build platforms that create vibrant and sustainable ecosystems
            </li>
            <li>To respect and protect the environment</li>
            <li>To keep affordable housing at our core</li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col items-center gap-6 bg-white py-16 px-6 shadow-xl lg:w-1/4 lg:flex-none lg:px-12">
          <Image
            src="/value-icon.png"
            width={79}
            height={79}
            alt="Picture of the author"
          />
          <h3 className="text-jet text-center text-4xl font-bold">
            Core Values
          </h3>
          <p className="text-jet text-center text-lg">
            The core values of integrity, customer service, professionalism,
            teamwork, innovation and cost-effectiveness are highly valued. The
            highest standards of business and moral ethics shall be exercised.
          </p>
        </div>
      </div>
      <div className="my-24 mx-6 flex justify-end lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="flex-none">
          <PageNextPrevButton
            imgName="investor-relations-program-next-prev.png"
            pageName="Our Leadership"
            isLeft={false}
          />
        </div>
      </div>
      <div className="bg-ghost-white py-24">
        <h3 className="text-center text-4xl font-bold">Latest News</h3>
        <div className="mx-6 mt-16 hidden gap-6 md:flex lg:mx-9 xl:mx-16 2xl:mx-44">
          <div className="flex-1">
            <Image
              src="/award-news.png"
              width={1036}
              height={806}
              alt="Picture of the author"
            />
            <h2 className="text-jet mt-6 text-2xl font-bold">
              Tempus urna et pharetra pharetra massa massa
            </h2>
            <h4 className="text-dim-gray mt-4">
              Posted by Admin on April 22, 2022
            </h4>
            <h4 className="text-dim-gray mt-4">
              Mattis molestie a iaculis at erat pellentesque adipiscing commodo
              nunc lobortis mattis.
            </h4>
            <div className="mt-12">
              <BorderButton
                buttonText="Read More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/award-2-news.png"
              width={1036}
              height={806}
              alt="Picture of the author"
            />
            <h2 className="text-jet mt-6 text-2xl font-bold">
              Tempus urna et pharetra pharetra massa massa
            </h2>
            <h4 className="text-dim-gray mt-4">
              Posted by Admin on April 22, 2022
            </h4>
            <h4 className="text-dim-gray mt-4">
              Mattis molestie a iaculis at erat pellentesque adipiscing commodo
              nunc lobortis mattis.
            </h4>
            <div className="mt-12">
              <BorderButton
                buttonText="Read More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/award-3-news.png"
              width={1036}
              height={806}
              alt="Picture of the author"
            />
            <h2 className="text-jet mt-6 text-2xl font-bold">
              Tempus urna et pharetra pharetra massa massa
            </h2>
            <h4 className="text-dim-gray mt-4">
              Posted by Admin on April 22, 2022
            </h4>
            <h4 className="text-dim-gray mt-4">
              Mattis molestie a iaculis at erat pellentesque adipiscing commodo
              nunc lobortis mattis.
            </h4>
            <div className="mt-12">
              <BorderButton
                buttonText="Read More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 block md:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            centeredSlides={true}
            freeMode={true}
            loop={false}
            navigation={true}
            modules={[Navigation, FreeMode]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="mx-6">
                <Image
                  src="/award-news.png"
                  width={1036}
                  height={806}
                  alt="Picture of the author"
                />
                <h2 className="text-jet mt-6 text-2xl font-bold">
                  Tempus urna et pharetra pharetra massa massa
                </h2>
                <h4 className="text-dim-gray mt-4">
                  Posted by Admin on April 22, 2022
                </h4>
                <h4 className="text-dim-gray mt-4">
                  Mattis molestie a iaculis at erat pellentesque adipiscing
                  commodo nunc lobortis mattis.
                </h4>
                <div className="mt-12 mb-16">
                  <BorderButton
                    buttonText="Read More"
                    textColor="dark-cornflower-blue"
                    borderColor="dark-cornflower-blue"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-6">
                <Image
                  src="/award-2-news.png"
                  width={1036}
                  height={806}
                  alt="Picture of the author"
                />
                <h2 className="text-jet mt-6 text-2xl font-bold">
                  Tempus urna et pharetra pharetra massa massa
                </h2>
                <h4 className="text-dim-gray mt-4">
                  Posted by Admin on April 22, 2022
                </h4>
                <h4 className="text-dim-gray mt-4">
                  Mattis molestie a iaculis at erat pellentesque adipiscing
                  commodo nunc lobortis mattis.
                </h4>
                <div className="mt-12 mb-16">
                  <BorderButton
                    buttonText="Read More"
                    textColor="dark-cornflower-blue"
                    borderColor="dark-cornflower-blue"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-6">
                <Image
                  src="/award-3-news.png"
                  width={1036}
                  height={806}
                  alt="Picture of the author"
                />
                <h2 className="text-jet mt-6 text-2xl font-bold">
                  Tempus urna et pharetra pharetra massa massa
                </h2>
                <h4 className="text-dim-gray mt-4">
                  Posted by Admin on April 22, 2022
                </h4>
                <h4 className="text-dim-gray mt-4">
                  Mattis molestie a iaculis at erat pellentesque adipiscing
                  commodo nunc lobortis mattis.
                </h4>
                <div className="mt-12 mb-16">
                  <BorderButton
                    buttonText="Read More"
                    textColor="dark-cornflower-blue"
                    borderColor="dark-cornflower-blue"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Content;
