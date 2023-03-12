// "use client";
import React, { useRef, useState } from "react";
import { getBrandHexColor } from "@/helpers/getBrandHexColor";
import Image, { ImageProps } from "next/image";
import { File, Project } from "shared-types";
import Flag from "../svg/Flag";
import Peso from "../svg/Peso";
import SizeBox from "../svg/SizeBox";
import { T_Brands } from "@/types/global";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ChevronCircleLeft from "@/components/svg/ChevronCircleLeft";
import ChevronCircleRight from "@/components/svg/ChevronCircleRight";

const FALLBACK_IMG_SRC = "/office-parks-small.png";

const ImageWithFallback = ({ src, alt, ...props }: ImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc(FALLBACK_IMG_SRC);
      }}
    />
  );
};

type ImageSliderProps = {
  imageGallery: {
    image?: File;
    id?: string;
  }[];
};

const ImageSlider = ({ imageGallery }: ImageSliderProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <>
      <Swiper
        loop
        autoHeight
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        centeredSlides
        className="relative w-auto"
      >
        <div className="absolute top-1/2 left-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 transform justify-between px-6">
          <button
            onClick={(e) => {
              e.preventDefault();
              swiperRef.current?.slidePrev();
            }}
          >
            <ChevronCircleLeft color="white" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              swiperRef.current?.slideNext();
            }}
          >
            <ChevronCircleRight color="white" />
          </button>
        </div>
        {imageGallery.map(({ image, id }) => {
          return (
            <SwiperSlide key={id!}>
              <ImageWithFallback
                src={image?.url ?? ""}
                alt={image?.alt ?? ""}
                width={520}
                height={375}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  const formattedPrice = formatter.format(project.price);

  return (
    <div className="flex justify-center shadow-[0_3px_60px_rgba(0,0,0,0.10)]">
      <div className="flex max-w-[350px] flex-col bg-white md:max-w-xl">
        <div className="flex grow items-center justify-center">
          {project.imageGallery.length > 1 ? (
            <ImageSlider imageGallery={project.imageGallery} />
          ) : (
            <ImageWithFallback
              src={project.coverImage.url ?? ""}
              alt={project.coverImage.alt ?? ""}
              width={520}
              height={375}
            />
          )}
        </div>
        <div className="flex flex-col divide-y px-9">
          <div className="flex flex-col py-4 md:py-8">
            <h5 className="text-3xl font-black tracking-tighter">
              {project.title}
            </h5>
            <p className="text-lg md:text-xl">
              {project.description ?? "No description"}
            </p>
          </div>
          <div className="flex gap-5 py-4 md:py-8">
            <div className="flex items-center justify-center gap-3">
              <Peso
                color={getBrandHexColor(project.site.title as T_Brands)}
                classes="h-4 w-4 md:h-5 md:w-5"
              />
              <p className="text-sm font-bold md:text-xl">{formattedPrice}</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Flag
                color={getBrandHexColor(project.site.title as T_Brands)}
                classes="h-4 w-4 md:h-5 md:w-5"
              />
              <p className="text-sm font-bold md:text-xl">
                {project.location.title}
              </p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <SizeBox
                color={getBrandHexColor(project.site.title as T_Brands)}
                classes="h-4 w-4 md:h-5 md:w-5"
              />
              <p className="text-sm font-bold md:text-xl">{project.size} sqm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
