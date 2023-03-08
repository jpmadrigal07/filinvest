import Image from "next/image";
import React from "react";
import BorderButton from "../../../button/BorderButton";

const SubsidiariesSection = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "subsidiaries-companies"
  );
  return (
    <section className="mt-16 mb-28 flex flex-col gap-6">
      <div className="mx-6 grid gap-6 md:grid-cols-2 lg:mx-9 lg:grid-cols-3 xl:mx-16 2xl:mx-44">
        {data.subsidiariesCompanies.map((item: any, index: number) => (
          <div
            className="bg-ghost-white flex flex-col gap-10 px-7 pt-6 pb-12"
            key={index}
          >
            <div className="inline-flex h-[112px] w-[112px] overflow-hidden rounded-full bg-white">
              <Image
                className="relative object-cover"
                src={`${item.companyLogo.url}`}
                width={112}
                height={112}
                alt={item.companyLogo.alt}
              />
            </div>
            <div>
              <h3 className="text-jet text-4xl font-bold">
                {item.companyName}
              </h3>
              <p className="text-dim-gray mt-2">{item.companyDescription}</p>
            </div>
            <div>
              <button type="button">
                <BorderButton
                  buttonText="Learn More"
                  textColor="dark-cornflower-blue"
                  borderColor="dark-cornflower-blue"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubsidiariesSection;
