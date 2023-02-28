import Content from "@/components/pages/about-us/company-background/Content";
import { metaBuilder } from "@/helpers/metaBuilder";
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

export async function generateMetadata() {
  const content = await getPageContent("639a584bb60dc36e6fc86d90");
  return metaBuilder(content);
}

const CompanyBackgroundPage = async () => {
  const news = await getNews();
  const content = await getPageContent("639a584bb60dc36e6fc86d90");
  return <Content content={content} news={news} />;
};

export default CompanyBackgroundPage;
