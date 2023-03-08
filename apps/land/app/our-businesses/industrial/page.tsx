import Content from "@/components/pages/our-businesses/industrial/Content";
import qs from "qs";
import { getRequest } from "@/helpers/getRequest";
import { metaBuilder } from "@/helpers/metaBuilder";
import { CACHE_REVALIDATE } from "@/helpers/constants";

const query = {
  "projectType.title": {
    equals: "Industrial",
  },
};

const stringifiedQuery = qs.stringify(
  {
    where: query, // ensure that `qs` adds the `where` property, too!
  },
  { addQueryPrefix: true }
);

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_URL}/api/pages/${id}`, {
    next: { revalidate: CACHE_REVALIDATE },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata() {
  const content = await getPageContent("63ff1b132f02ad837b91a520");
  return metaBuilder(content);
}

const IndustrialPage = async () => {
  const content = await getPageContent("63ff1b132f02ad837b91a520");
  const projects = await getRequest(`/api/projects${stringifiedQuery}`);
  const locations = await getRequest(`/api/location-categories`);
  return (
    <>
      <Content content={content} projects={projects} locations={locations} />
    </>
  );
};

export default IndustrialPage;
