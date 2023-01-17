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

type T_Articles = {
  imgSrc: string;
  width?: number;
  height?: number;
  alt?: string;
  title: string;
  desc: string;
  slug: string;
};

type T_ArticlesList = {
  sliderOnMobile?: boolean;
  className?: string;
  isList?: boolean;
  articles: T_Articles[];
};

const FeaturedArticles = ({
  sliderOnMobile = false,
  className,
  articles = [],
}: T_ArticlesList) => {
  const swiperRef = useRef();
  if (articles.length === 0) return <></>;
  return (
    <div className={className}>
      <div
        className={`${
          sliderOnMobile ? "hidden md:grid" : ""
        } grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3`}
      >
        {articles.map((article) => {
          return (
            <Link href={article.slug}>
              <Image
                src={article.imgSrc}
                width={article.width ? article.width : 1036}
                height={article.height ? article.height : 806}
                alt={article.alt ? article.alt : ""}
              />
              <h2 className="text-jet mt-6 text-2xl font-bold">
                {article.title}
              </h2>
              <h4 className="text-dim-gray mt-4 text-sm">
                Posted by Admin on April 22, 2022
              </h4>
              <h4 className="text-dim-gray mt-4">{article.desc}</h4>
              <div className="mt-12">
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
          {articles.map((article) => {
            return (
              <SwiperSlide>
                <div>
                  <Image
                    src={article.imgSrc}
                    width={article.width ? article.width : 1036}
                    height={article.height ? article.height : 806}
                    alt={article.alt ? article.alt : ""}
                  />
                  <h2 className="text-jet mt-6 text-2xl font-bold">
                    {article.title}
                  </h2>
                  {/* <h4 className="text-dim-gray mt-4 text-sm">Posted by Admin on April 22, 2022</h4> */}
                  <h4 className="text-dim-gray mt-4">{article.desc}</h4>
                  {/* <div className="mt-12">
                                        <BorderButton
                                            buttonText="Read More"
                                            textColor="dark-cornflower-blue"
                                            borderColor="dark-cornflower-blue"
                                        />
                                    </div> */}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedArticles;
