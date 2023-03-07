import Content from "@/components/pages/our-businesses/malls/Content";
import qs from "qs";
import { getRequest } from "@/helpers/getRequest";
import { metaBuilder } from "@/helpers/metaBuilder";
import { CACHE_REVALIDATE } from "@/helpers/constants";

const query = {
  "projectType.title": {
    equals: "Malls",
  },
};

const stringifiedQuery = qs.stringify(
  {
    where: query, // ensure that `qs` adds the `where` property, too!
  },
  { addQueryPrefix: true }
);

export async function generateMetadata() {
  const content = await getPageContent("63feca49c071b06a75f42de4");
  return metaBuilder(content);
}

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_URL}/api/pages/${id}`, {
    next: { revalidate: CACHE_REVALIDATE },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const MallsPage = async () => {
  const content = await getPageContent("63feca49c071b06a75f42de4");
  const projects = await getRequest(`/api/projects${stringifiedQuery}`);
  const locations = await getRequest(`/api/location-categories`);
  return (
    <>
      <Content content={content} projects={projects} locations={locations} />
    </>
  );
};

export default MallsPage;
