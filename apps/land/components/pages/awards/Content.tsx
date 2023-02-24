import moment from "moment";
import Image from "next/image";
import React from "react";
import { Award } from "shared-types";

const Content = ({ awards }: { awards: Award[] }) => {
  return (
    <section className="short:-mt-32 mx-9 -mt-12 mb-24 gap-9 lg:-mt-36 xl:mx-16 2xl:mx-44 2xl:-mt-72">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {awards.map((award, index) => {
          return (
            <div className="flex flex-col gap-6" key={index}>
              <Image
                src={award.coverImage.url ? award.coverImage.url : ""}
                width={award.coverImage.width ? award.coverImage.width : 512}
                height={award.coverImage.height ? award.coverImage.height : 512}
                alt={award.coverImage.alt ? award.coverImage.alt : ""}
              />
              <h3 className="text-jet text-1xl font-bold italic">
                {moment(award.createdAt).format("ll")}
              </h3>
              <h2 className="text-jet text-3xl font-bold">{award.title}</h2>
              <p className="text-dim-gray">{award.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Content;
