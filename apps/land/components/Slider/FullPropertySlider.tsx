import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ChevronLeft from "@/components/svg/ChevronLeft";
import ChevronRight from "@/components/svg/ChevronRight";
import Image from "next/image";
import BorderButton from "@/components/button/BorderButton";
import Link from "next/link";

const FullPropertySlider = ({ sliders }: any) => {
  const swiperRef = useRef();
  const swiperRefMobile = useRef();
  return (
    <>
      <div className="relative hidden md:block">
        <div className="absolute right-6 bottom-6 z-40">
          <div className="flex gap-7">
            <div
              className="cursor-pointer rounded-full bg-white px-4 py-3 opacity-100 shadow-md transition duration-150 hover:opacity-70"
              // @ts-expect-error
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeft color="#000000" />
            </div>
            <div
              className="cursor-pointer rounded-full bg-white px-4 py-3 opacity-100 shadow-md transition duration-150 hover:opacity-70"
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
          {sliders
            ? sliders.map((slider: any, index: number) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="relative mt-28">
                      <div className="absolute flex w-1/2 flex-col items-center gap-6 bg-white px-12 pt-4 pb-12 lg:w-1/3 lg:gap-12">
                        <div className="hidden lg:block">
                          <Image
                            src={`${!slider.blockLogo.url ? "/" : ""}${
                              slider.blockLogo.url
                            }`}
                            width={228}
                            height={50}
                            alt={slider.blockLogo.alt}
                          />
                        </div>
                        <div className="block lg:hidden">
                          <Image
                            src={`${!slider.blockLogo.url ? "/" : ""}${
                              slider.blockLogo.url
                            }`}
                            width={114}
                            height={25}
                            alt={slider.blockLogo.alt}
                          />
                        </div>
                        <div>
                          <h2 className="text-jet mb-2 text-center text-xl font-bold lg:text-3xl">
                            {slider.blockTitle}
                          </h2>
                          <h4 className="text-dim-gray lg:text-normal text-center text-xs font-bold">
                            {slider.blockDescription}
                          </h4>
                        </div>
                        <div className="mt-2 lg:mt-0">
                          <button type="button">
                            <Link href={slider.blockLearnMoreLink}>
                              <BorderButton
                                buttonText="Learn More"
                                textColor="dark-cornflower-blue"
                                borderColor="dark-cornflower-blue"
                              />
                            </Link>
                          </button>
                        </div>
                      </div>
                      <Image
                        src={`${!slider.slideBackgroundImage.url ? "/" : ""}${
                          slider.slideBackgroundImage.url
                        }`}
                        width={2840}
                        height={560}
                        alt={slider.slideBackgroundImage.alt}
                      />
                    </div>
                  </SwiperSlide>
                );
              })
            : null}
        </Swiper>
      </div>
      <div className="relative flex items-center justify-center md:hidden">
        <div className="absolute bottom-0 z-40">
          <div className="flex gap-6 md:gap-[43rem]">
            <div
              className="rounded-full bg-white px-4 py-3 shadow-md transition duration-150 hover:opacity-70"
              // @ts-expect-error
              onClick={() => swiperRefMobile.current?.slidePrev()}
            >
              <ChevronLeft color="#000000" />
            </div>
            <div
              className="rounded-full bg-white px-4 py-3 shadow-md transition duration-150 hover:opacity-70"
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
          onBeforeInit={(swiper) => {
            // @ts-expect-error
            swiperRefMobile.current = swiper;
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {sliders
            ? sliders.map((slider: any, index: number) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="relative mt-28">
                      <Image
                        src={`${!slider.slideBackgroundImage.url ? "/" : ""}${
                          slider.slideBackgroundImage.url
                        }`}
                        width={2840}
                        height={560}
                        alt={slider.slideBackgroundImage.alt}
                      />
                      <div className="relative mx-8 -mt-20 mb-12 flex flex-col items-center gap-6 bg-white px-12 pt-4 pb-12 shadow-xl">
                        <div className="hidden lg:block">
                          <Image
                            src={`${!slider.blockLogo.url ? "/" : ""}${
                              slider.blockLogo.url
                            }`}
                            width={228}
                            height={50}
                            alt={slider.blockLogo.alt}
                          />
                        </div>
                        <div className="block lg:hidden">
                          <Image
                            src={`${!slider.blockLogo.url ? "/" : ""}${
                              slider.blockLogo.url
                            }`}
                            width={114}
                            height={25}
                            alt={slider.blockLogo.alt}
                          />
                        </div>
                        <div>
                          <h2 className="text-jet mb-2 text-center text-xl font-bold lg:text-3xl">
                            {slider.blockTitle}
                          </h2>
                          <h4 className="text-dim-gray lg:text-normal text-center text-xs font-bold">
                            {slider.blockDescription}
                          </h4>
                        </div>
                        <div className="mt-2 lg:mt-0">
                          <button type="button">
                            <Link href={slider.blockLearnMoreLink}>
                              <BorderButton
                                buttonText="Learn More"
                                textColor="dark-cornflower-blue"
                                borderColor="dark-cornflower-blue"
                              />
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })
            : null}
        </Swiper>
      </div>
    </>
  );
};

export default FullPropertySlider;
