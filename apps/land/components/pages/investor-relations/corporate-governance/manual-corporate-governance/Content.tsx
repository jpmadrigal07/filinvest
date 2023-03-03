import BorderButton from "@/components/button/BorderButton";
import PageNextPrevButton from "@/components/button/PageNextPrevButtonOld";
import LinkedIn from "@/components/svg/LinkedIn";
import React from "react";

const Content = () => {
  return (
    <section className="-mt-16 mb-28 flex flex-col gap-9 lg:mx-9 xl:mx-16 2xl:mx-44 2xl:-mt-52">
      <div className="grid grid-cols-3 gap-12">
        <div className="flex flex-col items-center gap-6 bg-white p-16 px-6 shadow-xl">
          <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full px-6 py-6 shadow-2xl">
            <LinkedIn />
          </div>
          <h3 className="text-jet text-xl font-bold">
            Code Of Business Conduct And Ethics
          </h3>
          <BorderButton
            buttonText="View"
            textColor="dark-cornflower-blue"
            borderColor="dark-cornflower-blue"
          />
        </div>
        <div className="flex flex-col items-center gap-6 bg-white p-16 px-6 shadow-xl">
          <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full px-6 py-6 shadow-2xl">
            <LinkedIn />
          </div>
          <h3 className="text-jet text-xl font-bold">
            Code Of Business Conduct And Ethics
          </h3>
          <BorderButton
            buttonText="View"
            textColor="dark-cornflower-blue"
            borderColor="dark-cornflower-blue"
          />
        </div>
        <div className="flex flex-col items-center gap-6 bg-white p-16 px-6 shadow-xl">
          <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full px-6 py-6 shadow-2xl">
            <LinkedIn />
          </div>
          <h3 className="text-jet text-xl font-bold">
            Code Of Business Conduct And Ethics
          </h3>
          <BorderButton
            buttonText="View"
            textColor="dark-cornflower-blue"
            borderColor="dark-cornflower-blue"
          />
        </div>
        <div className="flex flex-col items-center gap-6 self-center bg-white p-16 px-6 shadow-xl">
          <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full px-6 py-6 shadow-2xl">
            <LinkedIn />
          </div>
          <h3 className="text-jet text-xl font-bold">
            Code Of Business Conduct And Ethics
          </h3>
          <BorderButton
            buttonText="View"
            textColor="dark-cornflower-blue"
            borderColor="dark-cornflower-blue"
          />
        </div>
        <div className="flex flex-col items-center gap-6 self-center bg-white p-16 px-6 shadow-xl">
          <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full px-6 py-6 shadow-2xl">
            <LinkedIn />
          </div>
          <h3 className="text-jet text-xl font-bold">
            Code Of Business Conduct And Ethics
          </h3>
          <BorderButton
            buttonText="View"
            textColor="dark-cornflower-blue"
            borderColor="dark-cornflower-blue"
          />
        </div>
      </div>
      <div className="mt-32 flex">
        <div className="flex-none">
          <PageNextPrevButton
            imgName="investor-relations-program-next-prev.png"
            pageName="Structures"
            isLeft={true}
          />
        </div>
        <div className="grow"></div>
        <div className="flex-none">
          <PageNextPrevButton
            imgName="investor-relations-program-next-prev.png"
            pageName="Investor Relations Program"
            isLeft={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
