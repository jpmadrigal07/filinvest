import React from "react";
import Image from "next/image";
export default function InvestorRelationsProgramBlock({ content }: any) {
  const block = content?.content.find(
    (item: any) => item.blockType === "investor-relations-programs-programs"
  );
  const imageBlock = content?.content.find(
    (item: any) => item.blockType === "investor-relations-programs-image"
  );
  return (
    <section className="">
      <div className="mx-3 lg:mx-9 xl:mx-16 2xl:mx-44">
        <p className="text-dim-gray mt-8 px-6">{block?.description}</p>
      </div>
      <div className="mx-3 mt-16 flex flex-col justify-center gap-12 px-6 lg:mx-9 xl:mx-16 2xl:mx-44">
        {block?.programs?.map((program: any) => (
          <div className="xs:items-start flex flex-col items-center justify-center gap-8 md:flex-row">
            <div className="flex h-[82px] w-[82px] flex-none items-center justify-center rounded-full shadow-2xl">
              <Image
                className="mx-auto h-full w-full"
                src={program?.icon?.url}
                width={82}
                height={82}
                alt={program?.icon?.alt}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-jet text-4xl font-bold">{program?.title}</h3>
              <p className="text-dim-gray mt-5">{program?.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full">
        <Image
          src={imageBlock?.image?.url}
          width={2018}
          height={1340}
          alt={imageBlock?.image?.alt}
        />
      </div>
    </section>
  );
}
