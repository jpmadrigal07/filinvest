"use client";
import BorderButton from "@/components/button/BorderButton";
import ChevronCircleLeft from "@/components/svg/ChevronCircleLeft";
import ChevronCircleRight from "@/components/svg/ChevronCircleRight";
import Image from "next/image";
import React, { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const EnvironmentalPreservation = ({ content }: any) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const data = content?.content.find(
    (item: any) =>
      item.blockType ===
      "corporate-social-responsibility-environmental-preservation"
  );
  return (
    <div className="flex flex-col gap-32 md:px-20 lg:flex-row">
      <div>
        <h3 className="text-jet text-4xl font-bold">{data.title}</h3>
        {data.descriptionParagraphs.map((item: any, index: number) => (
          <p className="text-dim-gray mt-8 text-2xl" key={index}>
            {item.description}
          </p>
        ))}
        <div className="mt-12">
          <BorderButton
            buttonText="Read More"
            textColor="dark-cornflower-blue"
            borderColor="dark-cornflower-blue"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center md:justify-start">
        <div className="relative">
          <Swiper
            loop
            slidesPerView="auto"
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <SwiperSlide>
              <Image
                src={`${data.image.url}`}
                width={920}
                height={680}
                alt={data.image.alt}
              />
            </SwiperSlide>
          </Swiper>
          <div className="absolute bottom-0 left-0 z-10 flex gap-3 px-10 py-5">
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <ChevronCircleLeft color="white" />
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
              <ChevronCircleRight color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalPreservation;
