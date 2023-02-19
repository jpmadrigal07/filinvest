import React from "react";

const TitleText = ({ content }: any) => {
  return (
    <section>
      <div className="mt-16 mb-28 flex flex-col gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div>
          <h2 className="text-jet text-4xl font-bold">
            {content.content[0].title}
          </h2>
          <p className="text-dim-gray mt-8">{content.content[0].description}</p>
        </div>
      </div>
    </section>
  );
};

export default TitleText;
