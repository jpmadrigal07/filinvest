"use client";
import ChevronDown from "@/components/svg/ChevronDown";
import Search from "@/components/svg/Search";
import React, { useEffect, useState } from "react";
import RangeSliderMark from "@/components/range-sliders/RangeSliderMark";
import Image from "next/image";
import BorderButton from "@/components/button/BorderButton";
import { toCurrency } from "@/helpers/homeCalculator";

const Content = () => {
  const [priceRange, setPriceRange] = useState([20, 50]);
  const [priceCurrencyRange, setPriceCurrencyRange] = useState([0, 0]);
  useEffect(() => {
    const pricePerValue = 1000000;
    const min = priceRange[0] * pricePerValue;
    const max = priceRange[1] * pricePerValue;
    setPriceCurrencyRange([min, max]);
  }, [priceRange]);
  return (
    <section className="-mt-24 flex flex-col gap-9 2xl:-mt-32">
      <div className="bg-dark-cornflower-blue mx-16 flex items-center gap-8 px-10 py-6 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="w-full flex-1">
          <h3 className="text-white">Property Type</h3>
          <div className="border-silver-chalice flex items-center gap-3 border-b-[1px] py-2 hover:cursor-pointer">
            <input
              type="text"
              placeholder="Condominium"
              className="ring-none w-full border-none bg-transparent text-white hover:cursor-pointer"
            />
            <ChevronDown />
          </div>
        </div>
        <div className="w-full flex-1">
          <h3 className="text-white">Location</h3>
          <div className="border-silver-chalice flex items-center gap-3 border-b-[1px] py-2 hover:cursor-pointer">
            <input
              type="text"
              placeholder="Cebu"
              className="ring-none w-full border-none bg-transparent text-white hover:cursor-pointer"
            />
            <ChevronDown />
          </div>
        </div>
        <div className="w-full flex-1">
          <h3 className="text-white">Unit Size</h3>
          <div className="border-silver-chalice flex items-center gap-3 border-b-[1px] py-2 hover:cursor-pointer">
            <input
              type="text"
              placeholder="Any"
              className="ring-none w-full border-none bg-transparent text-white hover:cursor-pointer"
            />
            <ChevronDown />
          </div>
        </div>
        <div className="w-full flex-1">
          <h3 className="mb-1 text-white">Price Range</h3>
          <RangeSliderMark
            range
            defaultValue={priceRange}
            onValueChange={setPriceRange}
            value={priceRange}
          />
          <h4 className="mt-1 text-sm text-white">
            Php {toCurrency(priceCurrencyRange[0])} - Php{" "}
            {toCurrency(priceCurrencyRange[1])}
          </h4>
        </div>
        <div className="flex-none">
          <button className="hover:bg-platinum focus:bg-platinum delay-50 bg-white py-5 px-8 transition">
            <div className="text-dark-cornflower-blue flex items-center gap-2 font-bold">
              <Search /> Search
            </div>
          </button>
        </div>
      </div>
      <div className="mt-16 lg:mx-9 xl:mx-16 2xl:mx-44">
        <h2 className="text-jet text-center text-4xl font-bold">
          Find A Home That Suits You
        </h2>
        <p className="text-dim-gray mt-6">
          Filinvest creates sprawling townscape developments that feature a
          complete live-work-play environment where residents can live life to
          the fullest. Drawing from the rich culture and natural beauty of their
          locations, these townscapes feature residential communities,
          commercial areas and civic places within a short distance from each
          other to make a family’s life more convenient.
        </p>
        <div className="mt-12 flex flex-col items-center gap-4">
          <Image
            src="/prestige-logo.png"
            width={314}
            height={157}
            alt="Picture of the author"
          />
          <h3 className="text-jet text-center text-2xl font-bold">
            Luxury Living Spaces For A Life Well-Lived P 8 M And Up
          </h3>
          <p className="text-dim-gray text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
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
      <div className="relative mt-28">
        <div className="absolute flex w-1/4 flex-col items-center gap-12 bg-white px-12 pt-4 pb-12">
          <div>
            <Image
              src="/activa-logo.png"
              width={228}
              height={50}
              alt="Picture of the author"
            />
          </div>
          <div>
            <h2 className="text-jet mb-2 text-center text-3xl font-bold">
              Activa Cubao
            </h2>
            <h4 className="text-dim-gray text-center font-bold">
              Neque sodales ut etiam sit amet nisl. Quis lectus nulla at
              volutpat diam. Euismod nisi porta.
            </h4>
          </div>
          <div>
            <button type="button">
              <BorderButton
                buttonText="Learn More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </button>
          </div>
        </div>
        <Image
          src="/projects-activa.png"
          width={2840}
          height={560}
          alt="Picture of the author"
        />
      </div>
      <div className="mt-16 flex gap-8 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="bg-white shadow-xl">
          <Image
            src="/homes.png"
            width={916}
            height={712}
            alt="Picture of the author"
          />
          <div className="p-6">
            <h3 className="text-jet text-2xl font-bold">Homes</h3>
            <p className="text-dim-gray mt-3">
              Massa placerat duis ultricies lacus sed. Neque volutpat ac
              tincidunt vitae semper quis lectus nulla.
            </p>
            <div className="mt-9 mb-6">
              <BorderButton
                buttonText="Learn More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-xl">
          <Image
            src="/homes.png"
            width={916}
            height={712}
            alt="Picture of the author"
          />
          <div className="p-6">
            <h3 className="text-jet text-2xl font-bold">Homes</h3>
            <p className="text-dim-gray mt-3">
              Massa placerat duis ultricies lacus sed. Neque volutpat ac
              tincidunt vitae semper quis lectus nulla.
            </p>
            <div className="mt-9 mb-6">
              <BorderButton
                buttonText="Learn More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-xl">
          <Image
            src="/homes.png"
            width={916}
            height={712}
            alt="Picture of the author"
          />
          <div className="p-6">
            <h3 className="text-jet text-2xl font-bold">Homes</h3>
            <p className="text-dim-gray mt-3">
              Massa placerat duis ultricies lacus sed. Neque volutpat ac
              tincidunt vitae semper quis lectus nulla.
            </p>
            <div className="mt-9 mb-6">
              <BorderButton
                buttonText="Learn More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="mt-12 flex flex-col items-center gap-4">
          <Image
            src="/aspire-logo.png"
            width={282}
            height={141}
            alt="Picture of the author"
          />
          <h3 className="text-jet text-center text-2xl font-bold">
            Flexible Residences For A Dynamic Life P 3 M - 8 M
          </h3>
          <p className="text-dim-gray text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
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
      <div className="relative mt-28">
        <div className="absolute flex w-1/4 flex-col items-center gap-12 bg-white px-12 pt-4 pb-12">
          <div>
            <Image
              src="/activa-logo.png"
              width={228}
              height={50}
              alt="Picture of the author"
            />
          </div>
          <div>
            <h2 className="text-jet mb-2 text-center text-3xl font-bold">
              Activa Cubao
            </h2>
            <h4 className="text-dim-gray text-center font-bold">
              Neque sodales ut etiam sit amet nisl. Quis lectus nulla at
              volutpat diam. Euismod nisi porta.
            </h4>
          </div>
          <div>
            <button type="button">
              <BorderButton
                buttonText="Learn More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </button>
          </div>
        </div>
        <Image
          src="/projects-activa.png"
          width={2840}
          height={560}
          alt="Picture of the author"
        />
      </div>
      <div className="mt-16 flex gap-8 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="bg-white shadow-xl">
          <Image
            src="/homes.png"
            width={916}
            height={712}
            alt="Picture of the author"
          />
          <div className="p-6">
            <h3 className="text-jet text-2xl font-bold">Homes</h3>
            <p className="text-dim-gray mt-3">
              Massa placerat duis ultricies lacus sed. Neque volutpat ac
              tincidunt vitae semper quis lectus nulla.
            </p>
            <div className="mt-9 mb-6">
              <BorderButton
                buttonText="Learn More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-xl">
          <Image
            src="/homes.png"
            width={916}
            height={712}
            alt="Picture of the author"
          />
          <div className="p-6">
            <h3 className="text-jet text-2xl font-bold">Homes</h3>
            <p className="text-dim-gray mt-3">
              Massa placerat duis ultricies lacus sed. Neque volutpat ac
              tincidunt vitae semper quis lectus nulla.
            </p>
            <div className="mt-9 mb-6">
              <BorderButton
                buttonText="Learn More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-xl">
          <Image
            src="/homes.png"
            width={916}
            height={712}
            alt="Picture of the author"
          />
          <div className="p-6">
            <h3 className="text-jet text-2xl font-bold">Homes</h3>
            <p className="text-dim-gray mt-3">
              Massa placerat duis ultricies lacus sed. Neque volutpat ac
              tincidunt vitae semper quis lectus nulla.
            </p>
            <div className="mt-9 mb-6">
              <BorderButton
                buttonText="Learn More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="mt-12 flex flex-col items-center gap-4">
          <Image
            src="/futura-logo.png"
            width={244}
            height={122}
            alt="Picture of the author"
          />
          <h3 className="text-jet text-center text-2xl font-bold">
            Solid Homes For A Solid Future P 800 Th - 3 M
          </h3>
          <p className="text-dim-gray text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
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
      <div className="relative mt-28">
        <div className="absolute flex w-1/4 flex-col items-center gap-12 bg-white px-12 pt-4 pb-12">
          <div>
            <Image
              src="/activa-logo.png"
              width={228}
              height={50}
              alt="Picture of the author"
            />
          </div>
          <div>
            <h2 className="text-jet mb-2 text-center text-3xl font-bold">
              Activa Cubao
            </h2>
            <h4 className="text-dim-gray text-center font-bold">
              Neque sodales ut etiam sit amet nisl. Quis lectus nulla at
              volutpat diam. Euismod nisi porta.
            </h4>
          </div>
          <div>
            <button type="button">
              <BorderButton
                buttonText="Learn More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </button>
          </div>
        </div>
        <Image
          src="/projects-activa.png"
          width={2840}
          height={560}
          alt="Picture of the author"
        />
      </div>
      <div className="mt-16 mb-24 flex gap-8 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="bg-white shadow-xl">
          <Image
            src="/homes.png"
            width={916}
            height={712}
            alt="Picture of the author"
          />
          <div className="p-6">
            <h3 className="text-jet text-2xl font-bold">Homes</h3>
            <p className="text-dim-gray mt-3">
              Massa placerat duis ultricies lacus sed. Neque volutpat ac
              tincidunt vitae semper quis lectus nulla.
            </p>
            <div className="mt-9 mb-6">
              <BorderButton
                buttonText="Learn More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-xl">
          <Image
            src="/homes.png"
            width={916}
            height={712}
            alt="Picture of the author"
          />
          <div className="p-6">
            <h3 className="text-jet text-2xl font-bold">Homes</h3>
            <p className="text-dim-gray mt-3">
              Massa placerat duis ultricies lacus sed. Neque volutpat ac
              tincidunt vitae semper quis lectus nulla.
            </p>
            <div className="mt-9 mb-6">
              <BorderButton
                buttonText="Learn More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-xl">
          <Image
            src="/homes.png"
            width={916}
            height={712}
            alt="Picture of the author"
          />
          <div className="p-6">
            <h3 className="text-jet text-2xl font-bold">Homes</h3>
            <p className="text-dim-gray mt-3">
              Massa placerat duis ultricies lacus sed. Neque volutpat ac
              tincidunt vitae semper quis lectus nulla.
            </p>
            <div className="mt-9 mb-6">
              <BorderButton
                buttonText="Learn More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
