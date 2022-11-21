export const INVESTOR_RELATIONS = {
  url: "/investor-relations",
  name: "Investor Relations",
  directory: ["Investor Relations"],
};
const OUR_COMPANY = {
  url: `${INVESTOR_RELATIONS.url}/our-company`,
  name: "Our Company",
  directory: [...INVESTOR_RELATIONS.directory, "Our Company"],
};
const OUR_LEADERSHIP = {
  url: `${INVESTOR_RELATIONS.url}/our-leadership`,
  name: "Our Leadership",
  directory: [...INVESTOR_RELATIONS.directory, "Our Leadership"],
};
const STRUCTURES = {
  url: `${INVESTOR_RELATIONS.url}/structures`,
  name: "Structures",
  directory: [...INVESTOR_RELATIONS.directory, "Structures"],
};

// CORPORATE GOVERNANCE
const CORPORATE_GOVERNANCE = {
  url: `${INVESTOR_RELATIONS.url}/corporate-governance`,
  name: "Corporate Governance",
  directory: [...INVESTOR_RELATIONS.directory, "Corporate Governance"],
};
const BOARD_COMMITTEES = {
  url: `${CORPORATE_GOVERNANCE.url}/board-committees`,
  name: "Board Committees",
  directory: [...CORPORATE_GOVERNANCE.directory, "Board Committees"],
};
const ENTERPRISE_RISK_MANAGEMENT = {
  url: `${BOARD_COMMITTEES.url}/enterprise-risk-management`,
  name: "Enterprise Risk Management",
  directory: [...BOARD_COMMITTEES.directory, "Enterprise Risk Management"],
};
const COMPANY_POLICIES = {
  url: `${BOARD_COMMITTEES.url}/company-policies`,
  name: "Company Policies",
  directory: [...BOARD_COMMITTEES.directory, "Company Policies"],
};
const MANUAL_CORPORATE_GOVERNANCE = {
  url: `${BOARD_COMMITTEES.url}/manual-corporate-governance`,
  name: "Manual Corporate Governance",
  directory: [...BOARD_COMMITTEES.directory, "Manual Corporate Governance"],
};
const CODE_BUSINESS_CONDUCT_ETHICS = {
  url: `${BOARD_COMMITTEES.url}/code-business-conduct-ethics`,
  name: "Code Of Business Conduct & Ethics",
  directory: [
    ...BOARD_COMMITTEES.directory,
    "Code Of Business Conduct & Ethics",
  ],
};
const COMBINED_CORPORATE_GOVERNANCE = {
  ...CORPORATE_GOVERNANCE,
  BOARD_COMMITTEES: {
    ...BOARD_COMMITTEES,
    ENTERPRISE_RISK_MANAGEMENT,
    COMPANY_POLICIES,
    MANUAL_CORPORATE_GOVERNANCE,
    CODE_BUSINESS_CONDUCT_ETHICS,
  },
};

const INVESTOR_RELATIONS_PROGRAM = {
  url: `${INVESTOR_RELATIONS.url}/investor-relations-program`,
  name: "Investor Relations Program",
  directory: [...INVESTOR_RELATIONS.directory, "Investor Relations Program"],
};
const SHARE_INFORMATION = {
  url: `${INVESTOR_RELATIONS.url}/share-information`,
  name: "Share Information",
  directory: [...INVESTOR_RELATIONS.directory, "Share Information"],
};
const DIVIDEND_HISTORY = {
  url: `${INVESTOR_RELATIONS.url}/dividend-history`,
  name: "Dividend History",
  directory: [...INVESTOR_RELATIONS.directory, "Dividend History"],
};
const DIVIDEND_POLICY = {
  url: `${INVESTOR_RELATIONS.url}/dividend-policy`,
  name: "Dividend Policy",
  directory: [...INVESTOR_RELATIONS.directory, "Dividend Policy"],
};
const STOCK_INFORMATION = {
  url: `${INVESTOR_RELATIONS.url}/stock-information`,
  name: "Stock Information",
  directory: [...INVESTOR_RELATIONS.directory, "Stock Information"],
};
const FINANCIAL_HIGHLIGHTS = {
  url: `${INVESTOR_RELATIONS.url}/financial-highlights`,
  name: "Finance Highlights",
  directory: [...INVESTOR_RELATIONS.directory, "Finance Highlights"],
};
const PRESS_RELEASES = {
  url: `${INVESTOR_RELATIONS.url}/press-releases`,
  name: "Press Releases",
  directory: [...INVESTOR_RELATIONS.directory, "Press Releases"],
};
const PRESENTATIONS = {
  url: `${INVESTOR_RELATIONS.url}/presentations`,
  name: "Presentations",
  directory: [...INVESTOR_RELATIONS.directory, "Presentations"],
};
const RESEARCH_REPORTS = {
  url: `${INVESTOR_RELATIONS.url}/research-reports`,
  name: "Research Reports",
  directory: [...INVESTOR_RELATIONS.directory, "Research Reports"],
};
const DISCLOSURES = {
  url: `${INVESTOR_RELATIONS.url}/disclosures`,
  name: "Disclosures",
  directory: [...INVESTOR_RELATIONS.directory, "Disclosures"],
};
const INVESTOR_RELATIONS_ROUTES = {
  ...INVESTOR_RELATIONS,
  SHARE_INFORMATION,
  DIVIDEND_HISTORY,
  DIVIDEND_POLICY,
  OUR_COMPANY,
  OUR_LEADERSHIP,
  STRUCTURES,
  CORPORATE_GOVERNANCE: COMBINED_CORPORATE_GOVERNANCE,
  INVESTOR_RELATIONS_PROGRAM,
  STOCK_INFORMATION,
  FINANCIAL_HIGHLIGHTS,
  PRESS_RELEASES,
  PRESENTATIONS,
  RESEARCH_REPORTS,
  DISCLOSURES,
};
export const INVESTOR_RELATIONS_SUB_ROUTES = [
  OUR_COMPANY,
  OUR_LEADERSHIP,
  STRUCTURES,
  COMBINED_CORPORATE_GOVERNANCE,
  INVESTOR_RELATIONS_PROGRAM,
  STOCK_INFORMATION,
  FINANCIAL_HIGHLIGHTS,
  PRESS_RELEASES,
  PRESENTATIONS,
  RESEARCH_REPORTS,
  DISCLOSURES,
];
export default INVESTOR_RELATIONS_ROUTES;
