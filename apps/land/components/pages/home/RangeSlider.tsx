"use client";
import React from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

const RangeSlider = () => {
  return (
    <Slider
      range
      allowCross={false}
      defaultValue={[20, 50]}
      onChange={(value) => console.log("range", value)}
    />
  );
};

export default RangeSlider;
