import Download from "@/components/svg/Download";
import LinkedIn from "@/components/svg/LinkedIn";
import React from "react";

const Content = () => {
  return (
    <section className="mx-3 mt-16 mb-28 flex flex-col gap-9 px-6 lg:mx-9 xl:mx-16 2xl:mx-44">
      <h2 className="text-jet text-4xl font-bold">CSLA Report</h2>
      <div className="mt-4 flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <h3 className="text-jet text-2xl font-bold">2017</h3>
          <div className="hover:bg-ghost-white hover:cursor-pointer">
            <div className="flex items-center gap-6">
              <div className="flex flex-1 items-center gap-6">
                <div className="bg-dark-cornflower-blue flex flex-none items-center justify-center rounded-full py-4 px-4 shadow-2xl">
                  <LinkedIn />
                </div>
                <h4 className="flex-1 underline">CLSA 2017</h4>
              </div>
              <Download />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-jet text-2xl font-bold">2018</h3>
          <div className="hover:bg-ghost-white hover:cursor-pointer">
            <div className="flex items-center gap-6">
              <div className="flex flex-1 items-center gap-6">
                <div className=" bg-dark-cornflower-blue flex flex-none items-center justify-center rounded-full py-4 px-4 shadow-2xl">
                  <LinkedIn />
                </div>
                <h4 className="flex-1 underline">Top Ideas March 8 2018</h4>
              </div>
              <Download />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
