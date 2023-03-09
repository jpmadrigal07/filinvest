import BorderButton from "@/components/button/BorderButton";
import Image from "next/image";
import React from "react";

const EnvironmentalPreservation = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) =>
      item.blockType ===
      "corporate-social-responsibility-environmental-preservation"
  );
  return (
    <div className="flex gap-9">
      <div className="w-1/2 flex-none">
        <h3 className="text-jet text-3xl font-bold">{data.title}</h3>
        {data.descriptionParagraphs.map((item: any) => (
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
          src={`${data.image.url}`}
          width={1842}
          height={1360}
          alt={data.image.alt}
        />
      </div>
    </div>
  );
};

export default EnvironmentalPreservation;
