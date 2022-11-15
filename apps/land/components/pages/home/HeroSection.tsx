"use client";
import Image from "next/image";
import React from "react";
import MainLogo from "../../svg/MainLogo";

const HeroSection = () => {
  return (
    <>
      <section className="flex h-screen w-full bg-[url('/hero-bg.png')] bg-cover bg-no-repeat">
        <div className="mx-auto mt-64 w-2/4 text-center">
          <h1 className="mb-4 text-8xl font-extrabold text-white">
            Dreams Built Green
          </h1>
          <h4 className="text-lg text-white">
            With over 50 years of experience, Filinvest Land, Inc. (FLI) is one
            of the leading full-range
            <br />
            property developers in the Philippines with a diverse project
            portfolio spanning the archipelago.
          </h4>
        </div>
      </section>
      <div className="absolute -mt-80 flex w-full items-center justify-center gap-12">
        <div className="relative">
          <Image
            src="/prestige-home.png"
            width={434}
            height={500}
            alt="Picture of the author"
          />
          <div className="absolute -mt-24 flex w-full items-center justify-center">
            <MainLogo />
          </div>
        </div>
        <div className="relative">
          <Image
            src="/aspire-home.png"
            width={434}
            height={500}
            alt="Picture of the author"
          />
          <div className="absolute -mt-24 flex w-full items-center justify-center">
            <MainLogo />
          </div>
        </div>
        <div className="relative">
          <Image
            src="/futura-home.png"
            width={434}
            height={500}
            alt="Picture of the author"
          />
          <div className="absolute -mt-24 flex w-full items-center justify-center">
            <MainLogo />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
