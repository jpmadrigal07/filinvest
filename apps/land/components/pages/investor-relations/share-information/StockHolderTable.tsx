import React from "react";

export default function StockHolderTable({ content }: any) {
  const StockHolderTableSection = content?.content.find(
    (item: any) => item.blockType === "stock-information-stock-holder-table"
  );

  const rowData = StockHolderTableSection.rowData;
  const tableTitle = StockHolderTableSection.tableTitle;
  const tableSubTitle = StockHolderTableSection.tableSubTitle;
  const tableDescription = StockHolderTableSection.tableDescription;
  const tableFooter = StockHolderTableSection.tableFooter;

  return (
    <>
      <div className="mt-12">
        <p className="text-dark-cornflower-blue m-0 text-center font-bold">
          {tableSubTitle}
        </p>
        <h2 className="text-jet text-center text-4xl font-bold">
          {tableTitle}
        </h2>
      </div>
      <h3 className="text-dim-gray mx-24 text-center text-lg">
        {tableDescription}
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
                  {rowData.map((item: any, index: number) => (
                    <tr key={index} className="divide-x divide-gray-200">
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                        {item.shareholder}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        {item.numberOfSharesHeld}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        {item.toTotalOutstanding}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-dim-gray mx-24 text-center text-lg">{tableFooter}</h3>
    </>
  );
}
