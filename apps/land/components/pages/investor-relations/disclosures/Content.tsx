import ChevronDown from "@/components/svg/ChevronDown";
import Download from "@/components/svg/Download";
import Pdf from "@/components/svg/Pdf";
import Search from "@/components/svg/Search";
import React from "react";
import Table from "./Table";

const Content = () => {
  return (
    <section className="-mt-24 flex flex-col gap-9 lg:mx-9 xl:mx-16 2xl:mx-44 2xl:-mt-32">
      <div className="bg-dark-cornflower-blue mx-16 flex items-center gap-8 px-10 py-6">
        <div className="w-full flex-1">
          <h3 className="text-white">Disclosures</h3>
          <div className="border-silver-chalice flex items-center gap-3 border-b-[1px] py-2 hover:cursor-pointer">
            <input
              type="email"
              placeholder="All"
              className="ring-none w-full border-none bg-transparent text-white hover:cursor-pointer"
            />
            <ChevronDown />
          </div>
        </div>
        <div className="w-full flex-1">
          <h3 className="text-white">Year</h3>
          <div className="border-silver-chalice flex items-center gap-3 border-b-[1px] py-2 hover:cursor-pointer">
            <input
              type="email"
              placeholder="All"
              className="ring-none w-full border-none bg-transparent text-white hover:cursor-pointer"
            />
            <ChevronDown />
          </div>
        </div>
        <div className="flex-none">
          <button className="hover:bg-platinum focus:bg-platinum delay-50 bg-white py-5 px-8 transition">
            <div className="text-dark-cornflower-blue flex items-center gap-2 font-bold">
              <Search /> Search
            </div>
          </button>
        </div>
      </div>
      <div className="mb-6">
        <Table
          header={["Date", "Name", "Category", "Download"]}
          rows={[
            [
              "May 25,2022",
              <span className="flex items-center gap-2">
                <Pdf />
                <span>General Information Sheet 2022</span>
              </span>,
              "Other Disclosures",
              <span className="flex justify-center">
                <Download />
              </span>,
            ],
            [
              "May 18,2022",
              <span className="flex items-center gap-2">
                <Pdf />
                <span>
                  Notice of Analysts’ Briefing-FLI Participation in the PSE STAR
                  Investor Day
                </span>
              </span>,
              "17C Current Reports",
              <span className="flex justify-center">
                <Download />
              </span>,
            ],
            [
              "May 16,2022",
              "Filinvest Land residential business grows 9% in 1Q 2022",
              "17C Current Reports",
              <span className="flex justify-center">
                <Download />
              </span>,
            ],
            [
              "May 13,2022",
              "Certificate of Qualification of Independent Directors 2022",
              "Disclosure",
              <span className="flex justify-center">
                <Download />
              </span>,
            ],
            [
              "April 30,2022",
              "Foreign Ownership Report as of April 30, 2022",
              "Reports on Shareholders/Ownership",
              <span className="flex justify-center">
                <Download />
              </span>,
            ],
            [
              "April 30,2022",
              "Board Lot Report as of April 30, 2022",
              "Reports on Shareholders/Ownership",
              <span className="flex justify-center">
                <Download />
              </span>,
            ],
            [
              "April 29,2022",
              "SEC-Form 23-B (VRB)",
              "23-A/B Initial Statements of Beneficial Ownership of Securities and Statement",
              <span className="flex justify-center">
                <Download />
              </span>,
            ],
            [
              "April 22,2022",
              "Notice of Analysts’ Briefing-FLI Participation in the PSE STAR Investor Day",
              "17C Current Reports",
              <span className="flex justify-center">
                <Download />
              </span>,
            ],
            [
              "April 22,2022",
              "Filinvest Land Looks Forward to Further Growth",
              "17C Current Reports",
              <span className="flex justify-center">
                <Download />
              </span>,
            ],
            [
              "April 22,2022",
              "Result of Board Meeting Declaration of Cash Dividends",
              "17C Current Reports",
              <span className="flex justify-center">
                <Download />
              </span>,
            ],
            [
              "April 22,2022",
              "Minutes of Annual Stockholders' Meeting 2022",
              "Minutes of All General or Special Stockholders’ Meetings",
              <span className="flex justify-center">
                <Download />
              </span>,
            ],
            [
              "April 22,2022",
              "Result of Organizational Meeting",
              "17C Current Reports",
              <span className="flex justify-center">
                <Download />
              </span>,
            ],
            [
              "April 22,2022",
              "Result of Annual Stockholders Meeting",
              "17C Current Reports",
              <span className="flex justify-center">
                <Download />
              </span>,
            ],
            [
              "April 19,2022",
              "17-A_Annual Report as of December 31, 2021",
              "17A Annual Reports",
              <span className="flex justify-center">
                <Download />
              </span>,
            ],
            [
              "April 19,2022",
              "2022 First Quarter Progress Report on the Use of Proceeds from the Initial Public",
              "Disclosure",
              <span className="flex justify-center">
                <Download />
              </span>,
            ],
            [
              "April 11,2022",
              "Result of the Special Meeting of the Board of Directors held on April 11, 2022 (Board approval of 3rd tranche bonds)",
              "17C Current Reports",
              <span className="flex justify-center">
                <Download />
              </span>,
            ],
            [
              "April 06,2022",
              "Notice of Analysts’ Briefing on Financial Results for the Full Year 2021",
              "Announcement of Analysts’ Briefings",
              <span className="flex justify-center">
                <Download />
              </span>,
            ],
            [
              "April 05,2022",
              "Press Release - ENGIE and Filinvest partners to bring renewable energy to New Clark City and Ciudad de Calamba",
              "17C Current Reports",
              <span className="flex justify-center">
                <Download />
              </span>,
            ],
            [
              "April 01,2022",
              "Resignation of Ms. Cesarine Janette B. Cordero",
              "17C Current Reports",
              <span className="flex justify-center">
                <Download />
              </span>,
            ],
            [
              "March 31,2022",
              "QUARTERLY REPORT (17Q) AS OF MARCH 31, 2022",
              "17Q Quarterly Reports",
              <span className="flex justify-center">
                <Download />
              </span>,
            ],
            [
              "March 31,2022",
              "Foreign Ownership Report as of March 31, 2022",
              "Reports on Shareholders/Ownership",
              <span className="flex justify-center">
                <Download />
              </span>,
            ],
            [
              "March 31,2022",
              "Public Ownership as of March 31, 2022",
              "Reports on Shareholders/Ownership",
              <span className="flex justify-center">
                <Download />
              </span>,
            ],
          ]}
        />
      </div>
      <div className="mb-24 flex justify-center gap-4">
        <div className="bg-dark-cornflower-blue px-3 py-[5px] text-white">
          1
        </div>
        <div className="border-dark-cornflower-blue text-jet border-[1px] px-3 py-[5px]">
          2
        </div>
        <div className="border-dark-cornflower-blue text-jet border-[1px] px-3 py-[5px]">
          3
        </div>
        <div className="border-dark-cornflower-blue text-jet border-[1px] px-3 py-[5px]">
          4
        </div>
        <div className="border-dark-cornflower-blue text-jet border-[1px] px-3 py-[5px]">
          5
        </div>
        <div className="border-dark-cornflower-blue text-jet border-[1px] px-3 py-[5px]">
          6
        </div>
      </div>
    </section>
  );
};

export default Content;
