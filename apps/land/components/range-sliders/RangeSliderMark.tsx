"use client";
import React from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

type T_Marks = {
  [key: number]: any;
};

const RangeSliderMark = ({
  marks,
  min = 0,
  defaultValue = 0,
}: {
  marks: T_Marks;
  min?: number;
  defaultValue?: number;
}) => {
  return <Slider min={min} marks={marks} defaultValue={defaultValue} />;
};

export default RangeSliderMark;
