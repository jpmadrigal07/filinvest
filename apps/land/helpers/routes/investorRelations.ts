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
const CORPORATE_GOVERNANCE = {
  url: `${INVESTOR_RELATIONS.url}/corporate-governance`,
  name: "Corporate Governance",
  directory: [...INVESTOR_RELATIONS.directory, "Corporate Governance"],
};
const INVESTOR_RELATIONS_PROGRAM = {
  url: `${INVESTOR_RELATIONS.url}/investor-relations-program`,
  name: "Investor Relations Program",
  directory: [...INVESTOR_RELATIONS.directory, "Investor Relations Program"],
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
  OUR_COMPANY,
  OUR_LEADERSHIP,
  STRUCTURES,
  CORPORATE_GOVERNANCE,
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
  CORPORATE_GOVERNANCE,
  INVESTOR_RELATIONS_PROGRAM,
  STOCK_INFORMATION,
  FINANCIAL_HIGHLIGHTS,
  PRESS_RELEASES,
  PRESENTATIONS,
  RESEARCH_REPORTS,
  DISCLOSURES,
];
export default INVESTOR_RELATIONS_ROUTES;
