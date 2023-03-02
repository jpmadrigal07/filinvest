"use client";
import React from "react";
import Image from "next/image";
import BorderButton from "@/components/button/BorderButton";
import FullPropertySlider from "@/components/Slider/FullPropertySlider";
import Link from "next/link";

const AspireHomes = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "residential-aspire"
  );
  const sliderAspire = content?.content.find(
    (item: any) =>
      item.blockType === "residential-slider" &&
      item.id === "63fe045b70c5bf66a883e7df"
  );
  return (
    <>
      <div className="mx-9 mt-16 xl:mx-16 2xl:mx-44">
        <div className="mt-12 flex flex-col items-center gap-4">
          <Image
            src={`${data.aspireImage.url}`}
            width={314}
            height={157}
            alt={data.aspireImage.alt}
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
        <FullPropertySlider sliders={sliderAspire.imageSlides} />
      </div>
      <div className="mx-9 mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:mx-16 2xl:mx-44">
        {data.aspireHomes.map((item: any, index: number) => (
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

export default AspireHomes;
