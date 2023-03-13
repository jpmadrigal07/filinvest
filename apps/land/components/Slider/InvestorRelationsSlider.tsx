import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
1;
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import BorderButton from "../button/BorderButton";
import ChevronCircleLeft from "../svg/ChevronCircleLeft";
import ChevronCircleRight from "../svg/ChevronCircleRight";
export default function InvestorRelationsSlider({ content }: any) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <section className="flex flex-col items-center justify-center px-6 pt-28 md:items-stretch md:justify-start lg:flex-row lg:items-start lg:justify-between xl:pl-16 xl:pr-0 2xl:pl-40">
        {/* <div className="mx-6 flex w-1/3 flex-col items-start justify-center px-4 text-center md:px-0 md:text-left lg:mx-9 lg:w-1/4 xl:mx-16 2xl:mx-44"> */}
        <div className="flex flex-col items-center justify-center text-center md:items-start md:px-0 md:text-left xl:w-1/3 xl:pr-12">
          <h4 className="text-dark-cornflower-blue text-lg font-black tracking-widest">
            {content.content[7].title}
          </h4>
          <h2 className="text-jet mt-2 text-4xl font-black tracking-tighter">
            {content.content[7].subTitle}
          </h2>
          <h4 className="text-dim-gray -mr- mt-4 text-2xl">
            {content.content[7].description}
          </h4>
          <button type="button" className="mt-16">
            <Link href={content.content[7].learnMoreLink}>
              <BorderButton
                buttonText="Learn More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </Link>
          </button>
        </div>
        <Swiper
          tag="div"
          slidesPerView={1}
          // spaceBetween={-220}
          centeredSlides={true}
          loop={true}
          onBeforeInit={(swiper) => {
            // @ts-expect-error
            swiperRef.current = swiper;
          }}
          modules={[Navigation]}
          className="mySwiper lg:flex-2 mt-16 w-full lg:mt-0 lg:w-2/3"
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
        >
          {[...Array(6)].map((_, i) => (
            <SwiperSlide
              key={i}
              className={i + 1 === activeIndex ? `2xl:-mr-[220px]` : ""}
            >
              {/* <div className="mx-6 flex flex-col gap-16 pb-[1.5rem] lg:mx-9 lg:flex-row xl:mx-16 xl:pt-44 2xl:mx-44"> */}
              <div className="flex flex-col gap-16 pb-[1.5rem] lg:flex-row">
                <div className="flex flex-col gap-12 xl:gap-20">
                  <div className="flex flex-1 flex-col gap-9 xl:flex-row">
                    <div className="flex items-center gap-6 md:min-w-[450px] md:gap-9">
                      <div className="flex-none">
                        <Image
                          src="/pie-chart.png"
                          width={90}
                          height={90}
                          alt="Picture of the author"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <h2 className="text-2xl font-bold">
                          Net income attributable to
                          <br />
                          equity holders of parent
                        </h2>
                        <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-center">
                          <h3 className="text-dark-cornflower-blue text-2xl font-bold">
                            P 3.80 B
                          </h3>
                          <p className="text-dark-cornflower-blue text-normal">
                            Year 2021
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 md:min-w-[450px] md:gap-9">
                      <div className="flex-none">
                        <Image
                          src="/pie-chart.png"
                          width={90}
                          height={90}
                          alt="Picture of the author"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <h2 className="text-2xl font-bold">Revenue</h2>
                        <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-center">
                          <h3 className="text-dark-cornflower-blue text-2xl font-bold">
                            P 17.74B B
                          </h3>
                          <p className="text-dark-cornflower-blue text-normal">
                            Year 2021
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-9 xl:flex-row">
                    <div className="flex items-center gap-6 md:min-w-[450px] md:gap-9">
                      <div className="flex-none">
                        <Image
                          src="/pie-chart.png"
                          width={90}
                          height={90}
                          alt="Picture of the author"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <h2 className="text-2xl font-bold">Total Assets</h2>
                        <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-center">
                          <h3 className="text-dark-cornflower-blue text-2xl font-bold">
                            P 193.22 B B
                          </h3>
                          <p className="text-dark-cornflower-blue text-normal">
                            Year 2021
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 md:min-w-[450px] md:gap-9">
                      <div className="flex-none">
                        <Image
                          src="/pie-chart.png"
                          width={90}
                          height={90}
                          alt="Picture of the author"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <h2 className="text-2xl font-bold">
                          Earnings per share
                        </h2>
                        <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-center">
                          <h3 className="text-dark-cornflower-blue text-2xl font-bold">
                            P 0.16 B
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  <div className="mt-16 ml-16 flex gap-6">
              <ChevronCircleLeft />
              <ChevronCircleRight />
            </div> */}
                </div>
              </div>
              {/*   <div className="mt-16 hidden gap-6 lg:flex">
                    <ChevronCircleLeft />
                    <ChevronCircleRight />
                  </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div className="mt-[5rem] flex w-full items-center justify-center gap-6">
        <button
          className="hover:opacity-70"
          onClick={() => {
            // @ts-expect-error
            swiperRef.current?.slidePrev();
          }}
        >
          <ChevronCircleLeft />
        </button>
        <button
          className="hover:opacity-70"
          onClick={() => {
            // @ts-expect-error
            swiperRef.current?.slideNext();
          }}
        >
          <ChevronCircleRight />
        </button>
      </div>
    </>
  );
}