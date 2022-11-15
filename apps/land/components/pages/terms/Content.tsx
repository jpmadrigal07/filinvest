import Link from "next/link";
import React from "react";

const Content = () => {
  return (
    <section className="mx-3 mt-16 mb-28 flex flex-col gap-6 lg:mx-9 xl:mx-16 2xl:mx-44">
      <h2 className="text-jet text-4xl font-bold">Legal Notice</h2>
      <p className="text-dim-gray">
        Please read this notice carefully. It regulates your use of this site
        and all material contained within it. Access to and use of this
        filinvest.com website is subject to the following terms:
      </p>
      <p className="text-dim-gray">
        FILINVEST LAND, INC. (FLI) has exerted every effort to make sure that
        all information contained herein is reliable, but the accuracy of any
        information is not warranted or guaranteed.
      </p>
      <p className="text-dim-gray">
        FLI is not responsible for any errors or omissions contained in this
        website and reserves the right to make changes without prior notice.
        Nothing on this website is intended to be or should be taken as being
        advise or a recommendation. You should not rely on the information in
        the website for any purpose. You are advised to verify with other
        sources or consult with a competent professional of your choice about
        any information contained in this website.
      </p>
      <p className="text-dim-gray">
        You may not distribute, modify, transmit, reuse, repost, or use any of
        the contents of this website. No reproduction of any part of this site
        may be sold or distributed for commercial gain nor shall it be modified
        or incorporated in any other work, publication, or site, whether in hard
        copy or electronic format, without the written permission of FLI. No
        other license or right is granted.
      </p>
      <p className="text-dim-gray">
        This website may contain materials in which third parties have
        proprietary rights, including without limitation logos or brand names
        which are the trademarks of third parties. FLI grants no license
        regarding their use and disclaims any liability with regard to
        infringement of such third parties’ rights.
      </p>
      <p className="text-dim-gray">
        You may be offered automatic links to other Internet sites relevant to a
        particular aspect of this website for your convenience. Unless expressly
        indicated, FLI or affiliates are not associated with any of these other
        sites or their owners.
      </p>
      <p className="text-dim-gray">
        FLI, its subsidiaries, or any of its affiliates, officers, employees,
        and agents have no responsibility or liability of any nature whatever
        for these other sites or any information contained in them, none of
        which have been verified or endorsed by FLI or its affiliates. If at any
        time you find that you have accessed another site, you may return to
        this site by clicking on the “Back” arrow or by keying in the domain
        address of FLI.
      </p>
      <p className="text-dim-gray">
        For more information on why and how we collect your personal data,
        please read our{" "}
        <Link
          href="/privacy-policy"
          className="text-dark-cornflower-blue underline"
        >
          Privacy Policy.
        </Link>
      </p>
    </section>
  );
};

export default Content;
