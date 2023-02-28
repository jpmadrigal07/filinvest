import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/our-businesses/constants";
import Content from "@/components/pages/our-businesses/townscapes/Content";
import qs from "qs";
import { getRequest } from "@/helpers/getRequest";

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

export async function generateMetadata() {
  return {
    title: "Townscapes",
    description: "Townscapes",
  };
}

const TownscapesPage = async () => {
  const projects = await getRequest(`/api/projects${stringifiedQuery}`);
  const locations = await getRequest(`/api/location-categories`);
  const { title, breadcrumbs, image } = HEADER_INFO.townscapes;
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <Content projects={projects} locations={locations} />
    </>
  );
};

export default TownscapesPage;
