import React from "react";

const ChevronDown = ({ color = "white" }: { color?: string }) => {
  return (
    <svg
      width="13"
      height="8"
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L6.42331 7M6.57618 6.99977L12 1.00016"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ChevronDown;
