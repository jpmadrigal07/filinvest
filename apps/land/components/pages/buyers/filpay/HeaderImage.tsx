import BorderButton from "@/components/button/BorderButton";
import Image from "next/image";
import React from "react";

const HeaderImage = ({ content }: any) => {
  return (
    <section className="2xl-mt-52 -mt-36 gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
      <Image
        src={`${content.content[0].image.url}`}
        width={3284}
        height={684}
        alt="Picture of the author"
      />
    </section>
  );
};

export default HeaderImage;
