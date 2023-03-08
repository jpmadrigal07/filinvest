import qs from "qs";
import { getRequest } from "@/helpers/getRequest";
import Content from "@/components/pages/our-businesses/offices/Content";
import { metaBuilder } from "@/helpers/metaBuilder";
import { CACHE_REVALIDATE } from "@/helpers/constants";
async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_URL}/api/pages/${id}`, {
    next: { revalidate: CACHE_REVALIDATE },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const query = {
  "projectType.title": {
    equals: "Offices",
  },
};

const stringifiedQuery = qs.stringify(
  {
    where: query, // ensure that `qs` adds the `where` property, too!
  },
  { addQueryPrefix: true }
);

export async function generateMetadata() {
  const content = await getPageContent("63f1c8faaf1792ce5d297e9e");
  return metaBuilder(content);
}

const OfficePage = async () => {
  const content = await getPageContent("63f1c8faaf1792ce5d297e9e");
  const projects = await getRequest(`/api/projects${stringifiedQuery}`);
  const locations = await getRequest(`/api/location-categories`);
  return (
    <Content content={content} projects={projects} locations={locations} />
  );
};

export default OfficePage;
