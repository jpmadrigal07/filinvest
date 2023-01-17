"use client";
import PageNextPrevButton from "@/components/button/PageNextPrevButton";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Diamond from "@/components/svg/Diamond";
import FeaturedArticles from "@/components/list/FeaturedArticles";
import { SAMPLE_NEWS } from "@/helpers/constants";

const Content = () => {
  return (
    <section className="-mt-6 2xl:-mt-36">
      <div className="mx-6 flex flex-col gap-2 md:flex-row lg:mx-9 lg:gap-8 xl:mx-16 2xl:mx-44">
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
          <div>
            <div className="mt-1 flex items-center gap-3">
              <div className="mt-1 flex-none">
                <Diamond />
              </div>
              <p className="text-jet flex-1 text-lg">
                To enliven and enrich lives in Filinvest communities
              </p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="mt-1 flex-none">
                <Diamond />
              </div>
              <p className="text-jet flex-1 text-lg">
                To enable and encourage the growth of our partners
              </p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="mt-1 flex-none">
                <Diamond />
              </div>
              <p className="text-jet flex-1 text-lg">
                To create and add value for our investors
              </p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="mt-1 flex-none">
                <Diamond />
              </div>
              <p className="text-jet flex-1 text-lg">
                To build platforms that create vibrant and sustainable
                ecosystems
              </p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="mt-1 flex-none">
                <Diamond />
              </div>
              <p className="text-jet flex-1 text-lg">
                To respect and protect the environment
              </p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="mt-1 flex-none">
                <Diamond />
              </div>
              <p className="text-jet flex-1 text-lg">
                To keep affordable housing at our core
              </p>
            </div>
          </div>
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
        <FeaturedArticles
          className="mx-9 mt-16 md:mx-24"
          sliderOnMobile
          articles={SAMPLE_NEWS}
        />
      </div>
    </section>
  );
};

export default Content;
