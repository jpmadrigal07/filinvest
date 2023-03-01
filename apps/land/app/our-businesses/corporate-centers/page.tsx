import Content from "@/components/pages/our-businesses/corporate-centers/Content";
import qs from "qs";
import { getRequest } from "@/helpers/getRequest";
import { metaBuilder } from "@/helpers/metaBuilder";

const query = {
  "projectType.title": {
    equals: "Corporate Centers",
  },
};

const stringifiedQuery = qs.stringify(
  {
    where: query, // ensure that `qs` adds the `where` property, too!
  },
  { addQueryPrefix: true }
);

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_URL}/api/pages/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata() {
  const content = await getPageContent("63ff09f249eeffea13ebb96d");
  return metaBuilder(content);
}

const CorporateCentersPage = async () => {
  const content = await getPageContent("63ff09f249eeffea13ebb96d");
  const projects = await getRequest(`/api/projects${stringifiedQuery}`);
  const locations = await getRequest(`/api/location-categories`);
  return (
    <>
      <Content content={content} projects={projects} locations={locations} />
    </>
  );
};

export default CorporateCentersPage;
