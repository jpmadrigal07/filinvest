import BorderButton from "@/components/button/BorderButton";
import PageNextPrevButton from "@/components/button/PageNextPrevButton";
import Image from "next/image";
import React from "react";
import Development from "./svg/Development";
import Family from "./svg/Family";
import Hectare from "./svg/Hectare";
import Map from "./svg/Map";

const Content = () => {
  return (
    <section className="mt-16">
      <div className="mx-3 flex flex-1 gap-36 lg:mx-9 xl:mx-16 2xl:mx-80">
        <div className="flex flex-col items-center gap-4">
          <Hectare />
          <span className="bg-jet h-16 w-[1px]"></span>
          <h3 className="text-jet text-center text-2xl font-bold">
            3,000
            <br />
            Hectares
          </h3>
        </div>
        <div className="flex flex-1 flex-col items-center gap-4">
          <Family />
          <span className="bg-jet h-16 w-[1px]"></span>
          <h3 className="text-jet text-center text-2xl font-bold">
            160,000
            <br />
            Families
          </h3>
        </div>
        <div className="flex flex-1 flex-col items-center gap-4">
          <Development />
          <span className="bg-jet h-16 w-[1px]"></span>
          <h3 className="text-jet text-center text-2xl font-bold">
            Over 250 Ongoing Developments
          </h3>
        </div>
        <div className="flex flex-1 flex-col items-center gap-4">
          <Map />
          <span className="bg-jet h-16 w-[1px]"></span>
          <h3 className="text-jet text-center text-2xl font-bold">
            50 Key Areas
            <br />
            Across The Country
          </h3>
        </div>
      </div>
      <div className="mt-32 flex items-center">
        <div className="flex-1">
          <Image
            src={`/50-years-experience.png`}
            width={1834}
            height={1414}
            alt="Picture of the author"
          />
        </div>
        <div className="flex-1 pr-36 pl-24">
          <h2 className="text-jet text-3xl font-bold">
            With Over 50 Years Of Experience
          </h2>
          <p className="text-dim-gray mt-4">
            Filinvest Land, Inc. (FLI) is one of the leading full-range property
            developers in the Philippines with a diverse project portfolio
            spanning the archipelago. The company has developed over 3,000
            hectares of land into homes for over 160,000 families.
          </p>
          <p className="text-dim-gray mt-4">
            From residential communities, FLI has diversified into building
            townships, mid-rise and high-rise condominiums, BPO hubs, office
            buildings, shopping centers and leisure developments. With over 250
            ongoing developments in 50 key areas across the country, FLI
            continues to expand and innovate, propelled by its commitment to
            build the Filipino dream.
          </p>
        </div>
      </div>
      <div className="mt-20 flex items-center">
        <div className="flex-1 pl-36 pr-24">
          <h2 className="text-jet text-3xl font-bold">
            With Over 50 Years Of Experience
          </h2>
          <p className="text-dim-gray mt-4">
            Filinvest Land, Inc. (FLI) is one of the leading full-range property
            developers in the Philippines with a diverse project portfolio
            spanning the archipelago. The company has developed over 3,000
            hectares of land into homes for over 160,000 families.
          </p>
          <p className="text-dim-gray mt-4">
            From residential communities, FLI has diversified into building
            townships, mid-rise and high-rise condominiums, BPO hubs, office
            buildings, shopping centers and leisure developments. With over 250
            ongoing developments in 50 key areas across the country, FLI
            continues to expand and innovate, propelled by its commitment to
            build the Filipino dream.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src={`/pharetra-convallis.png`}
            width={1834}
            height={1414}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="my-24 flex justify-end lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="flex-none">
          <PageNextPrevButton
            imgName="investor-relations-program-next-prev.png"
            pageName="Our Leadership"
            isLeft={false}
          />
        </div>
      </div>
      <div className="bg-ghost-white py-24">
        <h3 className="text-center text-4xl font-bold">Latest News</h3>
        <div className="mt-16 flex gap-12 lg:mx-9 xl:mx-16 2xl:mx-44">
          <div>
            <Image
              src="/award-news.png"
              width={1036}
              height={806}
              alt="Picture of the author"
            />
            <h2 className="text-jet mt-6 text-2xl font-bold">
              Tempus urna et pharetra pharetra massa massa
            </h2>
            <h4 className="text-dim-gray mt-4">
              Posted by Admin on April 22, 2022
            </h4>
            <h4 className="text-dim-gray mt-4">
              Mattis molestie a iaculis at erat pellentesque adipiscing commodo
              nunc lobortis mattis.
            </h4>
            <div className="mt-12">
              <BorderButton
                buttonText="Read More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </div>
          </div>
          <div>
            <Image
              src="/award-2-news.png"
              width={1036}
              height={806}
              alt="Picture of the author"
            />
            <h2 className="text-jet mt-6 text-2xl font-bold">
              Tempus urna et pharetra pharetra massa massa
            </h2>
            <h4 className="text-dim-gray mt-4">
              Posted by Admin on April 22, 2022
            </h4>
            <h4 className="text-dim-gray mt-4">
              Mattis molestie a iaculis at erat pellentesque adipiscing commodo
              nunc lobortis mattis.
            </h4>
            <div className="mt-12">
              <BorderButton
                buttonText="Read More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </div>
          </div>
          <div>
            <Image
              src="/award-3-news.png"
              width={1036}
              height={806}
              alt="Picture of the author"
            />
            <h2 className="text-jet mt-6 text-2xl font-bold">
              Tempus urna et pharetra pharetra massa massa
            </h2>
            <h4 className="text-dim-gray mt-4">
              Posted by Admin on April 22, 2022
            </h4>
            <h4 className="text-dim-gray mt-4">
              Mattis molestie a iaculis at erat pellentesque adipiscing commodo
              nunc lobortis mattis.
            </h4>
            <div className="mt-12">
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
