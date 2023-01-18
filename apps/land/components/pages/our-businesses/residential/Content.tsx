"use client";
import React from "react";
import Image from "next/image";
import BorderButton from "@/components/button/BorderButton";
import PropertySearch from "@/components/search/PropertySearch";
import FullPropertySlider from "@/components/Slider/FullPropertySlider";
import { useSearchParams } from "next/navigation";

const Content = () => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const unitSize = searchParams.get("unitSize");
  const priceRangeFrom = searchParams.get("priceRangeFrom");
  const priceRangeTo = searchParams.get("priceRangeTo");
  const searchQuery = {
    propertyType: "Residential",
    location: location ? location : "",
    unitSize: unitSize ? unitSize : "",
    priceRangeFrom: priceRangeFrom ? priceRangeFrom : "",
    priceRangeTo: priceRangeTo ? priceRangeTo : "",
  };
  return (
    <section className="-mt-24 flex flex-col gap-9 2xl:-mt-32">
      <PropertySearch className="mx-9 lg:mx-0" searchQuery={searchQuery} />
      <div className="mx-9 mt-16 xl:mx-16 2xl:mx-44">
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
      <div className="mt-22 relative">
        <FullPropertySlider />
      </div>
      <div className="mx-9 mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:mx-16 2xl:mx-44">
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
      <div className="mx-9 mt-16 xl:mx-16 2xl:mx-44">
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
      <div className="mt-22 relative">
        <FullPropertySlider />
      </div>
      <div className="mx-9 mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:mx-16 2xl:mx-44">
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
      <div className="mx-9 mt-16 xl:mx-16 2xl:mx-44">
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
      <div className="mt-22">
        <FullPropertySlider />
      </div>
      <div className="mx-9 mt-16 mb-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:mx-16 2xl:mx-44">
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
