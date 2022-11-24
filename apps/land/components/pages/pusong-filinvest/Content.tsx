import Image from "next/image";
import React from "react";
import NewsStories from "@/components/pages/home/NewsStories";

const Content = () => {
  return (
    <section className="mt-12">
      <div className="lg:mx-9 xl:mx-16 2xl:mx-44">
        <h3 className="text-dark-cornflower-blue text-center font-bold">
          OUR STORY
        </h3>
        <h2 className="mt-4 text-center text-4xl font-bold">
          Keeping Our Promise
        </h2>
        <p className="text-dim-gray mx-96 mt-2 text-center">{`FLI's #PusongFilinvest projects for 2018 were highlighted by many community engagement programs that amplified employee camaraderie and the desire to give back to the areas in which the firm works.`}</p>
      </div>
      <div className="mt-12 lg:mx-9 xl:mx-16 2xl:mx-44">
        <Image
          src="/brentville-video.png"
          width={3284}
          height={1270}
          alt="Picture of the author"
        />
      </div>
      <div className="bg-ghost-white mt-24 py-16">
        <div className="flex items-center justify-center gap-12 lg:mx-9 xl:mx-16 2xl:mx-44">
          <div className="flex-1">
            <Image
              src="/environmental-preservation-2.png"
              width={1682}
              height={1288}
              alt="Picture of the author"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-dark-cornflower-blue font-bold">
              CORPORATE SOCIAL RESPONSIBILITY
            </h3>
            <h2 className="mt-4 text-4xl font-bold">
              Environmental Preservation
            </h2>
            <p className="text-dim-gray mt-2">{`The Philippines suffers from environmental degradation caused by the mismanagement and abuse of our coastal waters and forests. In response to this, several Filinvest subsidiaries joined the International Coastal Clean-up program where employees did their part by picking up trash along the shore`}</p>
            <p className="text-dim-gray mt-6">{`Another activity that helps protect Mother Nature is the annual Keep it Green. In 2018, green warriors from the ranks of the FLI employees planted tree seedlings along the slopes of the Havila and Timberland Heights townscapes...`}</p>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <h3 className="text-dark-cornflower-blue text-center font-bold">
          GALLERY
        </h3>
        <h2 className="mt-4 text-center text-4xl font-bold">
          We Care And Love With Passion
        </h2>
        <p className="text-dim-gray mt-4 text-center">
          We Care and Build for the Future
        </p>
        <Image
          src="/gallery-pusongfilinvest.png"
          width={1435}
          height={424}
          alt="Picture of the author"
          className="mt-16 w-full"
        />
      </div>
      <NewsStories className="pb-24 pt-36" isHomePage={false} />
    </section>
  );
};

export default Content;
