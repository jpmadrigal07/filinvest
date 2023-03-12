import React from "react";
import Table from "./Table";

const KeyOfficers = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "board-committees-key-officers"
  );
  const flatKeyCommittees = data.rowData.map((item: any) => {
    return [item.name, item.position];
  });
  return (
    <div>
      <div className="mt-5 lg:mt-10">
        <h4 className="text-jet text-2xl font-bold lg:text-3xl">
          {data.tableTitle}
        </h4>
        <div className="mt-5 lg:w-3/4">
          <Table header={["Name", "Position"]} rows={flatKeyCommittees} />
        </div>
      </div>
    </div>
  );
};

export default KeyOfficers;
