import BorderButton from "@/components/button/BorderButton";
import ArrowRight from "@/components/svg/ArrowRight";
import RedDownTriangle from "@/components/svg/RedDownTriangle";
import Image from "next/image";
import React from "react";
import NewsStories from "@/components/pages/home/NewsStories";
import Link from "next/link";
import ROUTES from "@/helpers/routes";

const Content = () => {
  const { INVESTOR_RELATIONS } = ROUTES;
  const {
    OUR_COMPANY,
    OUR_LEADERSHIP,
    INVESTOR_RELATIONS_PROGRAM,
    CORPORATE_GOVERNANCE,
  } = INVESTOR_RELATIONS;
  return (
    <section className="-mt-6 2xl:-mt-36">
      <div className="flex justify-center gap-12 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="bg-royal-dark-blue relative flex w-[200px] flex-none flex-col items-center gap-6 p-16 px-6 shadow-xl">
          <h3 className="text-center text-white">{OUR_COMPANY.name}</h3>
          <Link
            href={OUR_COMPANY.url}
            className="hover:bg-ghost-white focus:bg-ghost-white absolute -bottom-6 rounded-full bg-white px-4 py-[19px] shadow-xl"
          >
            <ArrowRight color="#000" />
          </Link>
        </div>
        <div className="bg-royal-dark-blue relative flex w-[200px] flex-none flex-col items-center gap-6 p-16 px-6 shadow-xl">
          <h3 className="text-center text-white">{OUR_LEADERSHIP.name}</h3>
          <Link
            href={OUR_LEADERSHIP.url}
            className="hover:bg-ghost-white focus:bg-ghost-white absolute -bottom-6 rounded-full bg-white px-4 py-[19px] shadow-xl"
          >
            <ArrowRight color="#000" />
          </Link>
        </div>
        <div className="bg-royal-dark-blue relative flex w-[200px] flex-none flex-col items-center gap-6 p-16 px-6 shadow-xl">
          <h3 className="text-center text-white">Services</h3>
          <Link
            href="/services"
            className="hover:bg-ghost-white focus:bg-ghost-white absolute -bottom-6 rounded-full bg-white px-4 py-[19px] shadow-xl"
          >
            <ArrowRight color="#000" />
          </Link>
        </div>
        <div className="bg-royal-dark-blue relative flex w-[200px] flex-none flex-col items-center gap-6 p-16 px-6 shadow-xl">
          <h3 className="text-center text-white">
            {INVESTOR_RELATIONS_PROGRAM.name}
          </h3>
          <Link
            href={INVESTOR_RELATIONS_PROGRAM.url}
            className="hover:bg-ghost-white focus:bg-ghost-white absolute -bottom-6 rounded-full bg-white px-4 py-[19px] shadow-xl"
          >
            <ArrowRight color="#000" />
          </Link>
        </div>
        <div className="bg-royal-dark-blue relative flex w-[200px] flex-none flex-col items-center gap-6 p-16 px-6 shadow-xl">
          <h3 className="text-center text-white">
            {CORPORATE_GOVERNANCE.name}
          </h3>
          <Link
            href={CORPORATE_GOVERNANCE.url}
            className="hover:bg-ghost-white focus:bg-ghost-white absolute -bottom-6 rounded-full bg-white px-4 py-[19px] shadow-xl"
          >
            <ArrowRight color="#000" />
          </Link>
        </div>
      </div>
      <div className="mt-16 flex gap-6 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="flex-1">
          <div className="flex-none py-20 px-9">
            <div className="mx-12">
              <h2 className="text-jet text-4xl font-bold">Stock Information</h2>
              <p className="text-dim-gray mt-6">
                Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Ut
                consequat semper viverra nam libero.
              </p>
              <Image
                src={`/investor-relations-graph.png`}
                width={498}
                height={268}
                alt="Picture of the author"
                className="mt-6"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex-1 py-20 px-16">
            <div className="border-jet border-[1px]">
              <div className="flex py-6 px-12">
                <div className="mx-12 flex items-end gap-3">
                  <h3 className="text-jet ml-7 text-4xl font-bold">FLI</h3>
                  <RedDownTriangle />
                  <h3 className="text-jet text-8xl font-bold">1.00</h3>
                  <h4 className="text-jet text-4xl font-bold">PHP</h4>
                </div>
              </div>
            </div>
            <div className="border-jet flex flex-col gap-2 border-b-[1px] border-solid py-6 pb-2">
              <div className="flex">
                <h3 className="text-jet w-4/6 flex-none text-xl font-bold">
                  Open
                </h3>
                <h3 className="text-jet flex-none text-xl font-bold">
                  %Change
                </h3>
              </div>
              <div className="flex">
                <h3 className="text-jet w-4/6 flex-none text-xl">1.00</h3>
                <h3 className="text-jet flex-none text-xl">-1.96%</h3>
              </div>
            </div>
            <div className="border-jet flex flex-col gap-2 border-b-[1px] border-solid py-4">
              <div className="flex">
                <h3 className="text-jet w-4/6 flex-none text-xl font-bold">
                  Close
                </h3>
                <h3 className="text-jet flex-none text-xl font-bold">
                  52-Week High
                </h3>
              </div>
              <div className="flex">
                <h3 className="text-jet w-4/6 flex-none text-xl">1.02</h3>
                <h3 className="text-jet flex-none text-xl">-1.19</h3>
              </div>
            </div>
            <div className="flex flex-col gap-2 py-4">
              <div className="flex">
                <h3 className="text-jet w-4/6 flex-none text-xl font-bold">
                  Change
                </h3>
                <h3 className="text-jet flex-none text-xl font-bold">
                  52-Week Low
                </h3>
              </div>
              <div className="flex">
                <h3 className="text-jet w-4/6 flex-none text-xl">-0.02</h3>
                <h3 className="text-jet flex-none text-xl">1.00</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-ghost-white py-24">
        <h2 className="text-jet text-center text-4xl font-bold">
          Financial Highlights
        </h2>
        <p className="text-dim-gray mt-6 text-center">
          Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Ut
          consequat semper viverra nam libero justo laoreet sit.
        </p>
        <div className="mt-16 grid grid-cols-3 items-center justify-center gap-x-4 gap-y-12 lg:mx-9 xl:mx-16 2xl:mx-44">
          <div className="flex gap-6">
            <div className="flex-none">
              <Image
                src="/pie-chart-blue-icon.png"
                width={95}
                height={95}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h3 className="text-jet text-2xl font-bold">
                Net income attributable to equity holders of parent
              </h3>
              <div className="mt-4 flex items-center gap-4">
                <h4 className="text-royal-dark-blue text-2xl font-bold">
                  P 3.80B
                </h4>
                <p className="text-royal-dark-blue text-sm font-bold">
                  Year 2021
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-none">
              <Image
                src="/pie-chart-blue-icon.png"
                width={95}
                height={95}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h3 className="text-jet text-2xl font-bold">Revenue</h3>
              <div className="mt-4 flex items-center gap-4">
                <h4 className="text-royal-dark-blue text-2xl font-bold">
                  P 17.74B
                </h4>
                <p className="text-royal-dark-blue text-sm font-bold">
                  Year 2021
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-none">
              <Image
                src="/pie-chart-blue-icon.png"
                width={95}
                height={95}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h3 className="text-jet text-2xl font-bold">Net Income</h3>
              <div className="mt-4 flex items-center gap-4">
                <h4 className="text-royal-dark-blue text-2xl font-bold">
                  P 4.1B
                </h4>
                <p className="text-royal-dark-blue text-sm font-bold">
                  Year 2021
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-none">
              <Image
                src="/pie-chart-blue-icon.png"
                width={95}
                height={95}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h3 className="text-jet text-2xl font-bold">Total Assets</h3>
              <div className="mt-4 flex items-center gap-4">
                <h4 className="text-royal-dark-blue text-2xl font-bold">
                  P 193.22B
                </h4>
                <p className="text-royal-dark-blue text-sm font-bold">
                  Year 2021
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-none">
              <Image
                src="/pie-chart-blue-icon.png"
                width={95}
                height={95}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h3 className="text-jet text-2xl font-bold">
                Earnings per share
              </h3>
              <div className="mt-4 flex items-center gap-4">
                <h4 className="text-royal-dark-blue text-2xl font-bold">
                  P 0.16
                </h4>
                <p className="text-royal-dark-blue text-sm font-bold">
                  Year 2021
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-none">
              <Image
                src="/pie-chart-blue-icon.png"
                width={95}
                height={95}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h3 className="text-jet text-2xl font-bold">
                Dividends per share
              </h3>
              <div className="mt-4 flex items-center gap-4">
                <h4 className="text-royal-dark-blue text-2xl font-bold">
                  P 0.047
                </h4>
                <p className="text-royal-dark-blue text-sm font-bold">
                  Year 2021
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 flex justify-center">
          <BorderButton
            buttonText="See All Complete Details"
            textColor="dark-cornflower-blue"
            borderColor="dark-cornflower-blue"
          />
        </div>
      </div>
      <div className="divide-gainsboro flex divide-x divide-solid">
        <div className="flex-1 py-24 px-16">
          <h2 className="text-jet text-center text-4xl font-bold">
            Disclosures
          </h2>
          <p className="text-dim-gray mt-6 text-center">
            Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Ut
            consequat semper viverra nam libero.
          </p>
          <div className="mt-12 flex justify-center">
            <BorderButton
              buttonText="Learn More"
              textColor="dark-cornflower-blue"
              borderColor="dark-cornflower-blue"
            />
          </div>
        </div>
        <div className="flex-1 py-24 px-16">
          <h2 className="text-jet text-center text-4xl font-bold">
            Presentations
          </h2>
          <p className="text-dim-gray mt-6 text-center">
            Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Ut
            consequat semper viverra nam libero.
          </p>
          <div className="mt-12 flex justify-center">
            <BorderButton
              buttonText="Learn More"
              textColor="dark-cornflower-blue"
              borderColor="dark-cornflower-blue"
            />
          </div>
        </div>
        <div className="flex-1 py-24 px-16">
          <h2 className="text-jet text-center text-4xl font-bold">
            Research Reports
          </h2>
          <p className="text-dim-gray mt-6 text-center">
            Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Ut
            consequat semper viverra nam libero.
          </p>
          <div className="mt-12 flex justify-center">
            <BorderButton
              buttonText="Download Annual Reports"
              textColor="white"
              borderColor="dark-cornflower-blue"
              bgColor="dark-cornflower-blue"
            />
          </div>
        </div>
      </div>
      <NewsStories className="bg-ghost-white pb-24 pt-24" isHomePage={false} />
    </section>
  );
};

export default Content;
