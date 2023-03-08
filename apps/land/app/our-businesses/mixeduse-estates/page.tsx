import Content from "@/components/pages/our-businesses/mixeduse-estates/Content";
import qs from "qs";
import { getRequest } from "@/helpers/getRequest";
import { metaBuilder } from "@/helpers/metaBuilder";
import { CACHE_REVALIDATE } from "@/helpers/constants";

const query = {
  "projectType.title": {
    equals: "Mixed-use",
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
  const content = await getPageContent("63f1e2b44c33ce3025f5a813");
  return metaBuilder(content);
}

const MixeduseEstatesPage = async () => {
  const content = await getPageContent("63f1e2b44c33ce3025f5a813");
  const projects = await getRequest(`/api/projects${stringifiedQuery}`);
  const locations = await getRequest(`/api/location-categories`);
  return (
    <Content content={content} projects={projects} locations={locations} />
  );
};

export default MixeduseEstatesPage;
