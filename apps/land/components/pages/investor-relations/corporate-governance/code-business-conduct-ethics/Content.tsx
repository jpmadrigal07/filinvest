import PageNextPrevButton from "@/components/button/PageNextPrevButton";
import LinkedIn from "@/components/svg/LinkedIn";
import React from "react";

const Content = () => {
  return (
    <section className="-mt-52 mb-28 flex flex-col gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
      <div className="grid grid-cols-3 gap-12">
        <div className="flex flex-col items-center gap-6 bg-white p-16 px-12 shadow-xl">
          <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full py-6 px-6 shadow-2xl">
            <LinkedIn />
          </div>
          <h3 className="text-dim-gray text-center text-lg">
            No employee shall accept gifts or lavish entertainment from
            customers or suppliers either for himself or his family.
          </h3>
        </div>
        <div className="flex flex-col items-center gap-6 bg-white p-16 px-12 shadow-xl">
          <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full py-6 px-6 shadow-2xl">
            <LinkedIn />
          </div>
          <h3 className="text-dim-gray text-center text-lg">
            No employee shall solicit or accept personal benefits such as fees
            or commission from any customer of the Company, or any individual or
            organization doing or seeking business with the Company.
          </h3>
        </div>
        <div className="flex flex-col items-center gap-6 bg-white p-16 px-12 shadow-xl">
          <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full py-6 px-6 shadow-2xl">
            <LinkedIn />
          </div>
          <h3 className="text-dim-gray text-center text-lg">
            No employee shall take an opportunity that rightly belongs to the
            Company. It is also inappropriate for an employee to use the
            Company’s name or his connection with the Company for personal or
            non-job related purposes.
          </h3>
        </div>
        <div className="flex flex-col items-center gap-6 bg-white p-16 px-12 shadow-xl">
          <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full py-6 px-6 shadow-2xl">
            <LinkedIn />
          </div>
          <h3 className="text-dim-gray text-center text-lg">
            Employees shall award orders, contracts, and commitments to
            suppliers without favoritism. Business must be conducted strictly on
            the basis of merit.
          </h3>
        </div>
        <div className="flex flex-col items-center gap-6 bg-white p-16 px-12 shadow-xl">
          <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full py-6 px-6 shadow-2xl">
            <LinkedIn />
          </div>
          <h3 className="text-dim-gray text-center text-lg">
            No employee shall use company assets for personal use.
          </h3>
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
