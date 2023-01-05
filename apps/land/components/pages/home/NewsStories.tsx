"use client";
import Image from "next/image";
import React from "react";
import BorderButton from "../../button/BorderButton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const NewsStories = ({
  className,
  isHomePage = true,
}: {
  className?: string;
  isHomePage?: boolean;
}) => {
  return (
    <section className={className}>
      <div className="mx-6 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="flex flex-col justify-center md:flex-row md:items-center">
          <div className="flex-1">
            {isHomePage ? (
              <>
                <h4 className="text-dark-cornflower-blue font-bold">
                  NEWS & STORIES
                </h4>
                <h2 className="text-jet mt-2 text-4xl font-extrabold">
                  Featured Articles
                </h2>
                <h4 className="text-dim-gray mt-4">{`Get updated to Filinvest Land's latest happenings.`}</h4>
              </>
            ) : (
              <>
                <h2 className="text-jet mt-2 text-4xl font-extrabold">
                  Press Releases
                </h2>
                <h4 className="text-dim-gray mt-4">{`Get updated to Filinvest Land's latest happenings.`}</h4>
              </>
            )}
          </div>
          <div className="mt-12 flex-none">
            <button type="button">
              <BorderButton
                buttonText="See More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </button>
          </div>
        </div>
        <div className="mt-16 hidden gap-12 md:flex">
          <div>
            <Image
              src="/award-news.png"
              width={1036}
              height={806}
              alt="Picture of the author"
            />
            <h2 className="text-jet mt-6 text-2xl font-bold">
              Filinvest Land Inc. Wins Dot Property’s Best Developer – North
              Luzon and Mindanao Awards
            </h2>
            <h4 className="text-dim-gray mt-4">
              Mattis molestie a iaculis at erat pellentesque adipiscing commodo
              nunc lobortis mattis.
            </h4>
          </div>
          <div>
            <Image
              src="/award-2-news.png"
              width={1036}
              height={806}
              alt="Picture of the author"
            />
            <h2 className="text-jet mt-6 text-2xl font-bold">{`Filinvest Land, Inc. honored at BCI Asia's Top 10 Best Developer Awards`}</h2>
            <h4 className="text-dim-gray mt-4">
              Mattis molestie a iaculis at erat pellentesque adipiscing commodo
              nunc lobortis mattis.
            </h4>
          </div>
          <div>
            <Image
              src="/award-3-news.png"
              width={1036}
              height={806}
              alt="Picture of the author"
            />
            <h2 className="text-jet mt-6 text-2xl font-bold">
              Filinvest Activa recognized as the Best Mixed-use Development by
              Dot Property
            </h2>
            <h4 className="text-dim-gray mt-4">
              Mattis molestie a iaculis at erat pellentesque adipiscing commodo
              nunc lobortis mattis.
            </h4>
          </div>
        </div>
        <div className="mt-16 block md:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            centeredSlides={true}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <Image
                  src="/award-news.png"
                  width={1036}
                  height={806}
                  alt="Picture of the author"
                />
                <h2 className="text-jet mt-6 text-2xl font-bold">
                  Filinvest Land Inc. Wins Dot Property’s Best Developer – North
                  Luzon and Mindanao Awards
                </h2>
                <h4 className="text-dim-gray mt-4">
                  Mattis molestie a iaculis at erat pellentesque adipiscing
                  commodo nunc lobortis mattis.
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/award-2-news.png"
                  width={1036}
                  height={806}
                  alt="Picture of the author"
                />
                <h2 className="text-jet mt-6 text-2xl font-bold">{`Filinvest Land, Inc. honored at BCI Asia's Top 10 Best Developer Awards`}</h2>
                <h4 className="text-dim-gray mt-4">
                  Mattis molestie a iaculis at erat pellentesque adipiscing
                  commodo nunc lobortis mattis.
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/award-3-news.png"
                  width={1036}
                  height={806}
                  alt="Picture of the author"
                />
                <h2 className="text-jet mt-6 text-2xl font-bold">
                  Filinvest Activa recognized as the Best Mixed-use Development
                  by Dot Property
                </h2>
                <h4 className="text-dim-gray mt-4">
                  Mattis molestie a iaculis at erat pellentesque adipiscing
                  commodo nunc lobortis mattis.
                </h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default NewsStories;
