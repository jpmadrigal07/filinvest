"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BorderButton from "../../button/BorderButton";

const AboutUs = ({ content }: any) => {
  return (
    <section className="justfify-center mx-6 flex flex-col items-center gap-12 pt-36 lg:mx-9 lg:flex-row lg:gap-24 xl:mx-16 xl:pt-44 2xl:mx-44">
      <div className="flex-1">
        <Image
          src={`${!content.content[5].coverImage.url ? "/" : ""}${
            content.content[5].coverImage.url
          }`}
          width={1076}
          height={754}
          alt={content.content[5].coverImage.alt}
        />
      </div>
      <div className="flex-none lg:w-1/3">
        <h4 className="text-dark-cornflower-blue font-bold">
          {content.content[5].title}
        </h4>
        <h2 className="text-jet mt-2 text-4xl font-extrabold">
          {content.content[5].subTitle}
        </h2>
        <h4 className="text-dim-gray mt-4">{content.content[5].description}</h4>
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
