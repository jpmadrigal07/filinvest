export const OUR_BUSINESSES = {
  url: "/our-businesses",
  name: "Our Businesses",
  directory: ["Our Businesses"],
};
const RESIDENTIAL = {
  url: `${OUR_BUSINESSES.url}/residential`,
  name: "Residential",
  directory: [...OUR_BUSINESSES.directory, "Residential"],
};
const OFFICES = {
  url: `${OUR_BUSINESSES.url}/offices`,
  name: "Offices",
  directory: [...OUR_BUSINESSES.directory, "Offices"],
};
const MALLS = {
  url: `${OUR_BUSINESSES.url}/malls`,
  name: "Malls",
  directory: [...OUR_BUSINESSES.directory, "malls"],
};
const INDUSTRIAL = {
  url: `${OUR_BUSINESSES.url}/industrial`,
  name: "Industrial",
  directory: [...OUR_BUSINESSES.directory, "industrial"],
};
const COLIVING = {
  url: `${OUR_BUSINESSES.url}/co-living`,
  name: "Co-living",
  directory: [...OUR_BUSINESSES.directory, "co-living"],
};
const MIXEDUSE_ESTATES = {
  url: `${OUR_BUSINESSES.url}/mixed-use-estates`,
  name: "Mixed-use-estates",
  directory: [...OUR_BUSINESSES.directory, "mixed-use-estates"],
};
const OUR_BUSINESSES_ROUTES = {
  ...OUR_BUSINESSES,
  RESIDENTIAL,
  OFFICES,
  MALLS,
  INDUSTRIAL,
  COLIVING,
  MIXEDUSE_ESTATES,
};
export const OUR_BUSINESSES_SUB_ROUTES = [
  RESIDENTIAL,
  OFFICES,
  MALLS,
  INDUSTRIAL,
  COLIVING,
  MIXEDUSE_ESTATES,
];
export default OUR_BUSINESSES_ROUTES;
