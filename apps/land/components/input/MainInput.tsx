import React, { InputHTMLAttributes } from "react";

interface T_Props extends InputHTMLAttributes<HTMLInputElement> {}

const MainInput = (props: T_Props) => {
  return (
    <div className="border-silver-chalice flex items-center gap-3 border-b-[1px] py-[10px]">
      <input
        {...props}
        className="ring-none w-full border-none bg-transparent text-white ring-0"
      />
    </div>
  );
};

export default MainInput;
