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

const News = ({ news }: any) => {
  return (
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
  );
};

export default News;
