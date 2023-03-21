"use client";
import React from "react";
import Image from "next/image";
import BorderButton from "@/components/button/BorderButton";
import FullPropertySlider from "@/components/Slider/FullPropertySlider";
import Link from "next/link";

const PrestigeHomes = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "residential-prestige"
  );
  const sliderPrestige = content?.content.find(
    (item: any) =>
      item.blockType === "residential-slider" &&
      item.id === "63fe028370c5bf66a883e7dc"
  );
  return (
    <>
      <div className="mx-9 mt-9 xl:mx-16 2xl:mx-44">
        <div className="flex flex-col items-center gap-4">
          <Image
            src={`${data.prestigeImage.url}`}
            width={314}
            height={157}
            alt={data.prestigeImage.alt}
          />
          <h3 className="text-jet text-center text-2xl font-bold">
            {data.title}
          </h3>
          <p className="text-dim-gray text-center">{data.description}</p>
          <div className="mt-9">
            <Link href={data.readMoreLink}>
              <BorderButton
                buttonText="Read More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-22 relative">
        <FullPropertySlider
          sliders={sliderPrestige.imageSlides}
          withThumbnail={true}
          isDefault={false}
        />
      </div>
      <div className="mx-9 mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:mx-16 2xl:mx-44">
        {data.prestigeHomes.map((item: any, index: number) => (
          <div className="bg-white shadow-xl" key={index}>
            <Image
              src={`${item.homeImage.url}`}
              width={916}
              height={712}
              alt={item.homeImage.alt}
            />
            <div className="p-6">
              <h3 className="text-jet text-2xl font-bold">{item.homeName}</h3>
              <p className="text-dim-gray mt-3">{item.homeDescription}</p>
              <div className="mb-6 mt-9">
                <Link href={item.learnMoreLink}>
                  <BorderButton
                    buttonText="Learn More"
                    textColor="dark-cornflower-blue"
                    borderColor="dark-cornflower-blue"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PrestigeHomes;
