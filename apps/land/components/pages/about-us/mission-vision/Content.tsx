import BorderButton from "@/components/button/BorderButton";
import PageNextPrevButton from "@/components/button/PageNextPrevButton";
import LinkedIn from "@/components/svg/LinkedIn";
import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <section className="-mt-6 2xl:-mt-36">
      <div className="flex gap-16 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="flex w-1/4 flex-none flex-col items-center gap-6 bg-white p-16 px-12 shadow-xl">
          <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full py-6 px-6 shadow-2xl">
            <LinkedIn />
          </div>
          <h3 className="text-jet text-4xl font-bold">Vision</h3>
          <p className="text-jet text-center text-lg">
            To be the most trusted placemaker of environs that inspire and
            enhance a happy life.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 bg-white p-16 px-16 shadow-xl">
          <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full py-6 px-6 shadow-2xl">
            <LinkedIn />
          </div>
          <h3 className="text-jet text-4xl font-bold">Mission</h3>
          <ul className="text-jet text-lg">
            <li>To enliven and enrich lives in Filinvest communities</li>
            <li>To enable and encourage the growth of our partners</li>
            <li>To create and add value for our investors</li>
            <li>
              To build platforms that create vibrant and sustainable ecosystems
            </li>
            <li>To respect and protect the environment</li>
            <li>To keep affordable housing at our core</li>
          </ul>
        </div>
        <div className="flex w-1/4 flex-none flex-col items-center gap-6 bg-white p-16 px-12 shadow-xl">
          <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full py-6 px-6 shadow-2xl">
            <LinkedIn />
          </div>
          <h3 className="text-jet text-4xl font-bold">Core Values</h3>
          <p className="text-jet text-center text-lg">
            The core values of integrity, customer service, professionalism,
            teamwork, innovation and cost-effectiveness are highly valued. The
            highest standards of business and moral ethics shall be exercised.
          </p>
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
