"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BorderButton from "../../button/BorderButton";

const AboutUs = ({ content }: any) => {
  return (
    <section className="justfify-center mx-6 flex flex-col items-center gap-12 pt-36 lg:mx-9 lg:flex-row lg:gap-24 xl:mx-16 xl:pt-44 2xl:mx-44">
      <div className="hidden flex-1 md:block">
        <Image
          src={`${!content.content[5].coverImage.url ? "/" : ""}${
            content.content[5].coverImage.url
          }`}
          width={1076}
          height={754}
          alt={content.content[5].coverImage.alt}
        />
      </div>
      <div className="flex-none px-4 text-center md:px-0 md:text-left lg:w-1/3">
        <h4 className="text-dark-cornflower-blue text-lg font-black tracking-widest">
          {content.content[5].title}
        </h4>
        <h2 className="text-jet mt-2 break-normal px-4 text-4xl font-black tracking-tight md:px-0">
          {content.content[5].subTitle}
        </h2>
        <h4 className="text-dim-gray mt-4 text-xl">
          {content.content[5].description}
        </h4>
        <button type="button" className="mt-14">
          <Link href={content.content[5].learnMoreLink}>
            <BorderButton
              buttonText="Learn More"
              textColor="dark-cornflower-blue"
              borderColor="dark-cornflower-blue"
            />
          </Link>
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
