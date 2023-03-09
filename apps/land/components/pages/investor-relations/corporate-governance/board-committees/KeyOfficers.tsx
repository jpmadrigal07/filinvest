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
      <div className="mt-12">
        <h4 className="text-jet text-2xl font-bold">{data.tableTitle}</h4>
        <div className="mt-9">
          <Table header={["Name", "Position"]} rows={flatKeyCommittees} />
        </div>
      </div>
    </div>
  );
};

export default KeyOfficers;
