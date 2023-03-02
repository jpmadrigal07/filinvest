import MainHeader from "@/components/header/MainHeader";
import { HEADER_INFO } from "@/components/pages/our-businesses/constants";
import Content from "@/components/pages/our-businesses/mixeduse-estates/Content";
import qs from "qs";
import { getRequest } from "@/helpers/getRequest";

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

export async function generateMetadata() {
  return {
    title: "Mixed-used Estates",
    description: "Mixed-used Estates",
  };
}

const MixeduseEstatesPage = async () => {
  const projects = await getRequest(`/api/projects${stringifiedQuery}`);
  const locations = await getRequest(`/api/location-categories`);
  const { title, breadcrumbs, image, imageSmall } = HEADER_INFO.mixedUseEstates;
  return (
    <>
      <MainHeader
        title={title}
        breadcrumbs={breadcrumbs}
        bgUrl={image}
        bgUrlSmall={imageSmall}
      />
      <Content projects={projects} locations={locations} />
    </>
  );
};

export default MixeduseEstatesPage;
