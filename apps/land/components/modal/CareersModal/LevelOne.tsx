"use client";
import React, { Dispatch } from "react";

const LevelOne = ({
  setLevel,
  register,
  getValues,
  selectedCareer,
}: {
  setLevel: Dispatch<number>;
  register: any;
  getValues: any;
  selectedCareer: string;
}) => {
  return (
    <div>
      <h3 className="text-dark-cornflower-blue text-xl font-bold">{`APPLICANT'S DETAILS`}</h3>
      <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
        <div>
          <label
            htmlFor="firstName"
            className="text-jet block text-sm font-medium"
          >
            First Name<span className="text-red">*</span>
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="firstName"
              className="border-jet focus:ring-none block w-full border-[1px] p-2 shadow-sm sm:text-sm"
              {...register("firstName", { required: true })}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="text-jet block text-sm font-medium"
          >
            Last Name<span className="text-red">*</span>
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="lastName"
              className="border-jet focus:ring-none block w-full border-[1px] p-2 shadow-sm sm:text-sm"
              {...register("lastName", { required: true })}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="contact"
            className="text-jet block text-sm font-medium"
          >
            Contact<span className="text-red">*</span>
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="contact"
              className="border-jet focus:ring-none block w-full border-[1px] p-2 shadow-sm sm:text-sm"
              {...register("contact", { required: true })}
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="text-jet block text-sm font-medium">
            Email<span className="text-red">*</span>
          </label>
          <div className="mt-2">
            <input
              type="email"
              id="email"
              className="border-jet focus:ring-none block w-full border-[1px] p-2 shadow-sm sm:text-sm"
              {...register("email", { required: true })}
            />
          </div>
        </div>
        {/* <div>
          <label
            htmlFor="location"
            className="text-jet block text-sm font-medium"
          >
            Position<span className="text-red">*</span>
          </label>
          <div className="mt-2">
            <select
              id="position"
              className="border-jet focus:ring-none block w-full border-[1px] p-2 shadow-sm sm:text-sm"
              defaultValue="Accounting Analyst"
              {...register("position", { required: true })}
            >
              <option>Accounting Analyst</option>
              <option>Accounting Assistant</option>
              <option>Accounting Supervisor</option>
            </select>
          </div>
        </div> */}
        <div>
          <label htmlFor="email" className="text-jet block text-sm font-medium">
            Selected Position
          </label>
          <div className="mt-2">
            <input
              type="email"
              id="Position"
              value={selectedCareer}
              disabled
              className="border-jet focus:ring-none block w-full border-[1px] p-2 shadow-sm disabled:cursor-not-allowed disabled:opacity-70 sm:text-sm"
              {...register("position", { required: true })}
            />
          </div>
        </div>
      </div>
      <h3 className="text-dark-cornflower-blue mt-9 text-xl font-bold">
        UPLOAD CV
      </h3>
      <div className="mt-3">
        <p className="text-jet block text-sm font-medium">
          Attachments<span className="text-red">*</span>
        </p>
        <div className="bg-alice-blue border-dark-cornflower-blue mt-2 flex justify-center border-2 border-dashed p-4">
          <p className="text-dim-gray">
            <input
              type="file"
              title="browse"
              accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*"
              {...register("cv", { required: true })}
            />
          </p>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <button
          className="bg-blue-ryb w-44 rounded-full p-3 text-white"
          onClick={() => {
            const values = getValues();

            if (
              values.firstName &&
              values.lastName &&
              values.contact &&
              values.email &&
              values?.cv.length > 0
            ) {
              let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(values.email)) {
                alert("Please input a valid email");
                return;
              }

              let phNumber = /^(09|\+639)\d{9}$/;
              if (!phNumber.test(values.contact)) {
                alert("Please input a valid contact number");
                return;
              }

              setLevel(2);
            } else {
              alert("Please complete all required fields");
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LevelOne;
