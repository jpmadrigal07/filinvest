import BorderButton from "@/components/button/BorderButton";
import PageNextPrevButton from "@/components/button/PageNextPrevButtonOld";
import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <section>
      <div className="mt-16 mb-28 flex flex-col gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
        <div>
          <h2 className="text-jet text-4xl font-bold">{`FLI‘S Corporate Social Responsibility (CSR) Initiatives For 2018`}</h2>
          <p className="text-dim-gray mt-8">
            FLI‘s Corporate Social Responsibility (CSR) initiatives are
            highlighted by several community involvement programs that
            intensified the spirit of camaraderie among employees and the desire
            to give back to the communities where the company operates.
          </p>
        </div>
        <div className="flex gap-9">
          <div className="w-1/2 flex-none">
            <h3 className="text-jet text-3xl font-bold">
              Environmental Preservation
            </h3>
            <p className="text-dim-gray mt-8">
              The Philippines suffers from environmental degradation caused by
              the mismanagement and abuse of our coastal waters and forests. In
              response to this, several Filinvest subsidiaries joined the
              International Coastal Clean-up program where employees did their
              part by picking up trash along the shore.
            </p>
            <p className="text-dim-gray mt-8">
              Another activity that helps protect Mother Nature is the annual
              Keep it Green. In 2018, green warriors from the ranks of the FLI
              employees planted tree seedlings along the slopes of the Havila
              and Timberland Heights townscapes.
            </p>
            <div className="mt-12">
              <BorderButton
                buttonText="Read More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </div>
          </div>
          <div>
            <Image
              src="/environmental-preservation.png"
              width={1842}
              height={1360}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <div className="bg-ghost-white xl:py-12 2xl:py-24">
        <div className="lg:mx-9 xl:mx-16 2xl:mx-44">
          <h2 className="text-jet text-3xl font-bold">
            The Company Conducted Programs Aimed At Training And Keeping Its
            Employees Engaged Starting From The Leaders.
          </h2>
          <p className="text-dim-gray mt-8">
            Programs such as Coaching, Behavioral Interviewing, Problem Solving
            and Decision Making were conducted to further develop the leadership
            skills of supervisors and managers.{" "}
          </p>
          <p className="text-dim-gray mt-8">
            Highlighting 2018 were two major employee engagement programs – the
            FLI Family Day at Manila Ocean Park and the FLI Greatest Filinvest
            Show Christmas Party – which allowed employees to bond with their
            families and work colleagues. Thematic engagement activities for
            Valentine’s Day, Mother’s Day, Father’s Day, and Halloween were also
            held to provide fun and entertaining respites for the hardworking
            employees.
          </p>
        </div>
        <div className="mt-16 flex gap-9 lg:mx-9 xl:mx-16 2xl:mx-44">
          <div className="flex-1">
            <Image
              src="/corporate-social-1.png"
              width={790}
              height={664}
              alt="Picture of the author"
            />
          </div>
          <div className="flex-1">
            <Image
              src="/corporate-social-2.png"
              width={790}
              height={664}
              alt="Picture of the author"
            />
          </div>
          <div className="flex-1">
            <Image
              src="/corporate-social-3.png"
              width={790}
              height={664}
              alt="Picture of the author"
            />
          </div>
          <div className="flex-1">
            <Image
              src="/corporate-social-4.png"
              width={790}
              height={664}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <div className="lg:mx-9 xl:mx-16 2xl:mx-44">
        <div className="my-20 flex">
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
      </div>
    </section>
  );
};

export default Content;
