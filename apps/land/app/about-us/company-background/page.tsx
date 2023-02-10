import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/about-us/constants";
import Content from "@/components/pages/about-us/company-background/Content";
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
    `${process.env.CMS_API_URL}/api/news${stringifiedQuery}&limit=3`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const jsonData = await res.json();
  return jsonData.docs ? jsonData.docs : null;
}

const CompanyBackgroundPage = async () => {
  const news = await getNews();
  const { title, breadcrumbs, image, tabs, imageSmall } =
    HEADER_INFO.companyBackground;
  return (
    <div>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        bgUrlSmall={imageSmall}
        tabs={tabs}
      />
      <Content news={news} />
    </div>
  );
};

export default CompanyBackgroundPage;
