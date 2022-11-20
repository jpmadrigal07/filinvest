import Breadcrumbs from "@/components/header/Breadcrumbs";
import Tabs from "@/components/header/Tabs";
import ROUTES from "@/helpers/routes";

const { INVESTOR_RELATIONS } = ROUTES;
const { CORPORATE_GOVERNANCE } = INVESTOR_RELATIONS;
const { BOARD_COMMITTEES } = CORPORATE_GOVERNANCE;
const { ENTERPRISE_RISK_MANAGEMENT } = BOARD_COMMITTEES;

const TAB_ITEMS = [
  {
    title: ENTERPRISE_RISK_MANAGEMENT.name,
    link: ENTERPRISE_RISK_MANAGEMENT.url,
  },
];

const BREADCRUMBS = [
  {
    title: INVESTOR_RELATIONS.name,
    link: INVESTOR_RELATIONS.url,
  },
  {
    title: CORPORATE_GOVERNANCE.name,
    link: CORPORATE_GOVERNANCE.url,
  },
  {
    title: BOARD_COMMITTEES.name,
    link: BOARD_COMMITTEES.url,
  },
];

const headerImage = "corporate-governance.png";

export const HEADER_INFO = {
  enterpriseRiskManagement: {
    title: ENTERPRISE_RISK_MANAGEMENT.name,
    breadcrumbs: (
      <Breadcrumbs
        items={[...BREADCRUMBS, { title: ENTERPRISE_RISK_MANAGEMENT.name }]}
      />
    ),
    image: headerImage,
    tabs: <Tabs items={TAB_ITEMS} />,
  },
};
