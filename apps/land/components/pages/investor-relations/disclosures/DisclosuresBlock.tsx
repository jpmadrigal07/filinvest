"use client";
import React, { useState, useEffect } from "react";
import Table from "./Table";
import Search from "@/components/svg/Search";
import MainDropdown from "@/components/dropdown/MainDropdown";
import Download from "@/components/svg/Download";
import Pdf from "@/components/svg/Pdf";
import Link from "next/link";
import moment from "moment";

export default function DisclosuresBlock({ content }: any) {
  const disclosuresTableBlock = content?.content?.find(
    (item: any) => item.blockType === "disclosures-table"
  );

  const [disclosures, setDisclosures] = useState<any>([]);
  const [years, setYears] = useState<any>([]);
  const [disclosuresFilter, setDisclosuresFilter] = useState("All");
  const [yearFilter, setYearFilter] = useState("All");
  const [rowData, setRowData] = useState(disclosuresTableBlock?.rowData);

  const rows = Object.values(rowData.map((r: any) => Object.values(r)));

  let finalRows = rows.map((row: any) => row);

  finalRows = finalRows.map((val: any) => {
    val.pop();
    let r = val.map((item: any, index: number) => {
      switch (index) {
        case 0:
          return moment(item).format("MMM DD,YYYY");
        case 1:
          return (
            <span className="flex items-center gap-2">
              <Pdf />
              <span className="flex max-w-[450px]">{item}</span>
            </span>
          );
        case 2:
          return (
            <span className="flex max-w-[270px] text-justify">
              {String(item)}
            </span>
          );
        case 3:
          return (
            <span className="flex cursor-pointer justify-center">
              <Link
                className="transition hover:opacity-50"
                target="_blank"
                href={item}
              >
                <Download />
              </Link>
            </span>
          );
        default:
          return "";
      }
    });
    return r;
  });

  const handleSearch = () => {
    if (disclosuresFilter == "All") {
      setRowData(disclosuresTableBlock?.rowData);
      return;
    } else {
      const filteredData = disclosuresTableBlock?.rowData.filter(
        (item: any) => item?.category == disclosuresFilter
      );
      setRowData(filteredData);
    }
  };

  useEffect(() => {
    const listYears = rowData.map((r: any) => moment(r?.date).format("YYYY"));
    const listDisclosures = rowData.map((r: any) => r?.category);
    const uniqueYears = [
      "All",
      ...Array.from(new Set(listYears)).sort(
        (a: any, b: any) => parseInt(a) - parseInt(b)
      ),
    ];
    const uniqueDisclosures = [
      "All",
      ...Array.from(new Set(listDisclosures)).sort((a: any, b: any) =>
        a.localeCompare(b)
      ),
    ];

    setDisclosures(uniqueDisclosures);
    setYears(uniqueYears);
  }, []);

  return (
    <section className="z-[999] -mt-24 flex flex-col gap-9 lg:mx-9 xl:mx-16 2xl:mx-44 2xl:-mt-32">
      <div className="bg-dark-cornflower-blue z-10 mx-16 flex items-center gap-8 px-10 py-6">
        <div className="w-full flex-1">
          <h3 className="text-white">Disclosures</h3>
          <MainDropdown
            values={disclosures}
            defaultValue={disclosuresFilter}
            onValueChange={setDisclosuresFilter}
          />
        </div>
        <div className="w-full flex-1">
          <h3 className="text-white">Year</h3>
          <MainDropdown
            values={years}
            defaultValue={yearFilter}
            onValueChange={setYearFilter}
          />
        </div>
        <div className="flex-none">
          <button
            onClick={() => {
              handleSearch();
            }}
            className="hover:bg-platinum focus:bg-platinum delay-50 bg-white py-5 px-8 transition"
          >
            <div className="text-dark-cornflower-blue flex items-center gap-2 font-bold">
              <Search /> Search
            </div>
          </button>
        </div>
      </div>
      <div className="mb-6">
        <Table
          header={["Date", "Name", "Category", "Download"]}
          rows={finalRows}
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
}
