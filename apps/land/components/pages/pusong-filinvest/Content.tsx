"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import NEWS_ROUTES from "@/helpers/routes/news";
import Link from "next/link";
import BorderButton from "@/components/button/BorderButton";
import FeaturedArticles from "@/components/list/FeaturedArticles";

const Content = ({ news }: any) => {
  return (
    <section className="mt-12">
      <div className="lg:mx-9 xl:mx-16 2xl:mx-44">
        <h3 className="text-dark-cornflower-blue text-center font-bold">
          OUR STORY
        </h3>
        <h2 className="mt-4 text-center text-4xl font-bold">
          Keeping Our Promise
        </h2>
        <p className="text-dim-gray mx-6 mt-2 text-center lg:mx-96">{`FLI's #PusongFilinvest projects for 2018 were highlighted by many community engagement programs that amplified employee camaraderie and the desire to give back to the areas in which the firm works.`}</p>
      </div>
      <div className="mx-6 mt-12 lg:mx-9 xl:mx-16 2xl:mx-44">
        <Image
          src="/brentville-video.png"
          width={3284}
          height={1270}
          alt="Picture of the author"
        />
      </div>
      <div className="bg-ghost-white mt-24 py-16">
        <div className="mx-6 flex flex-col items-center justify-center gap-12 md:flex-row lg:mx-9 xl:mx-16 2xl:mx-44">
          <div className="flex-1">
            <Image
              src="/environmental-preservation-2.png"
              width={1682}
              height={1288}
              alt="Picture of the author"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-dark-cornflower-blue font-bold">
              CORPORATE SOCIAL RESPONSIBILITY
            </h3>
            <h2 className="mt-4 text-4xl font-bold">
              Environmental Preservation
            </h2>
            <p className="text-dim-gray mt-2">{`The Philippines suffers from environmental degradation caused by the mismanagement and abuse of our coastal waters and forests. In response to this, several Filinvest subsidiaries joined the International Coastal Clean-up program where employees did their part by picking up trash along the shore`}</p>
            <p className="text-dim-gray mt-6">{`Another activity that helps protect Mother Nature is the annual Keep it Green. In 2018, green warriors from the ranks of the FLI employees planted tree seedlings along the slopes of the Havila and Timberland Heights townscapes...`}</p>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <h3 className="text-dark-cornflower-blue text-center font-bold">
          GALLERY
        </h3>
        <h2 className="mx-6 mt-4 text-center text-4xl font-bold">
          We Care And Love With Passion
        </h2>
        <p className="text-dim-gray mt-4 text-center">
          We Care and Build for the Future
        </p>
        <Swiper
          slidesPerView={5}
          centeredSlides={true}
          freeMode={true}
          loop={true}
          pagination={true}
          modules={[Pagination, FreeMode]}
          className="mySwiper mt-12"
        >
          <SwiperSlide>
            <Image
              src="/gallery-1.png"
              width={329}
              height={567}
              alt="Picture of the author"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/gallery-2.png"
              width={329}
              height={567}
              alt="Picture of the author"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/gallery-3.png"
              width={329}
              height={567}
              alt="Picture of the author"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/gallery-4.png"
              width={329}
              height={567}
              alt="Picture of the author"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/gallery-5.png"
              width={329}
              height={567}
              alt="Picture of the author"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mx-6 mb-24 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="flex flex-col justify-center md:flex-row md:items-center">
          <div className="flex-1">
            <h2 className="text-jet mt-2 text-4xl font-extrabold">
              Press Releases
            </h2>
            <h4 className="text-dim-gray mt-4">{`Get updated to Filinvest Land's latest happenings.`}</h4>
          </div>
          <div className="mt-12 flex-none">
            <Link href={NEWS_ROUTES.url}>
              <button type="button">
                <BorderButton
                  buttonText="See More"
                  textColor="dark-cornflower-blue"
                  borderColor="dark-cornflower-blue"
                />
              </button>
            </Link>
          </div>
        </div>
        <FeaturedArticles className="mt-16" sliderOnMobile articles={news} />
      </div>
    </section>
  );
};

export default Content;
