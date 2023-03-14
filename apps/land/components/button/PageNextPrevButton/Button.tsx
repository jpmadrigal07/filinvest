import React from "react";
import Image from "next/image";
import ArrowRight from "@/components/svg/ArrowRight";
import ArrowLeft from "@/components/svg/ArrowLeft";
import Link from "next/link";

const Button = ({
  imgName,
  pageName,
  isLeft = true,
  url,
}: {
  imgName: string;
  pageName: string;
  isLeft?: boolean;
  url: string;
}) => {
  return (
    <Link
      href={url}
      className={`flex ${
        isLeft && "lg:flex-row-reverse"
      } hover:bg-ghost-white items-center gap-6 hover:cursor-pointer`}
    >
      <div className="flex-none">
        <Image
          className="h-[54px] w-[65px]"
          src={imgName}
          width={64}
          height={54}
          alt="Picture of the author"
        />
      </div>
      <div className="w-auto">
        <p className="text-jet text-sm font-bold">
          {isLeft ? "Previous" : "Next"}
        </p>
        <h3 className="text-jet text-2xl font-bold">{pageName}</h3>
      </div>
      {isLeft ? <ArrowLeft color="#000000" /> : <ArrowRight color="#000000" />}
    </Link>
  );
};

export default Button;
