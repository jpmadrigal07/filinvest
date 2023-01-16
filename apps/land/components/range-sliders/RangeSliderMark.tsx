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
  step = 1,
  onValueChange = () => null,
  value = 0,
  allowCross = false,
  range = false,
}: {
  marks?: T_Marks;
  min?: number;
  step?: number | null;
  value: number | number[];
  defaultValue?: number | number[];
  onValueChange: Function;
  allowCross?: boolean;
  range?: boolean;
}) => {
  return (
    <Slider
      min={min}
      marks={marks}
      step={step}
      range={range}
      allowCross={allowCross}
      defaultValue={defaultValue}
      onChange={(value) => onValueChange(value)}
      value={value}
    />
  );
};

export default RangeSliderMark;
