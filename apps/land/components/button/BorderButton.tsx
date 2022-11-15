"use client";
import React from "react";

const BorderButton = ({
  buttonText = "Learn More",
  bgColor = "transparent",
  borderColor = "white",
  textColor = "white",
  sidePadding = "12",
}: {
  buttonText?: string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  sidePadding?: string;
}) => {
  const parentTag = `relative px-${sidePadding} py-4 overflow-hidden font-medium bg-${bgColor} group`;
  const topLine = `absolute top-0 left-0 w-11/12 h-0 transition-all duration-200 border-t-[1px] border-${borderColor} group-hover:w-full ease`;
  const rightLine = `absolute bottom-0 right-0 w-0 h-4/5 w-0 transition-all duration-200 border-r-[1px] border-${borderColor} group-hover:mb-2.5 ease`;
  const bottomLine = `absolute bottom-0 right-0 w-11/12 h-0 transition-all duration-200 border-b-[1px] border-${borderColor} group-hover:mr-3.5 ease`;
  const leftLine = `absolute top-0 left-0 w-0 h-4/5 w-0 transition-all duration-200 border-l-[1px] border-${borderColor} group-hover:h-full ease`;
  const text = `relative transition-colors duration-300 delay-200 text-${textColor} ease`;
  return (
    <span className={parentTag}>
      <span className={topLine}></span>
      <span className={rightLine}></span>
      <span className={bottomLine}></span>
      <span className={leftLine}></span>
      <span className={text}>{buttonText}</span>
    </span>
  );
};

export default BorderButton;
