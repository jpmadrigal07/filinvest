import React from "react";

const TitleText = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) =>
      item.blockType === "corporate-social-responsibility-title-text"
  );
  return (
    <div className="flex flex-col gap-9 md:px-20">
      <h2 className="text-jet text-5xl font-bold">{data.title}</h2>
      <p className="text-dim-gray text-2xl">{data.description}</p>
    </div>
  );
};

export default TitleText;
