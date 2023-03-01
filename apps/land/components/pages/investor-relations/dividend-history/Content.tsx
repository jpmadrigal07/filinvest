import React from "react";
import Image from "next/image";
import { TABLE_TITLE_DIVIDENDS, TABLE_VALUES_DIVIDENDS } from "../constants";

const Content = () => {
  return (
    <section className="mx-3 mt-16 mb-28 flex flex-col gap-9 px-6 lg:mx-9 xl:mx-16 2xl:mx-44">
      <div>
        <p className="text-dark-cornflower-blue m-0 text-center font-bold">
          PHP per share
        </p>
        <h2 className="text-jet text-center text-4xl font-bold">Dividends</h2>
      </div>
      <h3 className="text-dim-gray text-center text-xl">
        2022 Dividends to be paid on June 2, 2022 to shareholders as of record
        May 11, 2022.
      </h3>
      <div className="mx-0 lg:mx-32">
        <Image
          src={`/graph-share-information.png`}
          width={2998}
          height={1822}
          alt="Picture of the author"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-dark-cornflower-blue">
                  <tr className="divide-x divide-gray-200">
                    {TABLE_TITLE_DIVIDENDS.map((header, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="py-3.5 pl-4 pr-4 text-left text-lg font-semibold text-white sm:pl-6"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr className="divide-x divide-gray-200">
                    {TABLE_VALUES_DIVIDENDS.map((dividend, index) => {
                      if (index === 0) {
                        return (
                          <td
                            key={index}
                            className="bg-alice-blue whitespace-nowrap py-4 pl-4 pr-4 text-lg font-medium text-gray-900 sm:pl-6"
                          >
                            {dividend}
                          </td>
                        );
                      } else if (index === 9) {
                        return (
                          <td
                            key={index}
                            className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl font-medium text-gray-900 sm:pl-6"
                          >
                            {dividend}
                          </td>
                        );
                      } else {
                        return (
                          <td
                            key={index}
                            className="whitespace-nowrap py-4 pl-4 pr-4 text-lg font-medium text-gray-900 sm:pl-6"
                          >
                            {dividend}
                          </td>
                        );
                      }
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
