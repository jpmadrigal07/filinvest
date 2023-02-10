import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <section className="short:-mt-32 mx-9 -mt-12 gap-9 lg:-mt-36 xl:mx-16 2xl:mx-44 2xl:-mt-72">
      <div className="flex flex-col gap-12 md:flex-row">
        <div className="flex flex-1 flex-col gap-6">
          <Image
            src={`/award-3-news.png`}
            width={1036}
            height={806}
            alt="Picture of the author"
          />
          <h3 className="text-jet text-1xl font-bold italic">
            November 16, 2021
          </h3>
          <h2 className="text-jet text-3xl font-bold">
            Filinvest Activa recognized as the Best Mixed-use Development by Dot
            Property
          </h2>
          <p className="text-dim-gray">
            Filinvest, one of the country’s largest property developers
            celebrates another milestone as one of its newest projects, Activa,
            a 1.3-hectare mixed-use district in Cubao that offers a holistic
            live-work-play lifestyle was hailed as the Best Mixed-Use
            Development for 2019.
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <Image
            src={`/bci-awards.png`}
            width={1036}
            height={806}
            alt="Picture of the author"
          />
          <h3 className="text-jet text-1xl font-bold italic">
            October 21, 2021
          </h3>
          <h2 className="text-jet text-3xl font-bold">{`Filinvest Land, Inc. honored at BCI Asia's Top 10 Best Developer Awards`}</h2>
          <p className="text-dim-gray">
            Filinvest Land, Inc. was honored as one of the Top 10 developers in
            the Philippines for 2020 and 2021 in the recently concluded BCI Asia
            Awards. This award is one of the most-coveted in the regional
            building industry.
          </p>
        </div>
      </div>
      <div className="mt-16 mb-32 flex  flex-col gap-12 md:flex-row">
        <div className="flex flex-1 flex-col gap-6">
          <Image
            src={`/futura-awards.png`}
            width={1036}
            height={806}
            alt="Picture of the author"
          />
          <h3 className="text-jet text-1xl font-bold italic">June 16, 2018</h3>
          <h2 className="text-jet text-3xl font-bold">
            Claremont Hailed as Luzon’s Best Affordable House of the Year
          </h2>
          <p className="text-dim-gray">
            A peaceful enclave, surrounded by refreshing amenities, framed by
            picturesque vistas of Mt. Arayat and the breathtaking Luzon mountain
            range, and located strategically close to the Clark Special Economic
            Zone, Claremont is a smart value horizontal...
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <Image
            src={`/sorrento-awards.png`}
            width={1036}
            height={806}
            alt="Picture of the author"
          />
          <h3 className="text-jet text-1xl font-bold italic">June 17, 2017</h3>
          <h2 className="text-jet text-3xl font-bold">
            Sorrento Oasis is the Best Affordable Condo of the Year –
            Lamudi.com.ph
          </h2>
          <p className="text-dim-gray">
            The city of Pasig is abuzz—with verve, activity, and a tireless
            dynamism that has catapulted it to one of the top metropolises in
            the country. But in this vigorous urban jungle, there is a quiet
            haven tucked in one of its busiest arteries buffered from the city’s
            booming energy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
