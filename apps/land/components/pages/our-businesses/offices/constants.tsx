import Breadcrumbs from "@/components/header/Breadcrumbs";
import ROUTES from "@/helpers/routes";

const { OUR_BUSINESSES } = ROUTES;
const { OFFICE_PARKS, OFFICES } = OUR_BUSINESSES;

const BREADCRUMBS = [
  {
    title: OUR_BUSINESSES.name,
    link: OUR_BUSINESSES.url,
  },
];

const headerImage = "office-parks.png";

export const HEADER_INFO = {
  officeParks: {
    title: OFFICE_PARKS.name,
    breadcrumbs: (
      <Breadcrumbs items={[...BREADCRUMBS, { title: OFFICE_PARKS.name }]} />
    ),
    image: headerImage,
  },
  offices: {
    title: OFFICES.name,
    breadcrumbs: (
      <Breadcrumbs items={[...BREADCRUMBS, { title: OFFICES.name }]} />
    ),
    image: "office-header-bg.png",
  },
};
