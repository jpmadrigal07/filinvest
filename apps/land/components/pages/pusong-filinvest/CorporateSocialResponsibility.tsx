import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Image from "next/image";
// import Link from "next/link";
// import BorderButton from "../button/BorderButton";
// import ChevronCircleLeft from "../svg/ChevronCircleLeft";
// import ChevronCircleRight from "../svg/ChevronCircleRight";
const CorporateSocialResponsibility = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) =>
      item.blockType === "pusong-filinvest-corporate-social-responsibility"
  );
  console.log(data.corporateSocialResponsibility);
  const swiperRef = useRef(null);

  return (
    // flex flex-col items-center justify-center gap-12 md:flex-row
    <div className="bg-ghost-white mt-24 py-16">
      <div className="mx-6 lg:mx-9 xl:mx-16 2xl:mx-44">
        <Swiper
          tag="div"
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
          {[...Array(6)].map((item, index) => (
            <SwiperSlide key={index}>
              <section className="flex flex-col items-center">
                <div className="mx-6 flex flex-col gap-16 pt-36 lg:mx-9 lg:flex-row xl:mx-16 xl:pt-44 2xl:mx-44">
                  <div className="flex flex-col gap-12 xl:gap-20">
                    <div className="flex flex-1 flex-col gap-9 xl:flex-row">
                      <div className="flex items-center gap-6 md:min-w-[450px] md:gap-9">
                        <div className="flex-none"></div>
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
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div>
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            pagination={true}
            modules={[Pagination]}
            className=""
          >
            {data.corporateSocialResponsibility.map(
              (item: any, index: number) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col">
                    <h3 className="text-dark-cornflower-blue text-2xl font-bold">
                      {item.title}
                    </h3>
                    <h2 className="mt-4 text-6xl font-bold">{item.subTitle}</h2>
                    {item.descriptionParagraphs.map(
                      (item: any, index: number) => (
                        <p className="text-dim-gray mt-4 text-xl" key={index}>
                          {item.paragraph}
                        </p>
                      )
                    )}
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div> */}

        {/* <div className="flex-1">
          <Image
            src={`${data.image.url}`}
            width={1682}
            height={1288}
            alt="Picture of the author"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-dark-cornflower-blue text-2xl font-bold">
            {data.title}
          </h3>
          <h2 className="mt-4 text-6xl font-bold">{data.subTitle}</h2>
          {data.descriptionParagraphs.map((item: any, index: number) => (
            <p className="text-dim-gray mt-4 text-xl" key={index}>
              {item.paragraph}
            </p>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default CorporateSocialResponsibility;
