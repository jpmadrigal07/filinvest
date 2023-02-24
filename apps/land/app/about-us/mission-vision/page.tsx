import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/about-us/constants";
import MissionVisionCoreValues from "@/components/pages/about-us/mission-vision/MissionVisionCoreValues";
import News from "@/components/pages/about-us/mission-vision/News";
import qs from "qs";

const query = {
  "site.title": {
    equals: "Land",
  },
  limit: 3,
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
  const res = await fetch(`${process.env.CMS_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const MissionVisionPage = async () => {
  const news = await getNews();
  const content = await getPageContent("639a586ab60dc36e6fc86dc4");
  const { title, breadcrumbs, image, tabs, imageSmall } =
    HEADER_INFO.missionVision;
  return (
    <>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        bgUrlSmall={imageSmall}
        tabs={tabs}
      />
      <MissionVisionCoreValues content={content} />
      <News news={news} />
    </>
  );
};

export default MissionVisionPage;
