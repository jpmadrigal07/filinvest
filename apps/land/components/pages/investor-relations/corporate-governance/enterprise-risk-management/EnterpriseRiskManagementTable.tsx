import PageNextPrevButton from "@/components/button/PageNextPrevButton";
import React from "react";

const EnterpriseRiskManagementTable = ({ content }: any) => {
  const RISK_DATA = content.content[0].riskManagementTable.map((item: any) => {
    return {
      riskExposure: item.riskExposure,
      riskPolicy: item.riskPolicy,
      objective: item.riskObjective,
    };
  });
  return (
    <section className="mt-16 mb-28 flex flex-col gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
      <div className="flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
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
                  {RISK_DATA.map((item: any, index: any) => (
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

export default EnterpriseRiskManagementTable;
