import Link from "next/link";
import React from "react";

const contacts = [
  {
    unit: "Real Estate Products under Filinvest Land, Inc.",
    contact: "dpo.fli@filinvestland.com",
  },
  {
    unit: "Real Estate Products under Filinvest Alabang, Inc.",
    contact: "dpo.fai@filinvestcity.com",
  },
  { unit: "HOA and Property Management", contact: "dpo@proexcel.com.ph" },
  { unit: "Sellers’ Network", contact: "dpo.promax@filinvestland.com" },
  {
    unit: "Malls and Commercial Centers",
    contact: "dpo.fsi@filinvestlifemalls.com",
  },
  { unit: "", contact: "dpo.flc@filinvestlifemalls.com" },
  { unit: "Leasing", contact: "dpo.fci@filinvestcity.com" },
  { unit: "", contact: "dpo.cpi@filinvestcity.com" },
  { unit: "Water Distribution Utility", contact: "dpo.cwsi@filinvestland.com" },
  { unit: "The Palms Country Club", contact: "dpo@thepalmsclub.com" },
  {
    unit: "Timberland Sports and Nature Club",
    contact: "dpo@timberlandclub.com",
  },
  {
    unit: "Quest Hotel and Conference Center – Cebu",
    contact: "dpo.cebu@questhotelsandresorts.com",
  },
  {
    unit: "Quest Hotel and Conference Center – Clark",
    contact: "dpo.clark@questhotelsandresorts.com",
  },
  { unit: "Crimson Hotel – Alabang", contact: "dpo.alabang@crimsonhotel.com" },
  {
    unit: "Crimson Resort and Spa – Mactan",
    contact: "dpo.mactan@crimsonhotel.com",
  },
  {
    unit: "Crimson Resort and Spa – Boracay",
    contact: "dpo.boracay@crimsonhotel.com",
  },
];

