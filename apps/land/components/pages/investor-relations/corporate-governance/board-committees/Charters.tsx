import React from "react";
import Download from "@/components/svg/Download";
import LinkedIn from "@/components/svg/LinkedIn";

const Charters = () => {
  return (
    <div className="flex-1">
      <div className="mt-4 flex flex-col gap-6">
        <h3 className="text-jet text-2xl font-bold">2020</h3>
        <div className="hover:bg-ghost-white hover:cursor-pointer">
          <div className="flex items-center gap-6">
            <div className="flex flex-1 items-center gap-6">
              <div className="bg-dark-cornflower-blue flex flex-none items-center justify-center rounded-full py-6 px-6 shadow-2xl">
                <LinkedIn />
              </div>
              <h4 className="flex-1 underline">
                Corporate Governance Committee Charter
              </h4>
            </div>
            <Download />
          </div>
        </div>
        <div className="hover:bg-ghost-white hover:cursor-pointer">
          <div className="flex items-center gap-6">
            <div className="flex flex-1 items-center gap-6">
              <div className="bg-dark-cornflower-blue flex flex-none items-center justify-center rounded-full py-6 px-6 shadow-2xl">
                <LinkedIn />
              </div>
              <h4 className="flex-1 underline">
                Related Party Transaction Committee Charter
              </h4>
            </div>
            <Download />
          </div>
        </div>
        <div className="hover:bg-ghost-white hover:cursor-pointer">
          <div className="flex items-center gap-6">
            <div className="flex flex-1 items-center gap-6">
              <div className="bg-dark-cornflower-blue flex flex-none items-center justify-center rounded-full py-6 px-6 shadow-2xl">
                <LinkedIn />
              </div>
              <h4 className="flex-1 underline">
                FLI Result of Board Meeting Declaration of Cash Dividends as of
                June 11, 2020
              </h4>
            </div>
            <Download />
          </div>
        </div>
        <h3 className="text-jet mt-16 text-2xl font-bold">2014</h3>
        <div className="hover:bg-ghost-white hover:cursor-pointer">
          <div className="flex items-center gap-6">
            <div className="flex flex-1 items-center gap-6">
              <div className="bg-dark-cornflower-blue flex flex-none items-center justify-center rounded-full py-6 px-6 shadow-2xl">
                <LinkedIn />
              </div>
              <h4 className="flex-1 underline">Nomination Committee Charter</h4>
            </div>
            <Download />
          </div>
        </div>
        <div className="hover:bg-ghost-white hover:cursor-pointer">
          <div className="flex items-center gap-6">
            <div className="flex flex-1 items-center gap-6">
              <div className="bg-dark-cornflower-blue flex flex-none items-center justify-center rounded-full py-6 px-6 shadow-2xl">
                <LinkedIn />
              </div>
              <h4 className="flex-1 underline">Audit Committee Charter</h4>
            </div>
            <Download />
          </div>
        </div>
        <div className="hover:bg-ghost-white hover:cursor-pointer">
          <div className="flex items-center gap-6">
            <div className="flex flex-1 items-center gap-6">
              <div className="bg-dark-cornflower-blue flex flex-none items-center justify-center rounded-full py-6 px-6 shadow-2xl">
                <LinkedIn />
              </div>
              <h4 className="flex-1 underline">
                Refer to Revised Manual on Corporate Governance.
              </h4>
            </div>
            <Download />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charters;
