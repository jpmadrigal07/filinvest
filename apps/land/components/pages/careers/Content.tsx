"use client";
import React from "react";
import Image from "next/image";
import Positions from "./Positions";

const Content = () => {
  return (
    <section className="mx-9 mt-24 xl:mx-16 2xl:mx-44">
      <h2 className="text-dark-cornflower-blue text-4xl font-bold">
        Why Become a Filinvest dream builder?
      </h2>
      <div className="mt-20 flex flex-col gap-12 md:flex-row">
        <div>
          <div className="flex items-center gap-6">
            <div>
              <Image
                src="/diversified-careers.png"
                width={105}
                height={105}
                alt="Picture of the author"
              />
            </div>
            <h3 className="text-jet text-2xl font-bold">
              Be Part of a Diversified and Trusted Company
            </h3>
          </div>
          <p className="text-dim-gray mt-6">
            With over five decades of extensive experience under its belt,
            Filinvest’s name has become synonymous with property development. In
            line with its commitment to build the Filipino dream, the company
            has developed over 2,500 hectares of land into homes for more than
            160,000 families.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-6">
            <div>
              <Image
                src="/build-careers.png"
                width={105}
                height={105}
                alt="Picture of the author"
              />
            </div>
            <h3 className="text-jet text-2xl font-bold">
              Build Your Career and Attain Personal Fulfillment
            </h3>
          </div>
          <p className="text-dim-gray mt-6">
            Find a sense of security by joining a continuously growing company.
            Filinvest is expected to sustain its growth momentum alongside the
            Philippines’ sound economic fundamentals. It is also seen to reap
            the benefits of a soaring demand for more office spaces as the BPO
            sector and other key industries remain strong.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-6">
            <div>
              <Image
                src="/innovative-careers.png"
                width={105}
                height={105}
                alt="Picture of the author"
              />
            </div>
            <h3 className="text-jet text-2xl font-bold">
              Work with a Dynamic, Innovative Company
            </h3>
          </div>
          <p className="text-dim-gray mt-6">
            Discover unchartered territories with one of the giants in property
            development. Filinvest continues to expand its geographic footprint
            with new projects in Bacolod, Dumaguete and Iloilo. Propelled by its
            mission to help Filipinos build their dream home, Filinvest plans to
            roll out more projects in new areas soon.
          </p>
        </div>
      </div>
      <h2 className="text-dark-cornflower-blue mt-20 text-center text-4xl font-bold">
        Open Positions
      </h2>
      <Positions />
    </section>
  );
};

export default Content;
