import BorderButton from "@/components/button/BorderButton";
import Image from "next/image";
import React from "react";

const EnvironmentalPreservation = ({ content }: any) => {
  return (
    <section>
      <div className="mb-28 flex flex-col gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="flex gap-9">
          <div className="w-1/2 flex-none">
            <h3 className="text-jet text-3xl font-bold">
              {content.content[1].title}
            </h3>
            {content.content[1].descriptionParagraphs.map((item: any) => (
              <p className="text-dim-gray mt-8">{item.description}</p>
            ))}
            <div className="mt-12">
              <BorderButton
                buttonText="Read More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </div>
          </div>
          <div>
            <Image
              src={`${content.content[1].image.url}`}
              width={1842}
              height={1360}
              alt={content.content[1].image.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalPreservation;
