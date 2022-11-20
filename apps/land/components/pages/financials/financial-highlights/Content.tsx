import Image from "next/image";
import React from "react";
import Table from "./Table";
import Download from "@/components/svg/Download";
import LinkedIn from "@/components/svg/LinkedIn";

const Content = () => {
  return (
    <section className="mx-3 mt-16 mb-28 flex flex-col gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
      <div>
        <h4 className="text-dark-cornflower-blue text-center font-bold">
          Operating Results
        </h4>
        <h2 className="text-jet text-center text-4xl font-bold">
          FILINVEST LAND, INC. and SUBSIDIARIES
        </h2>
        <h4 className="text-dim-gray mt-9 text-center">
          (Amounts in Thousands of Pesos, Except Per Share Data)
        </h4>
      </div>
      <Table
        header={["Operating Results", "2021", "2020", "2019", "2018", "2017"]}
        rows={[
          [
            "Revenues",
            "17,738,919",
            "18,626,383*",
            "25,673,310*",
            "22,205,185",
            "20,269,651",
          ],
          [
            "Net Income**",
            "4,305,228",
            "3,957,750",
            "6,519,800",
            "6,075,873",
            "5,834,181",
          ],
          [
            "Net Income Attributable to Parent",
            "3,803,377",
            "3,733,443",
            "6,283,634",
            "5,894,408",
            "5,685,394",
          ],
          [
            "Return on Assets (Average)",
            "2.30%",
            "2.23%",
            "3.92%",
            "4.00%",
            "9.29%",
          ],
          [
            "Return on Equity (Average)",
            "5.24%",
            "5.40%",
            "9.35%",
            "9.29%",
            "9.49%",
          ],
        ]}
      />
      <div className="mt-9">
        <h4 className="text-dark-cornflower-blue text-center font-bold">
          Per Share Data
        </h4>
        <h2 className="text-jet text-center text-4xl font-bold">
          FILINVEST LAND, INC. and SUBSIDIARIES
        </h2>
        <h4 className="text-dim-gray mt-9 text-center">
          (Amounts in Thousands of Pesos, Except Per Share Data)
        </h4>
      </div>
      <Table
        header={["Per Share Data", "2021", "2020", "2019", "2018", "2017"]}
        rows={[
          [
            "Total Assets",
            "193,233,531",
            "181,005,146",
            "173,696,431",
            "158,860,483",
            "145,121,919",
          ],
          [
            "Total interest-bearing debt",
            "68,471,666",
            "69,768,551",
            "63,412,920",
            "59,782,739",
            "58,084,201",
          ],
          [
            "Stockholders Equity",
            "89,790,225",
            "74,378,943",
            "72,164,293",
            "67,271,622",
            "63,501,043",
          ],
          [
            "No. of Shares Issued and Outstanding (000's)",
            "24,249,759",
            "24,249,759",
            "24,249,759",
            "24,249,759",
            "24,249,759",
          ],
          [
            "Debt to Equity ***",
            "76.26%",
            "93.80%",
            "87.87%",
            "88.87%",
            "91.47%",
          ],
          [
            "Net Debt to Equity ****",
            "65.5%",
            "84.8%",
            "81.26",
            "79.32%",
            "79.54%",
          ],
        ]}
      />
      <div className="mt-9">
        <h4 className="text-dark-cornflower-blue text-center font-bold">
          Per Share Data
        </h4>
        <h2 className="text-jet text-center text-4xl font-bold">
          FILINVEST LAND, INC. and SUBSIDIARIES
        </h2>
        <h4 className="text-dim-gray mt-9 text-center">
          (Amounts in Thousands of Pesos, Except Per Share Data)
        </h4>
      </div>
      <Table
        header={["Per Share Data", "2021", "2020", "2019", "2018", "2017"]}
        rows={[
          [
            "Primary/Fully Diluted Earnings",
            "Php 0.16",
            "Php 0.15",
            "Php 0.26",
            "Php 0.24",
            "Php 0.23",
          ],
        ]}
      />
      <div className="mt-9">
        <h4 className="text-dark-cornflower-blue text-center font-bold">
          Dividends
        </h4>
        <h2 className="text-jet text-center text-4xl font-bold">
          FILINVEST LAND, INC. and SUBSIDIARIES
        </h2>
        <h4 className="text-dim-gray mt-9 text-center">
          (Amounts in Thousands of Pesos, Except Per Share Data)
        </h4>
      </div>
      <Table
        header={["Per Share Data", "2021", "2020", "2019", "2018", "2017"]}
        rows={[
          [
            "Dividends per share",
            "0.031",
            "0.0648",
            "0.0619",
            "0.0618",
            "0.0613",
          ],
          ["Dividend payout rate", "20%", "25%", "25%", "26%", "29%"],
        ]}
      />
      <div className="mt-9 flex gap-9">
        <div className="flex flex-col">
          <span className="text-dim-gray">*</span>
          <span className="text-dim-gray">**</span>
          <span className="text-dim-gray">***</span>
          <span className="text-dim-gray">****</span>
        </div>
        <div className="flex flex-col">
          <span className="text-dim-gray">figures restated</span>
          <span className="text-dim-gray">
            includes equity in net earnings of an associate
          </span>
          <span className="text-dim-gray">
            computed as the sum of consolidated loans and bonds payable divided
            by stockholders equity
          </span>
          <span className="text-dim-gray">
            computed as the sum of consolidated loans and bonds payable less
            cash divided by stockholders equity
          </span>
        </div>
      </div>
      <div className="border-dark-cornflower-blue flex w-full justify-center border-y-[1px] py-9">
        <Image
          src={`/financial-highlights-graph.png`}
          width={969}
          height={627}
          alt="Picture of the author"
        />
      </div>
      <div className="mt-9 flex flex-col gap-6">
        <h3 className="text-jet text-2xl font-bold">
          2021 Audited Financial Statements
        </h3>
        <div className="hover:bg-ghost-white hover:cursor-pointer">
          <div className="flex items-center gap-6">
            <div className="flex flex-1 items-center gap-6">
              <div className="bg-dark-cornflower-blue flex flex-none items-center justify-center rounded-full py-6 px-6 shadow-2xl">
                <LinkedIn />
              </div>
              <h4 className="flex-1 underline">
                2021 Audited Financial Statements
              </h4>
            </div>
            <Download />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
