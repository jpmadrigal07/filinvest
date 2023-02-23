"use client";
import Image from "next/image";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ChevronLeft from "@/components/svg/ChevronLeft";
import ChevronRight from "@/components/svg/ChevronRight";
import Link from "next/link";
import BorderButton from "../button/BorderButton";
import moment from "moment";

type T_ArticlesList = {
  sliderOnMobile?: boolean;
  className?: string;
  isList?: boolean;
  articles: any[];
};

const FeaturedArticles = ({
  sliderOnMobile = false,
  className,
  articles = [],
}: T_ArticlesList) => {
  const swiperRef = useRef();
  if (articles.length === 0)
    return <div className="text-gainsboro mt-12 text-xl italic">No result</div>;
  return (
    <div className={className}>
      <div
        className={`${
          sliderOnMobile ? "hidden md:grid" : ""
        } grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3`}
      >
        {articles.map((article, index) => {
          return (
            <Link
              href={`/article/${article.slug}`}
              key={index}
              className="opacity-100 transition duration-150 hover:opacity-70"
            >
              <Image
                src={article.coverImage.url}
                width={1364}
                height={663}
                alt={article.coverImage.alt}
              />
              <h2 className="text-jet mt-6 truncate text-2xl font-bold">
                {article.title}
              </h2>
              <h4 className="text-dim-gray text-sm opacity-70">
                Posted on {moment(article.createdAt).format("MMM DD, YYYY")}
              </h4>
              <h4 className="text-dim-gray mt-4 truncate">
                {article.content[0].children[0].text}
              </h4>
              <div className="mt-8">
                <BorderButton
                  buttonText="Read More"
                  textColor="dark-cornflower-blue"
                  borderColor="dark-cornflower-blue"
                />
              </div>
            </Link>
          );
        })}
      </div>
      <div
        className={`relative mt-16 flex items-center justify-center ${
          sliderOnMobile ? "md:hidden" : "hidden"
        }`}
      >
        <div className="absolute -bottom-12 z-40">
          <div className="flex gap-6 md:gap-[43rem]">
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
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          onBeforeInit={(swiper) => {
            // @ts-expect-error
            swiperRef.current = swiper;
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {articles.map((article, index) => {
            return (
              <SwiperSlide key={index}>
                <Link href={`/article/${article.slug}`}>
                  <Image
                    src={article.coverImage.url}
                    width={1364}
                    height={663}
                    alt={article.coverImage.alt}
                  />
                  <h2 className="text-jet mt-6 text-2xl font-bold">
                    {article.title}
                  </h2>
                  {/* <h4 className="text-dim-gray mt-4 text-sm">Posted by Admin on April 22, 2022</h4> */}
                  <h4 className="text-dim-gray mt-4">
                    {article.content[0].children[0].text}
                  </h4>
                  {/* <div className="mt-12">
                                        <BorderButton
                                            buttonText="Read More"
                                            textColor="dark-cornflower-blue"
                                            borderColor="dark-cornflower-blue"
                                        />
                                    </div> */}
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedArticles;
