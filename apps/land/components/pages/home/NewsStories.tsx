"use client";
import React from "react";
import BorderButton from "../../button/BorderButton";
import Link from "next/link";
import NEWS_ROUTES from "@/helpers/routes/news";
import FeaturedArticles from "@/components/list/FeaturedArticles";
import { SAMPLE_NEWS } from "@/helpers/constants";

const NewsStories = ({
  className,
  isHomePage = true,
}: {
  className?: string;
  isHomePage?: boolean;
}) => {
  return (
    <section className={className}>
      <div className="mx-6 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="flex flex-col justify-center md:flex-row md:items-center">
          <div className="flex-1">
            {isHomePage ? (
              <>
                <h4 className="text-dark-cornflower-blue font-bold">
                  NEWS & STORIES
                </h4>
                <h2 className="text-jet mt-2 text-4xl font-extrabold">
                  Featured Articles
                </h2>
                <h4 className="text-dim-gray mt-4">{`Get updated to Filinvest Land's latest happenings.`}</h4>
              </>
            ) : (
              <>
                <h2 className="text-jet mt-2 text-4xl font-extrabold">
                  Press Releases
                </h2>
                <h4 className="text-dim-gray mt-4">{`Get updated to Filinvest Land's latest happenings.`}</h4>
              </>
            )}
          </div>
          <div className="mt-12 flex-none">
            <Link href={NEWS_ROUTES.url}>
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
          articles={SAMPLE_NEWS}
        />
      </div>
    </section>
  );
};

export default NewsStories;
