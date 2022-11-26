import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <section>
      <div className="border-gainsboro flex gap-9 border-b-[1px]">
        <div className="my-4 lg:mx-9 xl:mx-16 2xl:mx-44">
          <div className="flex items-center gap-4">
            <Image
              src="/activa-logo.png"
              width={128}
              height={25}
              alt="Picture of the author"
            />
            <h3 className="text-jet text-2xl font-bold">Activa Cubao</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
