import React from "react";
import Table from "./Table";

const SeniorManagementOfficers = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) =>
      item.blockType === "board-committees-senior-management-officers"
  );
  const flatSeniorManagementOfficer = data.rowData.map((item: any) => {
    return [item.committees, item.name];
  });
  return (
    <div>
      <div className="mt-12">
        <h4 className="text-jet text-2xl font-bold">{data.tableTitle}</h4>
        <div className="mt-9">
          <Table
            header={["Committees", "Name"]}
            rows={flatSeniorManagementOfficer}
          />
        </div>
      </div>
    </div>
  );
};

export default SeniorManagementOfficers;
