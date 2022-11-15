"use client";
import Image from "next/image";
import React from "react";
import BorderButton from "../../button/BorderButton";

const Projects = () => {
  return (
    <section className="pt-72">
      <h4 className="text-dark-cornflower-blue text-center font-bold">
        PROJECTS
      </h4>
      <h2 className="text-jet mt-2 text-center text-4xl font-extrabold">
        Our Flagship Projects
      </h2>
      <h4 className="text-dim-gray mt-4 text-center">
        Filinvest Land properties are some of the most sought after in the
        Philippines.
      </h4>
      <div className="relative mt-28">
        <div className="absolute flex w-1/4 flex-col items-center gap-12 bg-white px-12 pt-4 pb-12">
          <div>
            <Image
              src="/activa-logo.png"
              width={228}
              height={50}
              alt="Picture of the author"
            />
          </div>
          <div>
            <h2 className="text-jet mb-2 text-center text-3xl font-bold">
              Activa Cubao
            </h2>
            <h4 className="text-dim-gray text-center font-bold">
              Neque sodales ut etiam sit amet nisl. Quis lectus nulla at
              volutpat diam. Euismod nisi porta.
            </h4>
          </div>
          <div>
            <button type="button">
              <BorderButton
                buttonText="Learn More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </button>
          </div>
        </div>
        <Image
          src="/projects-activa.png"
          width={2840}
          height={560}
          alt="Picture of the author"
        />
      </div>
    </section>
  );
};

export default Projects;
