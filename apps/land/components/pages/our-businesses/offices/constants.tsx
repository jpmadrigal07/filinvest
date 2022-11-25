import Breadcrumbs from "@/components/header/Breadcrumbs";
import ROUTES from "@/helpers/routes";

const { OUR_BUSINESSES } = ROUTES;
const { OFFICES } = OUR_BUSINESSES;
const { OFFICE_PARKS } = OFFICES;

const BREADCRUMBS = [
  {
    title: OUR_BUSINESSES.name,
    link: OUR_BUSINESSES.url,
  },
  {
    title: OFFICES.name,
    link: OFFICES.url,
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
};
