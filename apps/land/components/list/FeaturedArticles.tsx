import Image from "next/image";
import React, { useRef } from "react";
import "swiper/swiper-bundle.css";
// import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ChevronLeft from "@/components/svg/ChevronLeft";
import ChevronRight from "@/components/svg/ChevronRight";
import Link from "next/link";
import BorderButton from "../button/BorderButton";
import useGetNews from "../../hooks/useGetNews";
import moment from "moment";

type T_ArticlesList = {
  sliderOnMobile?: boolean;
  className?: string;
  isList?: boolean;
  articles: any[];
  withExtras?: boolean;
  sliderImageClassName?: string;
  isTwoLines?: boolean;
};

const FeaturedArticles = ({
  sliderOnMobile = false,
  className,
  sliderImageClassName,
  articles = [],
  withExtras = true,
  isTwoLines = false,
}: T_ArticlesList) => {
  const query = {
    propertyType: "",
    location: "",
    unitSize: "",
    unitSizeFrom: 0,
    unitSizeTo: 0,
    bedroomsFrom: 0,
    bedroomsTo: 0,
    priceRangeFrom: 0,
    priceRangeTo: 0,
    priceRange: [0, 0],
    brand: "All",
    subLocation: "",
    projectType: "",
    locationGroup: "",
    propertyName: "",
    bedrooms: "",
  };
  const { data } = useGetNews({
    searchParams: query,
  });
  const swiperRef = useRef(null);
  const updatedArticle =
    articles.length > 0 ? articles : data && data.length > 0 ? data : [];
  if (updatedArticle.length === 0)
    return (
      <div className="text-gainsboro mt-12 mb-24 w-full text-xl italic">
        No result
      </div>
    );

  return (
    <div className={className}>
      <div
        className={`${
          sliderOnMobile ? "hidden md:grid" : ""
        } grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3`}
      >
        {updatedArticle.map((article: any, index: any) => {
          return (
            <Link
              href={`/article/${article.slug}`}
              key={index}
              className={`group `}
            >
              <Image
                src={article.coverImage.url}
                width={1280}
                height={663}
                alt={article.coverImage.alt}
                className="opacity-100 transition duration-150 hover:opacity-70"
              />
              <h2
                className={`text-jet mt-6 text-3xl font-bold leading-9 ${
                  isTwoLines
                    ? "max-h-[80px] overflow-hidden text-ellipsis"
                    : "truncate"
                }`}
                style={
                  isTwoLines
                    ? {
                        WebkitLineClamp: 2,
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                      }
                    : {}
                }
              >
                {article.title}
              </h2>

              {withExtras && (
                <h4
                  className={`text-dim-gray mt-3 mb-4  text-sm opacity-70 ${
                    isTwoLines && "mt-4"
                  }`}
                >
                  {`Posted by ${article.author.roles[0]
                    .charAt(0)
                    .toUpperCase()}${article.author.roles[0].substr(
                    1
                  )} on`}{" "}
                  {` `}
                  {moment(article.createdAt).format("MMM DD, YYYY")}
                </h4>
              )}

              <h4
                className={`text-dim-gray mt-3 text-lg font-bold ${
                  isTwoLines
                    ? "max-h-[68px] overflow-hidden text-ellipsis"
                    : "mt-4 truncate"
                }`}
                style={
                  isTwoLines
                    ? {
                        WebkitLineClamp: 2,
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                      }
                    : {}
                }
              >
                {article.content[0].children[0].text}
              </h4>

              {withExtras && (
                <div className="mt-8">
                  <BorderButton
                    buttonText="Read More"
                    textColor="dark-cornflower-blue"
                    borderColor="dark-cornflower-blue"
                    isAlt
                  />
                </div>
              )}
            </Link>
          );
        })}
      </div>
      <div
        className={`relative mt-10 flex w-full items-center justify-center ${
          sliderOnMobile ? "md:hidden" : "hidden"
        }`}
      >
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          centeredSlides={true}
          onBeforeInit={(swiper) => {
            // @ts-expect-error
            swiperRef.current = swiper;
          }}
          modules={[Navigation]}
          className="relative"
        >
          {updatedArticle?.map((article: any, index: any) => {
            return (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <Link
                  href={`/article/${article.slug}`}
                  className="text-center md:text-left"
                >
                  <Image
                    src={article.coverImage.url}
                    width={1364}
                    height={663}
                    alt={article.coverImage.alt}
                    className={`w-full ${sliderImageClassName}`}
                  />
                  <h2 className="text-jet mt-6 text-4xl font-black tracking-tighter md:text-2xl">
                    {article?.title}
                  </h2>
                  {withExtras && (
                    <h4 className="text-dim-gray mt-4 text-sm">
                      Posted by Admin on April 22, 2022
                    </h4>
                  )}
                  <h4 className="text-dim-gray line-clamp-5 mt-4 text-2xl tracking-tight lg:text-xl">
                    {article?.content[0]?.children[0].text}
                  </h4>
                  {withExtras && (
                    <div className="mt-12 mb-6">
                      <BorderButton
                        buttonText="Read More"
                        textColor="dark-cornflower-blue"
                        borderColor="dark-cornflower-blue"
                        isAlt
                      />
                    </div>
                  )}
                </Link>{" "}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="mt-8 flex items-center justify-center md:hidden">
        <div className="flex gap-6 md:gap-[43rem]">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_3px_60px_rgba(0,0,0,0.5)]"
            // @ts-expect-error
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft color="#000000" />
          </div>
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full shadow-[0_3px_60px_rgba(0,0,0,0.5)]"
            // @ts-expect-error
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight color="#000000" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticles;
