import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/about-us/constants";
import Content from "@/components/pages/about-us/company-background/Content";
import qs from "qs";
import YearsOfExperience from "@/components/pages/about-us/company-background/YearsOfExperience";
import ImageRightTextLeft from "@/components/pages/about-us/company-background/ImageRightTextLeft";

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

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_API_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const CompanyBackgroundPage = async () => {
  const news = await getNews();
  const content = await getPageContent("639a584bb60dc36e6fc86d90");
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
      <YearsOfExperience content={content} />
      <ImageRightTextLeft content={content} />
    </div>
  );
};

export default CompanyBackgroundPage;
