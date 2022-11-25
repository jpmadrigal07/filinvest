import React, { Dispatch } from "react";

const LevelOne = ({ setLevel }: { setLevel: Dispatch<number> }) => {
  return (
    <form>
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
              name="firstName"
              id="firstName"
              className="border-jet focus:ring-none block w-full border-[1px] p-2 shadow-sm sm:text-sm"
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
              name="lastName"
              id="lastName"
              className="border-jet focus:ring-none block w-full border-[1px] p-2 shadow-sm sm:text-sm"
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
              name="contact"
              id="contact"
              className="border-jet focus:ring-none block w-full border-[1px] p-2 shadow-sm sm:text-sm"
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
              name="email"
              id="email"
              className="border-jet focus:ring-none block w-full border-[1px] p-2 shadow-sm sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="location"
            className="text-jet block text-sm font-medium"
          >
            Position<span className="text-red">*</span>
          </label>
          <div className="mt-2">
            <select
              id="position"
              name="position"
              className="border-jet focus:ring-none block w-full border-[1px] p-2 shadow-sm sm:text-sm"
              defaultValue="Accounting Analyst"
            >
              <option>Accounting Analyst</option>
              <option>Accounting Assistant</option>
              <option>Accounting Supervisor</option>
            </select>
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
            Drag & Drop or{" "}
            <span className="text-dark-cornflower-blue underline hover:cursor-pointer">
              browse
            </span>
          </p>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <button
          className="bg-blue-ryb w-44 rounded-full p-3 text-white"
          onClick={() => setLevel(2)}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default LevelOne;
