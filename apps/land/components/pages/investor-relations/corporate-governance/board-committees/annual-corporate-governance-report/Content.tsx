import PageNextPrevButton from "@/components/button/PageNextPrevButton";
import LinkedIn from "@/components/svg/LinkedIn";
import React from "react";

const Content = () => {
  return (
    <section className="-mt-52 mb-28 flex flex-col gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
      <div className="grid grid-cols-4 gap-12">
        <div className="flex h-full flex-col items-center gap-6 bg-white p-16 px-12 shadow-xl">
          <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full py-6 px-6 shadow-2xl">
            <LinkedIn />
          </div>
          <h3 className="text-jet text-xl font-bold">2022</h3>
          <ul className="text-jet text-lg underline">
            <li>Integrated Annual Corporate Governance Report 2021</li>
          </ul>
        </div>
        <div className="flex h-full flex-col items-center gap-6 bg-white p-16 px-12 shadow-xl">
          <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full py-6 px-6 shadow-2xl">
            <LinkedIn />
          </div>
          <h3 className="text-jet text-xl font-bold">2021</h3>
          <ul className="text-jet text-lg underline">
            <li>Integrated Annual Corporate Governance Report 2020</li>
          </ul>
        </div>
        <div className="flex h-full flex-col items-center gap-6 bg-white p-16 px-12 shadow-xl">
          <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full py-6 px-6 shadow-2xl">
            <LinkedIn />
          </div>
          <h3 className="text-jet text-xl font-bold">2020</h3>
          <ul className="text-jet text-lg underline">
            <li>
              Integrated Annual Corporate Governance Report for the Year 2019
            </li>
          </ul>
        </div>
        <div className="flex h-full flex-col items-center gap-6 self-center bg-white p-16 px-12 shadow-xl">
          <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full py-6 px-6 shadow-2xl">
            <LinkedIn />
          </div>
          <h3 className="text-jet text-xl font-bold">2019</h3>
          <ul className="text-jet text-lg underline">
            <li>[Amend-1]Integrated Annual Corporate Governance Report</li>
            <li>{`FLI's Integrated Annual Corporate Governance Report for the Year 2018`}</li>
          </ul>
        </div>
        <div className="flex h-full flex-col items-center gap-6 self-center bg-white p-16 px-12 shadow-xl">
          <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full py-6 px-6 shadow-2xl">
            <LinkedIn />
          </div>
          <h3 className="text-jet text-xl font-bold">2017</h3>
          <ul className="text-jet text-lg underline">
            <li>Integrated Annual Corporate Governance Report 2017</li>
          </ul>
        </div>
        <div className="flex h-full flex-col items-center gap-6 self-center bg-white p-16 px-12 shadow-xl">
          <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full py-6 px-6 shadow-2xl">
            <LinkedIn />
          </div>
          <h3 className="text-jet text-xl font-bold">2016</h3>
          <ul className="text-jet text-lg underline">
            <li>Amended Annual Corporate Governance Report - 2016</li>
            <li>Annual Corporate Governance Report - 2016</li>
          </ul>
        </div>
        <div className="flex h-full flex-col items-center gap-6 self-center bg-white p-16 px-12 shadow-xl">
          <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full py-6 px-6 shadow-2xl">
            <LinkedIn />
          </div>
          <h3 className="text-jet text-xl font-bold">2015</h3>
          <ul className="text-jet text-lg underline">
            <li>Annual Corporate Governance Report - 2015</li>
          </ul>
        </div>
        <div className="flex h-full flex-col items-center gap-6 self-center bg-white p-16 px-12 shadow-xl">
          <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full py-6 px-6 shadow-2xl">
            <LinkedIn />
          </div>
          <h3 className="text-jet text-xl font-bold">2014</h3>
          <ul className="text-jet text-lg underline">
            <li>
              Updates and changes in the Annual Corporate Governance Report 2014
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-32 flex">
        <div className="flex-none">
          <PageNextPrevButton
            imgName="investor-relations-program-next-prev.png"
            pageName="Structures"
            isLeft={true}
          />
        </div>
        <div className="grow"></div>
        <div className="flex-none">
          <PageNextPrevButton
            imgName="investor-relations-program-next-prev.png"
            pageName="Investor Relations Program"
            isLeft={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
