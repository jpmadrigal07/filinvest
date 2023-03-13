"use client";
import React, { Dispatch, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import LevelOne from "./LevelOne";
import LevelTwo from "./LevelTwo";

const CareersModal = ({
  setOpen,
  open,
  selectedCareer,
}: {
  setOpen: Dispatch<boolean>;
  open: boolean;
  selectedCareer: string;
}) => {
  const { register, getValues, setValue } = useForm();
  const router = useRouter();
  const [level, setLevel] = useState(1);
  const onSubmit = () => {
    const data = getValues();
    router.push(
      `/careers/submit?data=${JSON.stringify({
        ...data,
        career: selectedCareer,
      })}`
    );
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative !z-[52]" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl">
                <div className="bg-dark-cornflower-blue flex items-center p-5">
                  <Dialog.Title className="flex-1 text-2xl font-bold text-white">
                    Filinvest Dream Builders Talent Pool
                  </Dialog.Title>
                  <span
                    className="text-2xl font-normal text-white opacity-20 hover:cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    x
                  </span>
                </div>
                <div className="p-6">
                  {level === 1 ? (
                    <LevelOne
                      setLevel={setLevel}
                      register={register}
                      getValues={getValues}
                      setValue={setValue}
                      selectedCareer={selectedCareer}
                    />
                  ) : (
                    <LevelTwo
                      setLevel={setLevel}
                      register={register}
                      getValues={getValues}
                      onSubmit={onSubmit}
                    />
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CareersModal;
