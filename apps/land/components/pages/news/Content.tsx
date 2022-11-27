"use client";
import BorderButton from "@/components/button/BorderButton";
import SelectCategory from "@/components/select/SelectCategory";
import Grid from "@/components/svg/Grid";
import List from "@/components/svg/List";
import Image from "next/image";
import React, { useState } from "react";

const Content = () => {
  const [position, setPosition] = useState<"list" | "grid">("grid");
  return (
    <section className="my-24 gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
      <div className="flex items-center justify-end gap-7">
        <List
          color={position === "list" ? "#0550E3" : "#303030"}
          className="hover:cursor-pointer focus:cursor-pointer"
          onClick={() => setPosition("list")}
        />
        <Grid
          color={position === "grid" ? "#0550E3" : "#303030"}
          className="hover:cursor-pointer focus:cursor-pointer"
          onClick={() => setPosition("grid")}
        />
        <SelectCategory />
      </div>
      <div
        className={`grid ${
          position === "grid" ? "grid-cols-3" : "grid-cols-1"
        } mt-12 gap-x-9 gap-y-20`}
      >
        <div
          className={`flex ${
            position === "grid"
              ? "flex-col gap-4"
              : "flex-row items-center gap-16"
          }`}
        >
          <div>
            <Image
              src="/award-news.png"
              width={518}
              height={403}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-jet text-2xl font-bold">
              Filinvest Land Inc. Wins Dot Property’s Best Developer
            </h3>
            <p className="text-dim-gray text-sm">
              Posted by Admin on April 22, 2022
            </p>
            <p className="text-dim-gray">
              Mattis molestie a iaculis at erat pellentesque adipiscing commodo
              nunc lobortis mattis.
            </p>
            <div className="mt-4">
              <BorderButton
                buttonText="Read More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </div>
          </div>
        </div>
        <div
          className={`flex ${
            position === "grid"
              ? "flex-col gap-4"
              : "flex-row items-center gap-16"
          }`}
        >
          <div>
            <Image
              src="/award-news.png"
              width={518}
              height={403}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-jet text-2xl font-bold">
              Filinvest Land Inc. Wins Dot Property’s Best Developer
            </h3>
            <p className="text-dim-gray text-sm">
              Posted by Admin on April 22, 2022
            </p>
            <p className="text-dim-gray">
              Mattis molestie a iaculis at erat pellentesque adipiscing commodo
              nunc lobortis mattis.
            </p>
            <div className="mt-4">
              <BorderButton
                buttonText="Read More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </div>
          </div>
        </div>
        <div
          className={`flex ${
            position === "grid"
              ? "flex-col gap-4"
              : "flex-row items-center gap-16"
          }`}
        >
          <div>
            <Image
              src="/award-news.png"
              width={518}
              height={403}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-jet text-2xl font-bold">
              Filinvest Land Inc. Wins Dot Property’s Best Developer
            </h3>
            <p className="text-dim-gray text-sm">
              Posted by Admin on April 22, 2022
            </p>
            <p className="text-dim-gray">
              Mattis molestie a iaculis at erat pellentesque adipiscing commodo
              nunc lobortis mattis.
            </p>
            <div className="mt-4">
              <BorderButton
                buttonText="Read More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </div>
          </div>
        </div>
        <div
          className={`flex ${
            position === "grid"
              ? "flex-col gap-4"
              : "flex-row items-center gap-16"
          }`}
        >
          <div>
            <Image
              src="/award-news.png"
              width={518}
              height={403}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-jet text-2xl font-bold">
              Filinvest Land Inc. Wins Dot Property’s Best Developer
            </h3>
            <p className="text-dim-gray text-sm">
              Posted by Admin on April 22, 2022
            </p>
            <p className="text-dim-gray">
              Mattis molestie a iaculis at erat pellentesque adipiscing commodo
              nunc lobortis mattis.
            </p>
            <div className="mt-4">
              <BorderButton
                buttonText="Read More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </div>
          </div>
        </div>
        <div
          className={`flex ${
            position === "grid"
              ? "flex-col gap-4"
              : "flex-row items-center gap-16"
          }`}
        >
          <div>
            <Image
              src="/award-news.png"
              width={518}
              height={403}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-jet text-2xl font-bold">
              Filinvest Land Inc. Wins Dot Property’s Best Developer
            </h3>
            <p className="text-dim-gray text-sm">
              Posted by Admin on April 22, 2022
            </p>
            <p className="text-dim-gray">
              Mattis molestie a iaculis at erat pellentesque adipiscing commodo
              nunc lobortis mattis.
            </p>
            <div className="mt-4">
              <BorderButton
                buttonText="Read More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </div>
          </div>
        </div>
        <div
          className={`flex ${
            position === "grid"
              ? "flex-col gap-4"
              : "flex-row items-center gap-16"
          }`}
        >
          <div>
            <Image
              src="/award-news.png"
              width={518}
              height={403}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-jet text-2xl font-bold">
              Filinvest Land Inc. Wins Dot Property’s Best Developer
            </h3>
            <p className="text-dim-gray text-sm">
              Posted by Admin on April 22, 2022
            </p>
            <p className="text-dim-gray">
              Mattis molestie a iaculis at erat pellentesque adipiscing commodo
              nunc lobortis mattis.
            </p>
            <div className="mt-4">
              <BorderButton
                buttonText="Read More"
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
