import Breadcrumbs from "../../header/Breadcrumbs";
import Tabs from "../../header/Tabs";
import ROUTES from "@/helpers/routes";

const { ABOUT_US } = ROUTES;
const { MISSION_VISION, COMPANY_BACKGROUND } = ABOUT_US;

const TAB_ITEMS = [
  {
    title: COMPANY_BACKGROUND.name,
    link: COMPANY_BACKGROUND.url,
  },
  {
    title: MISSION_VISION.name,
    link: MISSION_VISION.url,
  },
];

const BREADCRUMBS = [
  {
    title: ABOUT_US.name,
    link: ABOUT_US.url,
  },
];

const headerImage = "company-background-2.png";
const customTitle = "We Build The Filipino Dream";

export const HEADER_INFO = {
  companyBackground: {
    title: customTitle,
    breadcrumbs: (
      <Breadcrumbs
        items={[...BREADCRUMBS, { title: COMPANY_BACKGROUND.name }]}
      />
    ),
    image: headerImage,
    tabs: <Tabs items={TAB_ITEMS} />,
  },
  missionVision: {
    title: customTitle,
    breadcrumbs: (
      <Breadcrumbs items={[...BREADCRUMBS, { title: MISSION_VISION.name }]} />
    ),
    image: headerImage,
    tabs: <Tabs items={TAB_ITEMS} />,
  },
};
