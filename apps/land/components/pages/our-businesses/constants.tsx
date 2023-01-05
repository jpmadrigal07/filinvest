import Breadcrumbs from "@/components/header/Breadcrumbs";
import ROUTES from "@/helpers/routes";

const { OUR_BUSINESSES } = ROUTES;
const { RESIDENTIAL, CORPORATE_CENTERS } = OUR_BUSINESSES;

const BREADCRUMBS = [
  {
    title: OUR_BUSINESSES.name,
    link: OUR_BUSINESSES.url,
  },
];

const headerImage = "office-parks.png";

export const HEADER_INFO = {
  residential: {
    title: RESIDENTIAL.name,
    breadcrumbs: (
      <Breadcrumbs items={[...BREADCRUMBS, { title: RESIDENTIAL.name }]} />
    ),
    image: headerImage,
  },
  corporateCenters: {
    title: CORPORATE_CENTERS.name,
    breadcrumbs: (
      <Breadcrumbs
        items={[...BREADCRUMBS, { title: CORPORATE_CENTERS.name }]}
      />
    ),
    image: "company-background-2.png",
  },
};
