import React from "react";

const TitleYear = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "board-committees-title-and-year"
  );
  return (
    <div>
      {data.titleLine.map((item: any) => (
        <h2 className="text-jet text-2xl font-bold md:text-3xl lg:text-4xl">
          {item.line}
          <br />
        </h2>
      ))}
      <h4 className="text-jet mt-2 text-base font-bold md:text-xl lg:mt-5 lg:text-2xl">
        For {data.year}
      </h4>
    </div>
  );
};

export default TitleYear;
