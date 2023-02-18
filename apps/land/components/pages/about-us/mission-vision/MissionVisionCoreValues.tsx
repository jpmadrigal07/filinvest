"use client";
import PageNextPrevButton from "@/components/button/PageNextPrevButton";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Diamond from "@/components/svg/Diamond";
import FeaturedArticles from "@/components/list/FeaturedArticles";

const MissionVisionCoreValues = ({ news, content }: any) => {
  return (
    <section className="-mt-6 2xl:-mt-36">
      <div className="mx-6 flex flex-col gap-2 md:flex-row lg:mx-9 lg:gap-8 xl:mx-16 2xl:mx-44">
        <div className="flex flex-1 flex-col items-center gap-6 bg-white px-6 py-16 shadow-xl lg:w-1/4 lg:flex-none lg:px-12">
          <Image
            src={`${content.content[0].visionIcon.url}`}
            width={79}
            height={79}
            alt={`${content.content[0].visionIcon.alt}`}
          />
          <h3 className="text-jet text-4xl font-bold">Vision</h3>
          <p className="text-jet text-center text-lg">
            {content.content[0].visionDescription}
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center gap-6 bg-white py-16 pl-10 pr-6 shadow-xl lg:pl-12">
          <Image
            src={`${content.content[0].missionIcon.url}`}
            width={79}
            height={79}
            alt={`${content.content[0].missionIcon.alt}`}
          />
          <h3 className="text-jet text-4xl font-bold">Mission</h3>
          <div>
            {content.content[0].missionBulletDescription.map(
              (bulletDescription: any) => (
                <div className="mt-1 flex items-center gap-3">
                  <div className="mt-1 flex-none">
                    <Diamond />
                  </div>
                  <p className="text-jet flex-1 text-lg">
                    {bulletDescription.description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center gap-6 bg-white px-6 py-16 shadow-xl lg:w-1/4 lg:flex-none lg:px-12">
          <Image
            src={`${content.content[0].coreValuesIcon.url}`}
            width={79}
            height={79}
            alt={`${content.content[0].coreValuesIcon.alt}`}
          />
          <h3 className="text-jet text-center text-4xl font-bold">
            Core Values
          </h3>
          <p className="text-jet text-center text-lg">
            The core values of integrity, customer service, professionalism,
            teamwork, innovation and cost-effectiveness are highly valued. The
            highest standards of business and moral ethics shall be exercised.
          </p>
        </div>
      </div>
      <div className="mx-6 my-24 flex justify-end lg:mx-9 xl:mx-16 2xl:mx-44">
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
        <FeaturedArticles
          className="mx-9 mt-16 md:mx-24"
          sliderOnMobile
          articles={news}
        />
      </div>
    </section>
  );
};

export default MissionVisionCoreValues;
