"use client";
import ABOUT_US_ROUTES from "@/helpers/routes/aboutUs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BorderButton from "../../button/BorderButton";

const AboutUs = () => {
  return (
    <section className="justfify-center mx-6 flex flex-col items-center gap-12 pt-36 lg:mx-9 lg:flex-row lg:gap-24 xl:mx-16 xl:pt-44 2xl:mx-44">
      <div className="flex-1">
        <Image
          src="/family-about-us.png"
          width={1076}
          height={754}
          alt="Picture of the author"
        />
      </div>
      <div className="flex-none lg:w-1/3">
        <h4 className="text-dark-cornflower-blue font-bold">ABOUT US</h4>
        <h2 className="text-jet mt-2 text-4xl font-extrabold">
          We Build the
          <br />
          Filipino Dream
        </h2>
        <h4 className="text-dim-gray mt-4">
          Filinvest Land, Inc. (FLI), a subsidiary of Filinvest Development
          Corporation (FDC), is one of the country’s leading full-range property
          developers. For over 50 years, the company has built a diverse project
          portfolio spanning the archipelago, from its core best-value homes, to
          townships, mixed-use developments, mid-rise and high-rise
          condominiums, BPO office buildings, shopping centers, and leisure
          developments. Staying true to its mission, FLI continues to build the
          Filipino dream across the Philippines.
        </h4>
        <button type="button" className="mt-14">
          <Link href={ABOUT_US_ROUTES.COMPANY_BACKGROUND.url}>
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
