import React from "react";
import { TOP_20_SHAREHOLDERS } from "../constants";
import Stocks from "./Stocks";

const Content = () => {
  return (
    <section className="mx-3 mt-16 mb-28 flex flex-col gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
      <div>
        <h2 className="text-jet text-center text-4xl font-bold">
          Share Information
        </h2>
      </div>
      <Stocks />
      <div className="mx-16 mt-4 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-dark-cornflower-blue">
                  <tr className="divide-x divide-gray-200 text-center">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 font-semibold text-white sm:pl-6"
                    >
                      Outstanding number of shares
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 font-semibold text-white sm:pl-6"
                    >
                      2021 EPS Attributable to Parent Equity Holders
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 font-semibold text-white sm:pl-6"
                    >
                      Dividend declared
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr className="divide-x divide-gray-200 text-center">
                    <td className="whitespace-nowrap py-4 pl-4 pr-4 font-medium text-gray-900 sm:pl-6">
                      24,249,759,506
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-gray-900 marker:font-medium sm:pl-6">
                      0.16
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-4 font-medium text-gray-900 sm:pl-6">
                      P0.047
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-dim-gray mx-24 text-center text-lg">
        On 28 February 2022, FLI’s shares closed at the price of Php1.10 per
        share. The number of shareholders of record as of said date was 5,629.
        Common shares outstanding as of 28 February 2022 is 24,249,759,506.
      </h3>
      <div className="mt-12">
        <p className="text-dark-cornflower-blue m-0 text-center font-bold">
          The Top 20
        </p>
        <h2 className="text-jet text-center text-4xl font-bold">
          Stockholders
        </h2>
      </div>
      <h3 className="text-dim-gray mx-24 text-center text-lg">
        Stockholders of FLI’s common shares as of 28 February 2022 are as
        follows:
      </h3>
      <div className="mx-16 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-dark-cornflower-blue">
                  <tr className="divide-x divide-gray-200">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-white sm:pl-6"
                    >
                      Shareholder
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-white"
                    >
                      No. of Shares Held
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-white"
                    >
                      % to Total Outstanding
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {TOP_20_SHAREHOLDERS.map((item, index) => (
                    <tr key={index} className="divide-x divide-gray-200">
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                        {item.shareholder}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        {item.shares}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        {item.percentage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-dim-gray mx-24 text-center text-lg">
        Filinvest Development Corporation holds 8,000,000,000 preferred shares.
      </h3>
    </section>
  );
};

export default Content;
