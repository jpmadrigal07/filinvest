import React from "react";

const TitleYear = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "board-committees-title-and-year"
  );
  return (
    <div>
      {data.titleLine.map((item: any) => (
        <h2 className="text-jet text-4xl font-bold">
          {item.line}
          <br />
        </h2>
      ))}
      <h4 className="text-jet mt-6 text-2xl font-bold">For {data.year}</h4>
    </div>
  );
};

export default TitleYear;
