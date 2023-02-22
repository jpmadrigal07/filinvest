import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/our-businesses/constants";
import Content from "@/components/pages/our-businesses/co-living/Content";
import qs from "qs";
import { getRequest } from "@/helpers/getRequest";

const query = {
  "projectType.title": {
    equals: "Co-living",
  },
};

const stringifiedQuery = qs.stringify(
  {
    where: query, // ensure that `qs` adds the `where` property, too!
  },
  { addQueryPrefix: true }
);

const CoLivingPage = async () => {
  const projects = await getRequest(`/api/projects${stringifiedQuery}`);
  const locations = await getRequest(`/api/location-categories`);
  const { title, breadcrumbs, image } = HEADER_INFO.coliving;
  return (
    <>
      <MainHeader title={title} breadcrumbs={breadcrumbs} bgUrl={image} />
      <Content projects={projects} locations={locations} />
    </>
  );
};

export default CoLivingPage;
