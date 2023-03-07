"use client";
import RangeSliderMark from "@/components/range-sliders/RangeSliderMark";
import Diamond from "@/components/svg/Diamond";
import Reset from "@/components/svg/Reset";
import React, { useEffect, useState } from "react";
import {
  getContractPrice,
  getDownPayment,
  getMonthlyAmortization,
  getRate,
  getRequiredMonthlyIncome,
  toCurrency,
  toCurrencyComma,
} from "@/helpers/homeCalculator";

const Content = () => {
  const [tcp, setTcp] = useState<number | null>(null);
  const [formattedTcp, setFormattedTcp] = useState("");
  const [reservationFee, setReservationFee] = useState(0);
  const [downPaymentPercent, setDownPaymentPercent] = useState(0);
  const [downPaymentTerm, setDownPaymentTerm] = useState(12);
  const [yearsToPay, setYearsToPay] = useState(0);
  const [contractPrice, setContractPrice] = useState({
    contractPrice: 0,
    miscFees: 0,
    bankFees: 0,
    vat: 0,
  });
  const [downPayment, setDownPayment] = useState({
    reservationFee: 0,
    downPaymentPercent: 0,
    downPayment: 0,
    netDownPayment: 0,
    monthlyDownPayment: 0,
  });
  const [rate, setRate] = useState({
    rate: 0,
    yearsToPay: 0,
  });
  const [loan, setLoan] = useState(0);
  const [monthlyAmortization, setMonthlyAmortization] = useState(0);
  const [requiredMonthlyIncome, setRequiredMonthlyIncome] = useState(0);
  const reservationFeeMarks = {
    0: <strong className="absolute top-[12px] -left-[19px]">10,000</strong>,
    50: <strong className="absolute top-[12px] -left-[19px]">20,000</strong>,
    100: <strong className="absolute top-[12px] -left-[19px]">50,000</strong>,
  };
  const downPaymentMarks = {
    0: <strong className="absolute top-[12px] -left-[10px]">10%</strong>,
    50: <strong className="absolute top-[12px] -left-[10px]">20%</strong>,
    100: <strong className="absolute top-[12px] -left-[10px]">30%</strong>,
  };
  const yearsPayMarks = {
    0: <strong className="absolute top-[12px] -left-[13px]">5 Years</strong>,
    50: <strong className="absolute top-[12px] -left-[13px]">10 Years</strong>,
    100: <strong className="absolute top-[12px] -left-[13px]">15 Years</strong>,
  };
  const downPaymentTerms = [12, 24, 36, 48, 60];
  useEffect(() => {
    setContractPrice(getContractPrice(tcp ? tcp : 0));
  }, [tcp]);

  useEffect(() => {
    if (tcp) {
      const updatedReservationFee =
        reservationFee === 0
          ? 10000
          : reservationFee === 50
          ? 20000
          : reservationFee === 100
          ? 50000
          : 10000;
      const updatedDownPaymentPercent =
        downPaymentPercent === 0
          ? 10
          : downPaymentPercent === 50
          ? 20
          : downPaymentPercent === 100
          ? 30
          : 10;
      setDownPayment(
        getDownPayment(
          contractPrice.contractPrice,
          updatedDownPaymentPercent,
          downPaymentTerm,
          updatedReservationFee
        )
      );
    }
  }, [reservationFee, downPaymentPercent, downPaymentTerm, contractPrice, tcp]);

  useEffect(() => {
    if (tcp) {
      const updatedYearsToPay =
        yearsToPay === 0
          ? 5
          : yearsToPay === 50
          ? 10
          : yearsToPay === 100
          ? 15
          : 5;
      setRate(getRate(updatedYearsToPay));
    }
  }, [yearsToPay, tcp]);

  useEffect(() => {
    if (contractPrice.contractPrice > 0 && downPayment.downPayment > 0) {
      setLoan(contractPrice.contractPrice - downPayment.downPayment);
    }
  }, [downPayment, contractPrice]);

  useEffect(() => {
    if (tcp && loan > 0 && rate.rate > 0 && rate.yearsToPay > 0) {
      setMonthlyAmortization(
        getMonthlyAmortization(loan, rate.rate, rate.yearsToPay * 12)
      );
    }
  }, [tcp, loan, rate, yearsToPay]);

  useEffect(() => {
    if (monthlyAmortization > 0) {
      setRequiredMonthlyIncome(getRequiredMonthlyIncome(monthlyAmortization));
    }
  }, [monthlyAmortization]);

  const clearFields = () => {
    setTcp(null);
    setReservationFee(0);
    setDownPaymentPercent(0);
    setDownPaymentTerm(12);
    setYearsToPay(0);
    setContractPrice({
      contractPrice: 0,
      miscFees: 0,
      bankFees: 0,
      vat: 0,
    });
    setDownPayment({
      reservationFee: 0,
      downPaymentPercent: 0,
      downPayment: 0,
      netDownPayment: 0,
      monthlyDownPayment: 0,
    });
    setRate({
      rate: 0,
      yearsToPay: 0,
    });
    setLoan(0);
    setMonthlyAmortization(0);
    setRequiredMonthlyIncome(0);
  };

  return (
    <section className="mt-24 mb-32 flex flex-col gap-16 md:flex-row lg:mx-9 xl:mx-16 2xl:mx-44">
      <div className="flex-1 p-8">
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
              className="text-jet block text-sm font-bold"
            >
              Total Contract Price
            </label>
            <div className="mt-2">
              <input
                max="100000000000000"
                type="text"
                min="0"
                step="any"
                name="totalContactPrice"
                id="totalContactPrice"
                className="border-b-jet focus:ring-none block w-full border-b-[1px] px-2 py-4 sm:text-sm"
                placeholder="Php"
                value={formattedTcp ? formattedTcp : ""}
                onChange={(e) => {
                  let { value, min, max } = e.target;

                  //convert to number first without comma
                  value = value.replace(/[$,]/g, "");

                  //set a max value
                  value = String(
                    Math.max(Number(min), Math.min(Number(max), Number(value)))
                  );

                  setTcp(Number(value));
                  setFormattedTcp(
                    toCurrencyComma(value.replace(/[^0-9.]/g, ""))
                  );
                }}
              />
            </div>
          </div>
          <div className="mt-8">
            <label
              htmlFor="totalContactPrice"
              className="text-jet block text-sm font-bold"
            >
              Reservation Fee
            </label>
            <div className="mx-2 mt-8">
              <RangeSliderMark
                marks={reservationFeeMarks}
                step={null}
                value={reservationFee}
                onValueChange={setReservationFee}
              />
            </div>
          </div>
          <div className="mt-14">
            <label
              htmlFor="totalContactPrice"
              className="text-jet block text-sm font-bold"
            >
              Percent Down Payment
            </label>
            <div className="mx-2 mt-8">
              <RangeSliderMark
                marks={downPaymentMarks}
                step={null}
                value={downPaymentPercent}
                onValueChange={setDownPaymentPercent}
              />
            </div>
          </div>
          <div className="mt-14">
            <label
              htmlFor="totalContactPrice"
              className="text-jet block text-sm font-bold"
            >
              Down Payment Term (Months)
            </label>
            <div className="mt-8 flex flex-wrap gap-8">
              {downPaymentTerms.map((term: number, i: number) => {
                return (
                  <div
                    key={i}
                    onClick={() => setDownPaymentTerm(term)}
                    className={`${
                      downPaymentTerm === term
                        ? "bg-blue-ryb hover:bg-dark-cornflower-blue"
                        : "bg-gainsboro hover:bg-ghost-white"
                    } delay-50 flex-1 bg-opacity-95 py-5 px-5 transition hover:cursor-pointer`}
                  >
                    <p
                      className={`text-center text-2xl font-bold ${
                        downPaymentTerm === term
                          ? "text-white"
                          : "text-dim-gray"
                      } delay-50 bg-opacity-95 transition`}
                    >
                      {term}
                    </p>
                    <p
                      className={`text-center text-sm ${
                        downPaymentTerm === term
                          ? "text-white"
                          : "text-dim-gray"
                      } delay-50 bg-opacity-95 transition`}
                    >
                      Months
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-14">
            <label
              htmlFor="totalContactPrice"
              className="text-jet block text-sm font-bold"
            >
              Number of Years to Pay Loan
            </label>
            <div className="mx-2 mt-8">
              <RangeSliderMark
                marks={yearsPayMarks}
                step={null}
                value={yearsToPay}
                onValueChange={setYearsToPay}
              />
            </div>
          </div>
          <div className="mt-24 flex items-center gap-8">
            {/* Disabled button because the ui is auto update when input change */}
            {/* <button className="bg-blue-ryb hover:bg-dark-cornflower-blue px-16 py-5 text-sm text-white">
              Calculate
            </button> */}
            <div
              className="hover:bg-alice-blue delay-50 flex items-center gap-4 bg-opacity-95 transition hover:cursor-pointer"
              onClick={() => clearFields()}
            >
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
                <p className="text-jet flex-none font-bold">
                  {tcp ? toCurrency(tcp) : "---"}
                </p>
              </div>
              <div>
                <p className="text-jet">Add:</p>
                <div className="mt-2 ml-4 flex">
                  <p className="text-jet flex-1">VAT:</p>
                  <p className="text-jet flex-none">
                    {contractPrice.vat ? toCurrency(contractPrice.vat) : "---"}
                  </p>
                </div>
                <div className="mt-2 ml-4 flex">
                  <p className="text-jet flex-1">Miscellaneous Fees:</p>
                  <p className="text-jet flex-none">
                    {contractPrice.miscFees
                      ? toCurrency(contractPrice.miscFees)
                      : "---"}
                  </p>
                </div>
                <div className="mt-2 ml-4 flex">
                  <p className="text-jet flex-1">Bank Fees:</p>
                  <p className="text-jet flex-none">
                    {contractPrice.bankFees
                      ? toCurrency(contractPrice.bankFees)
                      : "---"}
                  </p>
                </div>
              </div>
              <div className="flex">
                <p className="text-jet flex-1 font-bold">
                  Gross Total Contract Price:
                </p>
                <p className="text-jet flex-none font-bold">
                  {contractPrice.contractPrice
                    ? toCurrency(contractPrice.contractPrice)
                    : "---"}
                </p>
              </div>
              <div className="flex">
                <p className="text-jet flex-1 font-bold">Down Payment:</p>
                <p className="text-jet flex-none font-bold">
                  {downPayment.downPayment
                    ? toCurrency(downPayment.downPayment)
                    : "---"}
                </p>
              </div>
              <div>
                <p className="text-jet">Less:</p>
                <div className="mt-2 ml-4 flex">
                  <p className="text-jet flex-1">Reservation Fee:</p>
                  <p className="text-jet flex-none">
                    {downPayment.reservationFee
                      ? toCurrency(downPayment.reservationFee)
                      : "---"}
                  </p>
                </div>
              </div>
              <div className="flex">
                <p className="text-jet flex-1 font-bold">Net Down Payment:</p>
                <p className="text-jet flex-none font-bold">
                  {downPayment.netDownPayment
                    ? toCurrency(downPayment.netDownPayment)
                    : "---"}
                </p>
              </div>
              <div className="flex">
                <p className="text-jet flex-1 font-bold">
                  Monthly Down Payment:
                </p>
                <p className="text-jet flex-none font-bold">
                  {downPayment.monthlyDownPayment
                    ? toCurrency(downPayment.monthlyDownPayment)
                    : "---"}
                </p>
              </div>
              <div>
                <div className="flex">
                  <p className="text-jet flex-1 font-bold">Loan:</p>
                  <p className="text-jet flex-none font-bold">
                    {loan > 0 ? toCurrency(loan) : "---"}
                  </p>
                </div>
                <div className="mt-2 flex">
                  <p className="text-jet flex-1">Rate:</p>
                  <p className="text-jet flex-none">
                    {rate.rate > 0
                      ? `${(rate.rate * 12 * 100).toFixed(3)}%`
                      : "---"}
                  </p>
                </div>
                <div className="mt-2 flex">
                  <p className="text-jet flex-1">Period (Months):</p>
                  <p className="text-jet flex-none">
                    {rate.yearsToPay > 0 ? rate.yearsToPay * 12 : "---"}
                  </p>
                </div>
              </div>
              <div className="flex">
                <p className="text-jet flex-1 font-bold">
                  Monthly Amortization:
                </p>
                <p className="text-jet flex-none font-bold">
                  {monthlyAmortization > 0
                    ? toCurrency(monthlyAmortization)
                    : "---"}
                </p>
              </div>
              <div className="flex">
                <p className="text-jet flex-1 font-bold">
                  Required Monthly Income:
                </p>
                <p className="text-jet flex-none font-bold">
                  {requiredMonthlyIncome > 0
                    ? toCurrency(requiredMonthlyIncome)
                    : "---"}
                </p>
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
