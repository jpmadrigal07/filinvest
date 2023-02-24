import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/pusong-filinvest/constants";
import Content from "@/components/pages/pusong-filinvest/Content";
import CorporateSocialResponsibility from "@/components/pages/pusong-filinvest/CorporateSocialResponsibility";
import Gallery from "@/components/pages/pusong-filinvest/Gallery";
import News from "@/components/pages/pusong-filinvest/News";
import OurStory from "@/components/pages/pusong-filinvest/OurStory";
import qs from "qs";

const query = {
  "site.title": {
    equals: "Land",
  },
};

const stringifiedQuery = qs.stringify(
  {
    where: query, // ensure that `qs` adds the `where` property, too!
  },
  { addQueryPrefix: true }
);

async function getNews() {
  const res = await fetch(
    `${process.env.CMS_URL}/api/news${stringifiedQuery}&limit=3`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const jsonData = await res.json();
  return jsonData.docs ? jsonData.docs : null;
}

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_API_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const PusongFilinvestPage = async () => {
  const news = await getNews();
  const content = await getPageContent("639a57cab60dc36e6fc86cc7");
  const { title, breadcrumbs, image, imageSmall } = HEADER_INFO.pusongFilinvest;
  return (
    <>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        bgUrlSmall={imageSmall}
      />
      {/* <Content news={news} /> */}
      <OurStory content={content} />
      <CorporateSocialResponsibility content={content} />
      <Gallery content={content} />
      <News news={news} />
    </>
  );
};

export default PusongFilinvestPage;
