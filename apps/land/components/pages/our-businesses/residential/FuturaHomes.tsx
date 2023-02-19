"use client";
import React from "react";
import Image from "next/image";
import BorderButton from "@/components/button/BorderButton";
import FullPropertySlider from "@/components/Slider/FullPropertySlider";

const FuturaHomes = ({ content }: any) => {
  return (
    <>
      <div className="mx-9 mt-16 xl:mx-16 2xl:mx-44">
        <div className="mt-12 flex flex-col items-center gap-4">
          <Image
            src={`${content.content[3].futuraImage.url}`}
            width={314}
            height={157}
            alt={content.content[3].futuraImage.alt}
          />
          <h3 className="text-jet text-center text-2xl font-bold">
            {content.content[3].title}
          </h3>
          <p className="text-dim-gray text-center">
            {content.content[3].description}
          </p>
          <div className="mt-9">
            <BorderButton
              buttonText="Read More"
              textColor="dark-cornflower-blue"
              borderColor="dark-cornflower-blue"
            />
          </div>
        </div>
      </div>
      <div className="mt-22 relative">
        <FullPropertySlider />
      </div>
      <div className="mx-9 mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:mx-16 2xl:mx-44">
        {content.content[3].futuraHomes.map((item: any) => (
          <div className="bg-white shadow-xl">
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
                <BorderButton
                  buttonText="Learn More"
                  textColor="dark-cornflower-blue"
                  borderColor="dark-cornflower-blue"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FuturaHomes;
