import Breadcrumbs from "../../header/Breadcrumbs";
import Tabs from "../../header/Tabs";
import ROUTES from "../../../helpers/routes";

const { INVESTOR_RELATIONS, HOME } = ROUTES;
const { SHARE_INFORMATION, DIVIDEND_HISTORY, DIVIDEND_POLICY } =
  INVESTOR_RELATIONS;

const TAB_ITEMS = [
  {
    title: SHARE_INFORMATION.name,
    link: SHARE_INFORMATION.url,
  },
  {
    title: DIVIDEND_HISTORY.name,
    link: DIVIDEND_HISTORY.url,
  },
  {
    title: DIVIDEND_POLICY.name,
    link: DIVIDEND_POLICY.url,
  },
];

const BREADCRUMBS = [
  {
    title: HOME.name,
    link: HOME.url,
  },
  {
    title: INVESTOR_RELATIONS.name,
    link: INVESTOR_RELATIONS.url,
  },
];

const dividendHistoryImage = "dividend-history.png";

export const HEADER_INFO = {
  dividendPolicy: {
    title: DIVIDEND_POLICY.name,
    breadcrumbs: (
      <Breadcrumbs items={[...BREADCRUMBS, { title: DIVIDEND_POLICY.name }]} />
    ),
    image: dividendHistoryImage,
    tabs: <Tabs items={TAB_ITEMS} />,
  },
  dividendHistory: {
    title: DIVIDEND_HISTORY.name,
    breadcrumbs: (
      <Breadcrumbs items={[...BREADCRUMBS, { title: DIVIDEND_HISTORY.name }]} />
    ),
    image: dividendHistoryImage,
    tabs: <Tabs items={TAB_ITEMS} />,
  },
  shareInformation: {
    title: SHARE_INFORMATION.name,
    breadcrumbs: (
      <Breadcrumbs
        items={[...BREADCRUMBS, { title: SHARE_INFORMATION.name }]}
      />
    ),
    image: dividendHistoryImage,
    tabs: <Tabs items={TAB_ITEMS} />,
  },
};
