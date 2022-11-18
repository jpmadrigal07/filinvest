import React from "react";

const top20 = [
  {
    shareholder: "Filinvest Development Corporation",
    shares: "15,681,457,022",
    percentage: "64.67%",
  },
  {
    shareholder: "PCD Nominee Corporation (Filipino)",
    shares: "4,593,989,925",
    percentage: "18.94%",
  },
  {
    shareholder: "PCD Nominee Corporation (Non-Filipino)",
    shares: "3,373,331,093",
    percentage: "13.91%",
  },
  {
    shareholder: "PGI Retirement Fund Inc.",
    shares: "115,281,500",
    percentage: "00.48%",
  },
  {
    shareholder: "Philippines International Life Insurance Co. Inc",
    shares: "60,000,000",
    percentage: "00.25%",
  },
  {
    shareholder: "Josefina Multi-Ventures Corporation",
    shares: "54,809,000",
    percentage: "00.23%",
  },
  {
    shareholder: "Pryce Corporation",
    shares: "50,802,000",
    percentage: "00.21%",
  },
  {
    shareholder: "Don Manuel Investments Corporation",
    shares: "47,918,000",
    percentage: "00.20%",
  },
  {
    shareholder: "F. Yap Securities, Inc.",
    shares: "32,000,000",
    percentage: "00.13%",
  },
  {
    shareholder: "Michael Gotianun",
    shares: "11,235,913",
    percentage: "00.05%",
  },
  {
    shareholder: "Lucio W. Yan &/or Clara Y. Yan",
    shares: "10,687,500",
    percentage: "00.04%",
  },
  {
    shareholder: "Joseph M. Yap &/or Josephine G. Yap",
    shares: "7,694,843",
    percentage: "00.03%",
  },
  {
    shareholder: "Joseph M. Yap",
    shares: "6,444,115",
    percentage: "00.03%",
  },
  {
    shareholder: "Hinundayan Holdings Corporation",
    shares: "5,100,000",
    percentage: "00.02%",
  },
  {
    shareholder: "Executive Optical, Inc.",
    shares: "5,040,647",
    percentage: "00.02%",
  },
  {
    shareholder:
      "Berck Y. Cheng or Alving Y. Cheng or Diana Y. Cheng or Cheryl Y. Cheng",
    shares: "5,000,000",
    percentage: "00.02%",
  },
  {
    shareholder: "Jonathan Dee Co",
    shares: "5,000,000",
    percentage: "00.02%",
  },
  {
    shareholder: "R Magdalena Bosch",
    shares: "4,877,928",
    percentage: "00.02%",
  },
  {
    shareholder: "Veronica P. Fernandez",
    shares: "4,064,940",
    percentage: "00.02%",
  },
  {
    shareholder: "Luis L. Fernandez",
    shares: "4,064,940",
    percentage: "00.02%",
  },
];

const Content = () => {
  return (
    <section className="mx-3 mt-16 mb-28 flex flex-col gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
      <div>
        <h2 className="text-jet text-center text-4xl font-bold">
          Share Information
        </h2>
      </div>
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
                  {top20.map((item, index) => (
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
