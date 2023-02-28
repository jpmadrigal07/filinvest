import React from "react";

const TitleText = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "dreams-built-green-title-text"
  );
  return (
    <div className="mx-6 mt-24 mb-24 flex flex-col gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
      <h3 className="text-jet text-3xl font-bold">{data.title}</h3>
      {data.descriptionParagraph.map((item: any) => (
        <p className="text-dim-gray">{item.description}</p>
      ))}
    </div>
  );
};

export default TitleText;
