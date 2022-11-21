import PageNextPrevButton from "@/components/button/PageNextPrevButton";
import React from "react";

const Content = () => {
  const RISK_DATA = [
    {
      riskExposure: "Liquidity Risk",
      riskPolicy:
        "To cover its financing requirements, the Company uses internally-generated funds and available long-term and short-term credit facilities. The company and its group regularly evaluate their projected and actual cash flows. They also continuously assess conditions in the financial markets for opportunities to pursue fundraising activities in case any requirements arise.",
      objective:
        "The Group seeks to manage its liquidity profile to be able to finance capital expenditures and service maturing debts.",
    },
    {
      riskExposure: "Credit Risk",
      riskPolicy:
        "Credit risk is managed since the titles of the properties sold are retained by the Company/Group until installment receivables are sufficient to cover the installment contract receivable. It is the Company/Group’s policy that buyers who wish to avail the in-house financing scheme be subjected to credit verification procedures. Receivable balances are being monitored on a regular basis and subjected to appropriate actions to manage credit risk.",
      objective: "To avoid financial loss.",
    },
    {
      riskExposure: "Interest Rate Risk",
      riskPolicy:
        "The Company/Group renegotiates the interest rates for certain long-term debts to convert them from fixed-rate debt to floating-rate debt as the Company/Group believes that the current interest rate environment makes it more favorable to carry floating-rate debt.",
      objective: "To provide a certain degree of certainty about costs.",
    },
  ];
  return (
    <section className="mt-16 mb-28 flex flex-col gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
      <div className="flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-dark-cornflower-blue">
                  <tr className="divide-x divide-gray-200 text-center">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-lg font-semibold text-white sm:pl-6"
                    >
                      Risk Exposure
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-lg font-semibold text-white"
                    >
                      Risk Management Policy
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-lg font-semibold text-white"
                    >
                      Objectives
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {RISK_DATA.map((item, index) => (
                    <tr key={index} className="divide-x divide-gray-200">
                      <td className="py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                        {item.riskExposure}
                      </td>
                      <td className="p-4 text-sm text-gray-500">
                        {item.riskPolicy}
                      </td>
                      <td className="p-4 text-sm text-gray-500">
                        {item.objective}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex">
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
