export const ABOUT_US = { url: "/about-us", name: "About Us", directory: ["About Us"] };
const COMPANY_BACKGROUND = { url: `${ABOUT_US.url}/company-background`, name: "Company Background", directory: [...ABOUT_US.directory, "Company Background"] };
const MISSION_VISION = { url: `${ABOUT_US.url}/mission-vision`, name: "Vision, Mission, and Core Values", directory: [...ABOUT_US.directory, "Vision, Mission, and Core Values"] };
const DREAMS_BUILT_GREEN = { url: `${ABOUT_US.url}/dreams-built-green`, name: "Dreams Built Green", directory: [...ABOUT_US.directory, "Dreams Built Green"] };
const PUSONG_FILINVEST = { url: `${ABOUT_US.url}/pusong-filinvest`, name: "#PusongFilinvest", directory: [...ABOUT_US.directory, "#PusongFilinvest"] };
const SUBSIDIARIES = { url: `${ABOUT_US.url}/subsidiaries`, name: "Subsidiaries", directory: [...ABOUT_US.directory, "Subsidiaries"] };
const ROUTES = { ...ABOUT_US, COMPANY_BACKGROUND, MISSION_VISION, DREAMS_BUILT_GREEN, PUSONG_FILINVEST, SUBSIDIARIES };
export const ABOUT_US_SUB_ROUTES = [ COMPANY_BACKGROUND, MISSION_VISION, DREAMS_BUILT_GREEN, PUSONG_FILINVEST, SUBSIDIARIES ];
export default ROUTES;