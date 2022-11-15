"use client";
import Image from "next/image";
import React from "react";
import BorderButton from "../../button/BorderButton";

const AboutUs = () => {
  return (
    <section className="justfify-center mx-3 flex items-center gap-24 pt-44 lg:mx-9 xl:mx-16 2xl:mx-44">
      <div className="flex-1">
        <Image
          src="/family-about-us.png"
          width={1076}
          height={754}
          alt="Picture of the author"
        />
      </div>
      <div className="w-1/3 flex-none">
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
          <BorderButton
            buttonText="Learn More"
            textColor="dark-cornflower-blue"
            borderColor="dark-cornflower-blue"
          />
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
