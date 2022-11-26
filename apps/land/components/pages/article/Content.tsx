import BorderButton from "@/components/button/BorderButton";
import Facebook from "@/components/svg/Facebook";
import LinkedIn from "@/components/svg/LinkedIn";
import Twitter from "@/components/svg/Twitter";
import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <section className="-mt-48 gap-9 lg:mx-9 xl:mx-16 2xl:mx-44 2xl:-mt-72">
      <div className="flex flex-col items-center gap-6">
        <Image
          src={`/article.png`}
          width={1036}
          height={806}
          alt="Picture of the author"
        />
        <div className="mt-8 flex flex-col items-center gap-4">
          <Image
            src={`/convenient-filpayall.png`}
            width={98}
            height={98}
            alt="Picture of the author"
          />
          <div>
            <h3 className="text-jet text-center text-xl font-bold">
              Jessica Simson | Marketing Manager
            </h3>
            <h4 className="text-vivid-sky-blue text-center text-lg">
              @jessicasim
            </h4>
          </div>
        </div>
        <div className="mt-16 flex gap-14">
          <div className="flex-none">
            <div className="border-blue-ryb flex flex-col border-t-4">
              <h3 className="text-jet text-center text-4xl font-bold">23</h3>
              <p className="text-jet text-center text-xs">OCT, 17</p>
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <div className="border-silver-chalice rounded-full border-[1px] bg-white p-4">
                <Facebook color="#303030" />
              </div>
              <div className="border-silver-chalice rounded-full border-[1px] bg-white p-4">
                <Twitter color="#303030" />
              </div>
              <div className="border-silver-chalice rounded-full border-[1px] bg-white p-4">
                <LinkedIn color="#303030" />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-6">
            <h2 className="text-jet text-4xl font-bold">
              Pharetra diam sit amet nisl suscipit adipiscing. Amet nulla
              facilisi morbi tempus iaculis urna id.
            </h2>
            <p className="text-dim-gray">
              Pharetra sit amet aliquam id diam maecenas ultricies mi eget.
              Bibendum arcu vitae elementum curabitur. Ac tincidunt vitae semper
              quis lectus nulla at. Neque aliquam vestibulum morbi blandit
              cursus. Massa tincidunt dui ut ornare. Enim sit amet venenatis
              urna. Morbi enim nunc faucibus a pellentesque sit amet porttitor.
              Sit amet nisl suscipit adipiscing bibendum est. Et odio
              pellentesque diam volutpat commodo. Quisque egestas diam in arcu
              cursus euismod quis. Egestas erat imperdiet sed euismod nisi porta
              lorem mollis aliquam. Cras sed felis eget velit aliquet sagittis
              id. Tempus urna et pharetra pharetra massa massa ultricies. Tellus
              elementum sagittis vitae et.
            </p>
            <p className="text-dim-gray">
              Tincidunt dui ut ornare lectus sit amet. Est pellentesque elit
              ullamcorper dignissim cras. Elit at imperdiet dui accumsan sit
              amet. Diam phasellus vestibulum lorem sed risus ultricies
              tristique nulla aliquet. Natoque penatibus et magnis dis
              parturient montes. Quis ipsum suspendisse ultrices gravida dictum
              fusce ut placerat. Nisi quis eleifend quam adipiscing vitae proin
              sagittis nisl rhoncus. At lectus urna duis convallis. Imperdiet
              nulla malesuada pellentesque elit eget. Ultrices eros in cursus
              turpis massa. Vitae tempus quam pellentesque nec nam aliquam sem.
            </p>
            <Image
              src={`/article.png`}
              width={1036}
              height={806}
              alt="Picture of the author"
            />
            <h2 className="text-jet text-4xl font-bold">
              Massa tincidunt dui ut ornare
            </h2>
            <p className="text-dim-gray">
              Pharetra sit amet aliquam id diam maecenas ultricies mi eget.
              Bibendum arcu vitae elementum curabitur. Ac tincidunt vitae semper
              quis lectus nulla at. Neque aliquam vestibulum morbi blandit
              cursus. Massa tincidunt dui ut ornare. Enim sit amet venenatis
              urna. Morbi enim nunc faucibus a pellentesque sit amet porttitor.
              Sit amet nisl suscipit adipiscing bibendum est. Et odio
              pellentesque diam volutpat commodo. Quisque egestas diam in arcu
              cursus euismod quis. Egestas erat imperdiet sed euismod nisi porta
              lorem mollis aliquam. Cras sed felis eget velit aliquet sagittis
              id. Tempus urna et pharetra pharetra massa massa ultricies. Tellus
              elementum sagittis vitae et.
            </p>
            <div className="flex gap-4">
              <div className="flex-1">
                <Image
                  src={`/article.png`}
                  width={1036}
                  height={806}
                  alt="Picture of the author"
                />
              </div>
              <div className="flex-1">
                <Image
                  src={`/article.png`}
                  width={1036}
                  height={806}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <h5 className="border-blue-ryb text-sonic-silver border-l-4 pl-6 text-xl italic">
              Pharetra sit amet aliquam id diam maecenas ultricies mi eget.
              Bibendum arcu vitae elementum curabitur. Ac tincidunt vitae semper
              quis lectus nulla at. Neque aliquam vestibulum morbi blandit
              cursus. Massa tincidunt dui ut ornare. Enim sit amet venenatis
              urna. Morbi enim nunc faucibus a pellentesque sit amet porttitor.
            </h5>
            <h3 className="text-bold mt-6 text-xl">
              Tags: <span className="text-vivid-sky-blue">HOUSING</span>
            </h3>
            <div className="flex gap-3">
              <div className="border-silver-chalice rounded-full border-[1px] bg-white p-4">
                <Facebook color="#303030" />
              </div>
              <div className="border-silver-chalice rounded-full border-[1px] bg-white p-4">
                <Twitter color="#303030" />
              </div>
              <div className="border-silver-chalice rounded-full border-[1px] bg-white p-4">
                <LinkedIn color="#303030" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 flex w-full items-center gap-8">
          <h3 className="text-jet flex-none text-4xl font-bold">
            Related Articles
          </h3>
          <hr className="w-full flex-1" />
        </div>
        <div className="mt-14 mb-24 flex gap-12">
          <div>
            <Image
              src="/award-news.png"
              width={1036}
              height={806}
              alt="Picture of the author"
            />
            <h2 className="text-jet mt-6 text-2xl font-bold">
              Filinvest Land Inc. Wins Dot Property’s Best Developer – North
              Luzon and Mindanao Awards
            </h2>
            <h4 className="text-dim-gray mt-4">
              Mattis molestie a iaculis at erat pellentesque adipiscing commodo
              nunc lobortis mattis.
            </h4>
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
              src="/award-2-news.png"
              width={1036}
              height={806}
              alt="Picture of the author"
            />
            <h2 className="text-jet mt-6 text-2xl font-bold">{`Filinvest Land, Inc. honored at BCI Asia's Top 10 Best Developer Awards`}</h2>
            <h4 className="text-dim-gray mt-4">
              Mattis molestie a iaculis at erat pellentesque adipiscing commodo
              nunc lobortis mattis.
            </h4>
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
              src="/award-3-news.png"
              width={1036}
              height={806}
              alt="Picture of the author"
            />
            <h2 className="text-jet mt-6 text-2xl font-bold">
              Filinvest Activa recognized as the Best Mixed-use Development by
              Dot Property
            </h2>
            <h4 className="text-dim-gray mt-4">
              Mattis molestie a iaculis at erat pellentesque adipiscing commodo
              nunc lobortis mattis.
            </h4>
            <div className="mt-12">
              <BorderButton
                buttonText="Read More"
                textColor="dark-cornflower-blue"
                borderColor="dark-cornflower-blue"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
