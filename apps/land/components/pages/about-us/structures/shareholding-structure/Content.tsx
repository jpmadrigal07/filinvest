import PageNextPrevButton from "@/components/button/PageNextPrevButton";
import Download from "@/components/svg/Download";
import React from "react";
import Table from "./Table";

const Content = () => {
  return (
    <section className="mb-24 mt-9 flex flex-col gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
      <h2 className="text-jet text-center text-4xl font-bold">
        Shareholding Structure
      </h2>
      <p className="text-dim-gray">
        The names, addresses, citizenship, number of shares held, and percentage
        to total of persons owning more than five percent (5%) of the
        outstanding voting shares of the Company as of 28 February 2022 are as
        follows:
      </p>
      <Table
        header={[
          "Title Of Class Of Securities",
          "Name And Address Of Record Owner/Relationship With FDC",
          "Name Of Beneficial Owner/ Relationship With Record Owner",
          "Citizenship",
          "No. Of Shares Held",
          "Percentage Held",
        ]}
        rows={[
          [
            "Common",
            <span className="flex flex-col gap-3">
              <p>{`A. L. Gotianun, Inc. ("ALGI") (formerly ALG Holdings Corporation) 32nd Floor, Parkway Corporate Center, Corporate Avenue, Filinvest City, Alabang, Muntinlupa City`}</p>
              <p>{`Majority Owner of the Company A. L. Gotianun, Inc. ("ALGI") (formerly ALG Holdings Corporation) 32nd Floor,
                Parkway Corporate Center, Corporate Avenue, Filinvest City, Alabang, Muntinlupa City`}</p>
              <p>Majority Owner of the Company</p>
            </span>,
            "Same as the Record Owner",
            "Filipino",
            <span className="flex flex-col gap-3">
              <p>7,587,823,502 (Direct)</p>
              <p>61,976,540 (Indirect)</p>
            </span>,
            "87.74% (Direct)0. 72% (Indirect)",
          ],
          [
            "Common",
            "PCD Nominee Corporation (Filipino) G/F, Philippine Stock",
            "",
            "Filipino",
            "901,940,68",
            "10.43%",
          ],
        ]}
      />
      <p className="text-dim-gray">
        Except as stated above, the Board of Directors and Management of the
        Company have no knowledge of any person who, as of the date of the
        annual report, was directly or indirectly the beneficial owner of more
        than five percent (5%) of the Company’s outstanding shares or who has
        voting power or investment power with respect to shares comprising more
        than five percent (5%) of the Company’s outstanding common stock.
      </p>
      <p className="text-dim-gray">
        As of 28 February 2022, 38,382,404 or 0.44% of the total outstanding
        voting shares of FDC is owned by foreigners.
      </p>
      <div className="mt-4 flex justify-center">
        <button className="bg-royal-dark-blue border-sonic-silver hover:bg-oxford-blue flex gap-4 border px-12 py-6 text-white focus:shadow-lg">
          <Download color="#ffffff" />
          <span>FDC Shareholding Structure </span>
        </button>
      </div>
      <div className="mt-24 flex">
        <div className="flex-none">
          <PageNextPrevButton
            imgName="investor-relations-program-next-prev.png"
            pageName="Structures"
            isLeft={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
