import Content from "@/components/pages/our-businesses/townscapes/Content";
import { getRequest } from "@/helpers/getRequest";
import { metaBuilder } from "@/helpers/metaBuilder";
import qs from "qs";

const query = {
  "projectType.title": {
    equals: "Townscapes",
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
  const content = await getPageContent("63f1dc7cfa79c21ee7bb5ec1");
  return metaBuilder(content);
}

const TownscapesPage = async () => {
  const content = await getPageContent("63f1dc7cfa79c21ee7bb5ec1");
  const projects = await getRequest(`/api/projects${stringifiedQuery}`);
  const locations = await getRequest(`/api/location-categories`);
  return (
    <Content content={content} projects={projects} locations={locations} />
  );
};

export default TownscapesPage;
