import React from "react";
import Table from "./Table";

const BoardCommittees = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "board-committees-board-committees"
  );
  const flatBoardCommittees = data.rowData.map((item: any) => {
    return [item.committees, item.name, item.position];
  });
  return (
    <div>
      <div className="mt-12">
        <h4 className="text-jet text-2xl font-bold">{data.tableTitle}</h4>
        <div className="mt-9">
          <Table
            header={["Committees", "Name", "Position"]}
            rows={flatBoardCommittees}
          />
        </div>
      </div>
    </div>
  );
};

export default BoardCommittees;
