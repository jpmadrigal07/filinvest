import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/pusong-filinvest/constants";
import Content from "@/components/pages/pusong-filinvest/Content";
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

const PusongFilinvestPage = async () => {
  const news = await getNews();
  const { title, breadcrumbs, image, imageSmall } = HEADER_INFO.pusongFilinvest;
  return (
    <>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        bgUrlSmall={imageSmall}
      />
      <Content news={news} />
    </>
  );
};

export default PusongFilinvestPage;
