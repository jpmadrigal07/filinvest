import PageNextPrevButton from "@/components/button/PageNextPrevButtonOld";
import Image from "next/image";
import React from "react";

const Programs = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "corporate-social-responsibility-programs"
  );
  return (
    <section>
      <div className="bg-ghost-white xl:py-12 2xl:py-24">
        <div className="lg:mx-9 xl:mx-16 2xl:mx-44">
          <h2 className="text-jet text-3xl font-bold">{data.title}</h2>
          <p className="text-dim-gray mt-8">{data.subtitle}</p>
          {data.descriptionParagraphs.map((item: any) => (
            <p className="text-dim-gray mt-8">{item.description}</p>
          ))}
        </div>
        <div className="mt-16 flex gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
          {data.gallery.map((item: any) => (
            <div className="flex-1">
              <Image
                src={`${item.image.url}`}
                width={790}
                height={664}
                alt={item.image.alt}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="my-20 flex">
          <div className="flex-none">
            <PageNextPrevButton
              imgName="investor-relations-program-next-prev.png"
              pageName="Structures"
              isLeft={true}
            />
          </div>
          <div className="grow"></div>
          <div className="flex-none">
            <PageNextPrevButton
              imgName="investor-relations-program-next-prev.png"
              pageName="Investor Relations Program"
              isLeft={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
