"use client";
import React from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

type T_Marks = {
  [key: number | string]: any;
};

const RangeSliderMark = ({
  marks,
  min = undefined,
  max = undefined,
  defaultValue = 0,
  step = 1,
  onValueChange = () => null,
  value = 0,
  allowCross = false,
  range = false,
}: {
  marks?: T_Marks;
  min?: number | undefined;
  max?: number | undefined;
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
      max={max}
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
