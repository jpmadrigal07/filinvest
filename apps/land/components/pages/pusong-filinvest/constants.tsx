import Breadcrumbs from "../../header/Breadcrumbs";
import ROUTES from "@/helpers/routes";

const { HOME, PUSONG_FILINVEST } = ROUTES;

const BREADCRUMBS = [
  {
    title: HOME.name,
    link: HOME.url,
  },
];

const headerImage = "pusong-filinvest.png";
const customTitle = "#Pusongfilinvest";

export const HEADER_INFO = {
  pusongFilinvest: {
    title: customTitle,
    breadcrumbs: (
      <Breadcrumbs items={[...BREADCRUMBS, { title: PUSONG_FILINVEST.name }]} />
    ),
    image: headerImage,
  },
};
