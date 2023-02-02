"use client";
import React from "react";
import BorderButton from "../../button/BorderButton";
import Link from "next/link";
import FeaturedArticles from "@/components/list/FeaturedArticles";

const NewsStories = ({ content }: any) => {
  const flattenNews = content
    ? content.content[6].newsStories.map((newsStory: any) => newsStory.news)
    : [];
  return (
    <section className="pt-36 xl:pt-44">
      <div className="mx-6 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="flex flex-col justify-center md:flex-row md:items-center">
          <div className="flex-1">
            <h4 className="text-dark-cornflower-blue font-bold">
              {content.content[6].title}
            </h4>
            <h2 className="text-jet mt-2 text-4xl font-extrabold">
              {content.content[6].subTitle}
            </h2>
            <h4 className="text-dim-gray mt-4">
              {content.content[6].description}
            </h4>
          </div>
          <div className="mt-12 flex-none">
            <Link href={content.content[6].learnMoreLink}>
              <button type="button">
                <BorderButton
                  buttonText="See More"
                  textColor="dark-cornflower-blue"
                  borderColor="dark-cornflower-blue"
                />
              </button>
            </Link>
          </div>
        </div>
        <FeaturedArticles
          className="mt-16"
          sliderOnMobile
          articles={flattenNews}
        />
      </div>
    </section>
  );
};

export default NewsStories;
