import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrHasSiteAccessOrPublished } from "../access/isAdminHasSiteAccessOrPublished";
import { isAdminOrHasSiteAccess } from "../access/isAdminOrHasSiteAccess";
import { isLoggedIn } from "../access/isLoggedIn";
import {
  HomeHeroSection,
  HomeProjectsSection,
  HomePropertySearchSection,
  HomeOurBusinessesSection,
  HomeOurServicesSection,
  HomeAboutUsSection,
  HomeNewsStoriesSection,
  HomeInvestorRelationSection,
  HomeStockReportSection,
  HomeFloatingButtons,
} from "../blocks/Home";
import {
  CompanyBackgroundIconText,
  CompanyBackgroundImageText,
} from "../blocks/CompanyBackground";
import { OurLeadershipBoardOfDirectors } from "../blocks/OurLeadership";
import Header from "../blocks/Header";
import NextLink from "../blocks/NextLink";
import PreviousLink from "../blocks/PreviousLink";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    group: "Content",
  },
  versions: {
    drafts: true,
  },
  access: {
    // Anyone logged in can create
    create: isLoggedIn,
    // Only admins or editors with site access can update
    update: isAdminOrHasSiteAccess(),
    // Admins or editors with site access can read,
    // otherwise users not logged in can only read published
    read: isAdminOrHasSiteAccessOrPublished,
    // Only admins can delete
    delete: isAdmin,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "blocks",
      required: true,
      blocks: [
        Header,
        HomeHeroSection,
        HomeProjectsSection,
        HomePropertySearchSection,
        HomeOurBusinessesSection,
        HomeOurServicesSection,
        HomeAboutUsSection,
        HomeNewsStoriesSection,
        HomeInvestorRelationSection,
        HomeStockReportSection,
        HomeFloatingButtons,
        CompanyBackgroundIconText,
        CompanyBackgroundImageText,
        OurLeadershipBoardOfDirectors,
        PreviousLink,
        NextLink,
      ],
    },
    {
      name: "site",
      type: "relationship",
      relationTo: "sites",
      required: true,
      // If user is not admin, set the site by default
      // to the first site that they have access to
      defaultValue: ({ user }) => {
        if (!user.roles.includes("admin") && user.sites?.[0]) {
          return user.sites[0];
        }
      },
    },
  ],
};
