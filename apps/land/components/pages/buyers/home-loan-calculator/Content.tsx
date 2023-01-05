import RangeSliderMark from "@/components/range-sliders/RangeSliderMark";
import Diamond from "@/components/svg/Diamond";
import Reset from "@/components/svg/Reset";
import React from "react";

const Content = () => {
  const reservationFeeMarks = {
    0: <strong>10,000</strong>,
    50: <strong>25,000</strong>,
    100: <strong>50,000</strong>,
  };
  const downPaymentMarks = {
    0: <strong>10%</strong>,
    50: <strong>20%</strong>,
    100: <strong>30%</strong>,
  };
  const yearsPayMarks = {
    0: <strong>5 Years</strong>,
    50: <strong>10 Years</strong>,
    100: <strong>15 Years</strong>,
  };
  return (
    <section className="mt-24 mb-32 flex gap-16 lg:mx-9 xl:mx-16 2xl:mx-44">
      <div className="flex-1">
        <h2 className="text-jet text-4xl font-bold">
          Your New Home With The Right Loan
        </h2>
        <p className="text-dim-gray mt-6">
          Use this calculator to calculate estimated monthly payments and
          monthly income required each month.
        </p>
        <div className="mt-14">
          <div>
            <label
              htmlFor="totalContactPrice"
              className="text-jet block text-sm font-medium"
            >
              Total Contact Price
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="totalContactPrice"
                id="totalContactPrice"
                className="border-b-jet focus:ring-none block w-full border-b-[1px] px-2 py-4 sm:text-sm"
                placeholder="Php"
              />
            </div>
          </div>
          <div className="mt-8">
            <label
              htmlFor="totalContactPrice"
              className="text-jet block text-sm font-medium"
            >
              Reservation Fee
            </label>
            <div className="mx-2 mt-8">
              <RangeSliderMark marks={reservationFeeMarks} />
            </div>
          </div>
          <div className="mt-14">
            <label
              htmlFor="totalContactPrice"
              className="text-jet block text-sm font-medium"
            >
              Percent Down Payment
            </label>
            <div className="mx-2 mt-8">
              <RangeSliderMark marks={downPaymentMarks} />
            </div>
          </div>
          <div className="mt-14">
            <label
              htmlFor="totalContactPrice"
              className="text-jet block text-sm font-medium"
            >
              Down Payment Term (Months)
            </label>
            <div className="mt-8 flex gap-8">
              <div className="bg-blue-ryb hover:bg-dark-cornflower-blue flex-1 py-5 px-5 hover:cursor-pointer">
                <p className="text-center text-2xl font-bold text-white">12</p>
                <p className="text-center text-sm text-white">Months</p>
              </div>
              <div className="bg-gainsboro hover:bg-ghost-white flex-1 py-5 px-5 hover:cursor-pointer">
                <p className="text-dim-gray text-center text-2xl font-bold">
                  24
                </p>
                <p className="text-dim-gray text-center text-sm">Months</p>
              </div>
              <div className="bg-gainsboro hover:bg-ghost-white flex-1 py-5 px-5 hover:cursor-pointer">
                <p className="text-dim-gray text-center text-2xl font-bold">
                  36
                </p>
                <p className="text-dim-gray text-center text-sm">Months</p>
              </div>
              <div className="bg-gainsboro hover:bg-ghost-white flex-1 py-5 px-5 hover:cursor-pointer">
                <p className="text-dim-gray text-center text-2xl font-bold">
                  48
                </p>
                <p className="text-dim-gray text-center text-sm">Months</p>
              </div>
              <div className="bg-gainsboro hover:bg-ghost-white flex-1 py-5 px-5 hover:cursor-pointer">
                <p className="text-dim-gray text-center text-2xl font-bold">
                  60
                </p>
                <p className="text-dim-gray text-center text-sm">Months</p>
              </div>
            </div>
          </div>
          <div className="mt-14">
            <label
              htmlFor="totalContactPrice"
              className="text-jet block text-sm font-medium"
            >
              Number of Years to Pay Loan
            </label>
            <div className="mx-2 mt-8">
              <RangeSliderMark marks={yearsPayMarks} />
            </div>
          </div>
          <div className="mt-24 flex items-center gap-8">
            <button className="bg-blue-ryb hover:bg-dark-cornflower-blue px-16 py-5 text-sm text-white">
              Calculate
            </button>
            <div className="hover:bg-alice-blue flex items-center gap-4 hover:cursor-pointer">
              <Reset />
              <p className="text-jet text-sm">Clear Fields</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="divide-gainsboro divide-y bg-white shadow-2xl">
          <div className="p-12">
            <h3 className="text-jet text-2xl font-bold">Payment Details</h3>
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex">
                <p className="text-jet flex-1 font-bold">
                  Total Contract Price:
                </p>
                <p className="text-jet flex-none font-bold">---</p>
              </div>
              <div>
                <p className="text-jet">Add:</p>
                <div className="mt-2 ml-4 flex">
                  <p className="text-jet flex-1">VAT:</p>
                  <p className="text-jet flex-none">---</p>
                </div>
                <div className="mt-2 ml-4 flex">
                  <p className="text-jet flex-1">Miscellaneous Fees:</p>
                  <p className="text-jet flex-none">---</p>
                </div>
                <div className="mt-2 ml-4 flex">
                  <p className="text-jet flex-1">Bank Fees:</p>
                  <p className="text-jet flex-none">---</p>
                </div>
              </div>
              <div className="flex">
                <p className="text-jet flex-1 font-bold">
                  Gross Total Contract Price:
                </p>
                <p className="text-jet flex-none font-bold">---</p>
              </div>
              <div className="flex">
                <p className="text-jet flex-1 font-bold">Down Payment:</p>
                <p className="text-jet flex-none font-bold">---</p>
              </div>
              <div>
                <p className="text-jet">Less:</p>
                <div className="mt-2 ml-4 flex">
                  <p className="text-jet flex-1">Reservation Fee:</p>
                  <p className="text-jet flex-none">---</p>
                </div>
              </div>
              <div className="flex">
                <p className="text-jet flex-1 font-bold">Net Down Payment:</p>
                <p className="text-jet flex-none font-bold">---</p>
              </div>
              <div>
                <div className="flex">
                  <p className="text-jet flex-1 font-bold">Loan:</p>
                  <p className="text-jet flex-none font-bold">---</p>
                </div>
                <div className="mt-2 flex">
                  <p className="text-jet flex-1">Rate:</p>
                  <p className="text-jet flex-none">---</p>
                </div>
                <div className="mt-2 flex">
                  <p className="text-jet flex-1">Period (Months):</p>
                  <p className="text-jet flex-none">---</p>
                </div>
              </div>
              <div className="flex">
                <p className="text-jet flex-1 font-bold">
                  Monthly Amortization:
                </p>
                <p className="text-jet flex-none font-bold">---</p>
              </div>
              <div className="flex">
                <p className="text-jet flex-1 font-bold">
                  Required Monthly Income:
                </p>
                <p className="text-jet flex-none font-bold">---</p>
              </div>
            </div>
          </div>
          <div className="p-12">
            <p className="text-jet">Disclaimer</p>
            <div className="mt-6 flex gap-3">
              <div className="mt-1 flex-1">
                <Diamond />
              </div>
              <p className="text-dim-gray">
                Terms and prices are subject to change without prior notice.
                Filinvest Land Inc. reserves the right to make any correction in
                case of typographical errors.
              </p>
            </div>
            <div className="mt-3 flex gap-3">
              <div className="mt-1 flex-1">
                <Diamond />
              </div>
              <p className="text-dim-gray">
                Sample computation is for initial reference only. Final
                computation is system generated and shall be provided by
                Filinvest Land, Inc.
              </p>
            </div>
            <div className="mt-3 flex gap-3">
              <div className="mt-1 flex-1">
                <Diamond />
              </div>
              <p className="text-dim-gray">
                Total Contract Price (TCP) is inclusive of VAT (if applicable),
                title transfer, and miscellaneous fees
              </p>
            </div>
            <div className="mt-3 flex gap-3">
              <div className="mt-1 flex-1">
                <Diamond />
              </div>
              <p className="text-dim-gray">
                For bank financing payment term, the stated bank interest rate
                are indicative only. The final loan interest rate shall be
                determined by the bank at the time of loan arrangements and
                approval.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
