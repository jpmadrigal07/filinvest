import React from "react";
import BoardCommittees from "./BoardCommittees";
import KeyOfficers from "./KeyOfficers";
import SeniorManagementOfficers from "./SeniorManagementOfficers";
import TitleYear from "./TitleYear";

const Members = ({ content }: any) => {
  return (
    <div>
      <TitleYear content={content} />
      <div className="mt-12">
        <SeniorManagementOfficers content={content} />
      </div>
      <div className="mt-12">
        <BoardCommittees content={content} />
      </div>
      <div className="mt-12">
        <KeyOfficers content={content} />
      </div>
    </div>
  );
};

export default Members;