const Content = () => {
  return (
    <section className="mx-3 mt-16 mb-28 flex flex-col gap-6 lg:mx-9 xl:mx-16 2xl:mx-44">
      <p className="text-dim-gray">
        FILINVEST DEVELOPMENT CORPORATION (“FDC”) FILINVEST LAND, INC. (“FLI”),
        together with{" "}
        <Link
          href="/affiliates"
          className="text-dark-cornflower-blue underline"
        >
          their respective affiliates and wholly-owned subsidiaries
        </Link>{" "}
        (collectively, the “Filinvest Group”) are committed to the protection
        and security of your personal information (“Personal Information”) in
        accordance with Republic Act No. 10173 or the Data Privacy Act of 2012,
        its Implementing Rules and Regulations and other issuances of the
        National Privacy Commission (“NPC”).
      </p>
      <p className="text-dim-gray">
        This Privacy Statement discloses how the Filinvest Group, through its
        authorized representatives and employees, will process the Personal
        Information you submit in connection with your dealings with us.
      </p>
      <ol className="text-dim-gray ml-5 list-[decimal]">
        <li className="my-4">
          Collection
          <ol className="ml-5 list-[lower-alpha]">
            <li>
              Type of data collected
              <ol className="ml-5 list-outside list-[disc]">
                <li>
                  Information relating to your identity, such as but not limited
                  to your name, gender, place and date of birth, nationality,
                  civil status, permanent and present residential address,
                  contact details, and details of government-issued
                  registrations;
                </li>
                <li>
                  Information relating to your financial capacity, such as but
                  not limited to credit history and/or credit card information;
                </li>
                <li>
                  Information relating to your educational and professional
                  background, such as but not limited to curriculum vitae,
                  employment and medical history; and
                </li>
                <li>Information about your visit and use of our websites.</li>
              </ol>
            </li>
            <li>
              Manner of data collection
              <ol className="ml-5 list-outside list-[disc]">
                <li>Cookie-based, upon use or access of our websites; and </li>
                <li>
                  Consent-based, upon submission of any forms to our employees
                  or duly-authorized representatives/agents or subscription to
                  our newsletters.
                </li>
              </ol>
            </li>
            <li>
              Consent to data collection
              <p>
                By submitting your Personal Information pursuant to any of your
                dealings with the Filinvest Group or by accessing this website,
                you consent to the collection, use, storage and all other forms
                of processing of your Personal Information in accordance with
                this Privacy Statement. Any disclosure of Personal Information
                pertaining to another person (such as spouse, partners,
                dependents, or emergency contact persons) shall be construed as
                bearing the consent of such third party.
              </p>
            </li>
          </ol>
        </li>
        <li className="my-3">
          Use and Purpose
          <p>
            The Personal Information we collected from you will be used for the
            following intended purposes:
          </p>
          <ol className="ml-5 mt-3 list-outside list-[lower-alpha]">
            <li>
              For buyers of products/services, homeowners and/or residents of
              subdivisions/condominium projects, club members, lessees, tenants,
              and hotel guests –
              <ol className="ml-5 list-outside list-[disc]">
                <li>
                  Determine the qualification to avail of the Company’s products
                  and/or services;{" "}
                </li>
                <li>
                  Fulfill and monitor the status of contractual obligations of
                  the buyers and disseminate service and/or product related
                  information and notices;{" "}
                </li>
                <li>
                  Enable the Company to respond to buyers and potential clients’
                  queries, requests and/or complaints;{" "}
                </li>
                <li>
                  Enhance customer experience by delivering products and/or
                  services suited to the specific requirements of the clients;
                  and{" "}
                </li>
                <li>
                  Process information for statistical, analytical, advertising,
                  and market opinion research purposes.{" "}
                </li>
              </ol>
            </li>
            <li>
              For employees, job applicants and accredited sellers and brokers –
              <ol className="ml-5 list-outside list-[disc]">
                <li>Identify the employees and applicants of the Company; </li>
                <li>
                  Perform general administrative and personnel management
                  actions such as, but not limited to, recruitment, assessment
                  of suitability, performance appraisal, promotion, training,
                  career development, remuneration, health and safety and
                  discipline;{" "}
                </li>
                <li>
                  Disseminate information regarding HR updates and company
                  policies; and{" "}
                </li>
                <li>
                  Process information for statistical, analytical, advertising,
                  and market opinion research purposes.
                </li>
              </ol>
            </li>
            <li>
              For stockholders of FDC and FLI –
              <ol className="ml-5 list-outside list-[disc]">
                <li>
                  Establish identity as a stockholder-of-record in order to
                  provide you services and facilitate your exercise of rights as
                  such stockholder, such as but not limited to appointment of
                  proxies, payment of dividends, and registration of your
                  shareholdings in the stock and transfer books;{" "}
                </li>
                <li>
                  Comply with the mandatory and legal reportorial obligations to
                  government agencies and self-regulating organizations; and{" "}
                </li>
                <li>
                  Conduct statistical and analytical studies as well as
                  advertising, and market opinion researches.{" "}
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li className="my-4">
          Sharing and Disclosure
          <p>
            Insofar as you have provided your consent or when we are otherwise
            legally entitled to do so, we will share your Personal Information
            with the affiliated entities and subsidiaries of the Filinvest Group
            where applicable, for the purposes indicated above.{" "}
          </p>
          <p className="mt-3">
            Your Personal Information possessed by the Filinvest Group shall be
            kept confidential. However, it may be necessary for the Filinvest
            Group to disclose and transfer your Personal Information to third
            party companies, entities, or service providers engaged by the
            Filinvest Group to perform certain services on its behalf, including
            the following:{" "}
          </p>
          <ol className="mt-3 ml-5 list-[disc]">
            <li>Government agencies such as SSS, PhilHealth, HDMF; </li>
            <li>Banking and financial institutions; </li>
            <li>Insurance providers; </li>
            <li>Storage facility providers; </li>
            <li>
              External advisors and other professional advisors, such as
              auditors and legal firms;{" "}
            </li>
            <li>Contractors or sub-contractors; and </li>
            <li>
              Such other service providers that may be appointed by the
              Filinvest Group including background investigators.{" "}
            </li>
          </ol>
        </li>
        <li className="my-4">
          Retention and Disposal
          <p>
            The Filinvest Group takes all necessary technical, organizational
            and physical measures to protect the confidentiality and security of
            your Personal Information. These efforts include, but are not
            necessarily limited to: (i) storing your Personal Information in
            secure operating environments that are not available to the public
            and that are only accessible to authorized employees, and our agents
            and contractors; and (ii) disposing of the documents containing your
            Personal Information through shredding or such other similar modes
            of secure disposal that prevents unauthorized access, further
            processing or public disclosure.
          </p>
          <p className="mt-3">
            The Filinvest Group shall retain your Personal Information as long
            as you continue to be legally related with the Filinvest Group or
            until any disputes involving the same have been judicially resolved
            with finality.{" "}
          </p>
        </li>
        <li className="my-4">
          Use of Cookies
          <p>
            Our website uses “Cookies” to identify the areas of our website that
            you have visited. A Cookie is a small piece of data stored on your
            computer or mobile device by your web browser. We use Cookies to
            personalize the content that you see on our website. Most web
            browsers can be set to disable the use of Cookies. However, if you
            disable Cookies, you may not be able to access functionality on our
            website correctly or at all. We never place personal information in
            Cookies.{" "}
          </p>
        </li>
        <li className="my-4">
          Amendments, Questions and Comments
          <p>
            The Filinvest Group undertakes to respond to reasonable requests to
            review your Personal Information collected by us and to correct any
            inaccuracies, amend or delete any entry in accordance with your
            rights under the Data Privacy Act of 2012.{" "}
          </p>
          <p className="mt-3">
            The Filinvest Group may revise and update this Privacy Statement
            from time to time. Should you have any questions or comments about
            how the Filinvest Group processes your Personal Information, you may
            contact:
          </p>
          <p className="mt-3">
            <span className="font-bold">DATA PROTECTION OFFICER</span>
            <br />
            Filinvest Building, 79 EDSA, Highway Hills, Mandaluyong City
            <br />
            02 7918 8188 loc. 3026
            <br />
            dpo.fdc@filinvestland.com
            <br />
          </p>
        </li>
      </ol>
      <p className="text-dim-gray">
        For privacy concerns related to specific business units within the
        Filinvest Group, please refer to the following contact details:
      </p>
      <div className="flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-dark-cornflower-blue">
                  <tr className="divide-x divide-gray-200">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-white sm:pl-6"
                    >
                      Business Units
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-white"
                    >
                      E-mail Address
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {contacts.map((contact, index) => (
                    <tr key={index} className="divide-x divide-gray-200">
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                        {contact.unit}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        <Link
                          href={`mailto:${contact.contact}`}
                          className="hover:underline"
                        >
                          {contact.contact}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <p className="text-dim-gray">
        By using our website, you are subject to our Terms and Conditions. Click{" "}
        <Link href="/terms" className="text-dark-cornflower-blue underline">
          here
        </Link>{" "}
        for more information.
      </p>
    </section>
  );
};

export default Content;
