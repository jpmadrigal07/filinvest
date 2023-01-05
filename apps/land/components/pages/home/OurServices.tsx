"use client";
import Image from "next/image";
import React from "react";
import ChevronRight from "@/components/svg/ChevronRight";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";

const OurServices = () => {
  return (
    <section className="pt-28">
      <div className="w-full px-6 lg:mx-auto lg:w-1/3">
        <h4 className="text-dark-cornflower-blue text-center font-bold">
          OUR SERVICES
        </h4>
        <h2 className="text-jet mt-2 text-center text-4xl font-extrabold">
          Contact-less, easy, and convenient way of owning a home
        </h2>
        <h4 className="text-dim-gray mt-4 text-center">
          Go through the journey of locking for a property, submitting
          documents, paying for transactions, managing your property and your
          account through our online portals available online 24/7.
        </h4>
      </div>
      <div className="mx-6 mt-12 hidden gap-4 md:flex lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="flex-1">
          <div className="relative flex items-center justify-center">
            <button
              type="button"
              className="bg-blue-ryb hover:bg-dark-cornflower-blue focus:bg-dark-cornflower-blue delay-50 absolute rounded-full px-7 py-6 text-white transition"
            >
              <ChevronRight />
            </button>
            <Image
              src="/filpayall-services.png"
              width={356}
              height={364}
              alt="Picture of the author"
            />
          </div>
          <h3 className="text-jet mt-6 text-center text-2xl font-bold">
            Fil PayAll
          </h3>
        </div>
        <div className="flex-1">
          <div className="relative flex items-center justify-center">
            <button
              type="button"
              className="bg-blue-ryb hover:bg-dark-cornflower-blue focus:bg-dark-cornflower-blue delay-50 absolute rounded-full px-7 py-6 text-white transition"
            >
              <ChevronRight />
            </button>
            <Image
              src="/loan-calculator-services.png"
              width={356}
              height={364}
              alt="Picture of the author"
            />
          </div>
          <h3 className="text-jet mt-6 text-center text-2xl font-bold">
            Loan Calculator
          </h3>
        </div>
        <div className="flex-1">
          <div className="relative flex items-center justify-center">
            <button
              type="button"
              className="bg-blue-ryb hover:bg-dark-cornflower-blue focus:bg-dark-cornflower-blue delay-50 absolute rounded-full px-7 py-6 text-white transition"
            >
              <ChevronRight />
            </button>
            <Image
              src="/service-desk-services.png"
              width={356}
              height={364}
              alt="Picture of the author"
            />
          </div>
          <h3 className="text-jet mt-6 text-center text-2xl font-bold">
            Services Desk Online
          </h3>
        </div>
        <div className="flex-1">
          <div className="relative flex items-center justify-center">
            <button
              type="button"
              className="bg-blue-ryb hover:bg-dark-cornflower-blue focus:bg-dark-cornflower-blue delay-50 absolute rounded-full px-7 py-6 text-white transition"
            >
              <ChevronRight />
            </button>
            <Image
              src="/myhome-services.png"
              width={356}
              height={364}
              alt="Picture of the author"
            />
          </div>
          <h3 className="text-jet mt-6 text-center text-2xl font-bold">
            MyHome
          </h3>
        </div>
      </div>
      <div className="mt-14 block md:hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          centeredSlides={true}
          freeMode={true}
          loop={true}
          navigation={true}
          modules={[Navigation, FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <div className="relative flex items-center justify-center">
                <Image
                  src="/filpayall-services.png"
                  width={456}
                  height={464}
                  alt="Picture of the author"
                />
              </div>
              <h3 className="text-jet mt-6 text-center text-2xl font-bold">
                Fil PayAll
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="relative flex items-center justify-center">
                <Image
                  src="/loan-calculator-services.png"
                  width={456}
                  height={464}
                  alt="Picture of the author"
                />
              </div>
              <h3 className="text-jet mt-6 text-center text-2xl font-bold">
                Loan Calculator
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="relative flex items-center justify-center">
                <Image
                  src="/service-desk-services.png"
                  width={456}
                  height={464}
                  alt="Picture of the author"
                />
              </div>
              <h3 className="text-jet mt-6 text-center text-2xl font-bold">
                Services Desk Online
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="relative flex items-center justify-center">
                <Image
                  src="/myhome-services.png"
                  width={456}
                  height={464}
                  alt="Picture of the author"
                />
              </div>
              <h3 className="text-jet mt-6 text-center text-2xl font-bold">
                MyHome
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OurServices;
