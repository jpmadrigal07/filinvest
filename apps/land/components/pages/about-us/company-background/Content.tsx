"use client";
import BorderButton from "@/components/button/BorderButton";
import PageNextPrevButton from "@/components/button/PageNextPrevButton";
import Image from "next/image";
import React from "react";
import Development from "./svg/Development";
import Family from "./svg/Family";
import Hectare from "./svg/Hectare";
import Map from "./svg/Map";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Content = () => {
  return (
    <section className="mt-16">
      <div className="mx-3 flex flex-col gap-12 md:flex-row lg:mx-9 lg:gap-36 xl:mx-16 2xl:mx-80">
        <div className="flex flex-1 flex-col items-center gap-4">
          <Family />
          <span className="bg-jet h-16 w-[1px]"></span>
          <h3 className="text-jet text-center text-2xl font-bold">
            3,000
            <br />
            Hectares
          </h3>
        </div>
        <div className="flex flex-1 flex-col items-center gap-4">
          <Hectare />
          <span className="bg-jet h-16 w-[1px]"></span>
          <h3 className="text-jet text-center text-2xl font-bold">
            160,000
            <br />
            Families
          </h3>
        </div>
        <div className="flex flex-1 flex-col items-center gap-4">
          <Development />
          <span className="bg-jet h-16 w-[1px]"></span>
          <h3 className="text-jet text-center text-2xl font-bold">
            Over 250 Ongoing Developments
          </h3>
        </div>
        <div className="flex flex-1 flex-col items-center gap-4">
          <Map />
          <span className="bg-jet h-16 w-[1px]"></span>
          <h3 className="text-jet text-center text-2xl font-bold">
            50 Key Areas
            <br />
            Across The Country
          </h3>
        </div>
      </div>
      <div className="mt-32 flex flex-col items-center gap-12 lg:flex-row lg:gap-0">
        <div className="flex-1">
          <Image
            src={`/50-years-experience.png`}
            width={1834}
            height={1414}
            alt="Picture of the author"
          />
        </div>
        <div className="flex-1 px-8 md:px-24 lg:pl-24">
          <h2 className="text-jet text-6xl font-bold">
            With Over 50 Years Of Experience
          </h2>
          <p className="text-dim-gray mt-4">
            Filinvest Land, Inc. (FLI) is one of the leading full-range property
            developers in the Philippines with a diverse project portfolio
            spanning the archipelago. The company has developed over 3,000
            hectares of land into homes for over 160,000 families.
          </p>
          <p className="text-dim-gray mt-4">
            From residential communities, FLI has diversified into building
            townships, mid-rise and high-rise condominiums, BPO hubs, office
            buildings, shopping centers and leisure developments. With over 250
            ongoing developments in 50 key areas across the country, FLI
            continues to expand and innovate, propelled by its commitment to
            build the Filipino dream.
          </p>
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center gap-12 lg:flex-row lg:gap-0">
        <div className="hidden flex-1 pl-36 pr-24 lg:block">
          <h2 className="text-jet text-4xl font-bold">Pharetra Convallis</h2>
          <p className="text-dim-gray mt-4">
            Urna et pharetra pharetra massa massa. Commodo elit at imperdiet dui
            accumsan sit amet. Laoreet suspendisse interdum consectetur libero
            id faucibus nisl tincidunt. Laoreet sit amet cursus sit amet dictum
            sit amet justo. Purus sit amet luctus venenatis lectus magna
            fringilla. Pharetra convallis posuere morbi leo urna molestie at
            elementum eu. Arcu cursus euismod quis viverra nibh cras.
          </p>
          <p className="text-dim-gray mt-4">
            Elit pellentesque habitant morbi tristique senectus et netus et
            malesuada. Ac tortor vitae purus faucibus ornare suspendisse sed
            nisi. Libero id faucibus nisl tincidunt eget nullam.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src={`/pharetra-convallis.png`}
            width={1834}
            height={1414}
            alt="Picture of the author"
          />
        </div>
        <div className="block flex-1 px-8 md:px-24 lg:hidden">
          <h2 className="text-jet text-3xl font-bold">
            With Over 50 Years Of Experience
          </h2>
          <p className="text-dim-gray mt-4">
            Filinvest Land, Inc. (FLI) is one of the leading full-range property
            developers in the Philippines with a diverse project portfolio
            spanning the archipelago. The company has developed over 3,000
            hectares of land into homes for over 160,000 families.
          </p>
          <p className="text-dim-gray mt-4">
            From residential communities, FLI has diversified into building
            townships, mid-rise and high-rise condominiums, BPO hubs, office
            buildings, shopping centers and leisure developments. With over 250
            ongoing developments in 50 key areas across the country, FLI
            continues to expand and innovate, propelled by its commitment to
            build the Filipino dream.
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
        <div className="mx-6 mt-16 hidden gap-12 md:flex lg:mx-9 xl:mx-16 2xl:mx-44">
          <div>
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
          <div>
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
          <div>
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
                <div className="my-12">
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
                <div className="my-12">
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
                <div className="my-12">
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
