import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/our-businesses/offices/constants";
import OfficeParks from "@/components/pages/our-businesses/offices/OfficeParks";
import qs from "qs";
import { getRequest } from "@/helpers/getRequest";
import ProjectsContent from "@/components/pages/our-businesses/offices/Projects";

async function getPageContent(id: string) {
  const res = await fetch(`${process.env.CMS_URL}/api/pages/${id}`);
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
  return {
    title: "Office",
    description: "Office",
  };
}

const OfficePage = async () => {
  const content = await getPageContent("63f1c8faaf1792ce5d297e9e");
  const projects = await getRequest(`/api/projects${stringifiedQuery}`);
  const locations = await getRequest(`/api/location-categories`);
  const { title, breadcrumbs, image } = HEADER_INFO.offices;
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <OfficeParks
        content={content}
        projects={projects}
        locations={locations}
      />
      <ProjectsContent projects={projects} locations={locations} />
    </>
  );
};

export default OfficePage;
