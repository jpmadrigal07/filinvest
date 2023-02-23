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
  StockInformationTitle,
  StockInformationStockHolderTable,
  StockInformationOutstandingNumberOfShares,
} from "../blocks/StockInformation";
import {
  StructuresChartImage,
  StructuresChartTable,
  StructuresTitleText,
  StructuresDownloadButton,
} from "../blocks/Structures";
import { DisclosuresTable } from "../blocks/Disclosures";
import { PressReleasesAwards } from "../blocks/PressReleases";
import {
  InvestorRelationsProgramsPrograms,
  InvestorRelationsProgramsImage,
} from "../blocks/InvestorRelationsPrograms";
import {
  FinancialHighlightsTable,
  FinancialHighlightsLegends,
  FinancialHighlightsFinancialStatements,
  FinancialHighlightsAnnualReports,
} from "../blocks/FinancialHighlights";
import { Presentations } from "../blocks/Presentations";
import {
  ManualCorporateGovernance,
  CodeOfBusinessConductAndEthics,
  AnnualCorporateGovernanceAndReport,
  CorporateSocialResponsibilityTitleText,
  CorporateSocialResponsibilityEnvironmentalPreservation,
  CorporateSocialResponsibilityPrograms,
  CompanyPoliciesPolicy,
  CompanyPoliciesTitle,
  BoardCommitteesTabs,
  BoardCommitteesTitleYear,
  BoardCommitteesTable,
  EnterpriseRiskManagementTable,
} from "../blocks/CorporateGovernance";
import { CoLivingTitleText, CoLivingCoLiving } from "../blocks/CoLiving";
import {
  IndustrialTitleText,
  IndustrialIndustrial,
} from "../blocks/Industrial";
import {
  TownscapesTitleText,
  TownscapesTownscapes,
} from "../blocks/Townscapes";
import { MallsTitleText, MallsMalls } from "../blocks/Malls";
import { OfficeParksOfficeParks } from "../blocks/OfficeParks";
import {
  OfficesTitleText,
  OfficesOfficeParks,
  OfficesOffices,
} from "../blocks/Offices";
import { CorporateCenters } from "../blocks/CorporateCenters";
import { SubsidiariesCompanies } from "../blocks/Subsidiaries";
import {
  PusongFilinvestOurStory,
  PusongFilinvestCorporateSocialResponsibility,
  PusongFilinvestGallery,
} from "../blocks/PusongFilinvest";
import {
  DreamsBuiltGreenIconText,
  DreamsBuiltGreenTitleText,
  DreamsBuiltGreenMediaSection,
} from "../blocks/DreamsBuiltGreen";
import {
  VisionMissionCoreValuesVision,
  VisionMissionCoreValuesMission,
  VisionMissionCoreValuesCoreValues,
} from "../blocks/VisionMissionCoreValues";
import {
  CompanyBackgroundIconText,
  CompanyBackgroundImageText,
} from "../blocks/CompanyBackground";
import { OurLeadershipBoardOfDirectors } from "../blocks/OurLeadership";
import {
  FilPayHeaderImage,
  FilPayOnlinePaymentsSection,
} from "../blocks/FilPay";
import {
  MixedUsedEstatesTitleText,
  MixedUsedEstatesMixedUsedEstates,
} from "../blocks/MixedUseEstates";
import {
  ResidentialTitleText,
  ResidentialPrestige,
  ResidentialAspire,
  ResidentialFutura,
} from "../blocks/Residential";
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
        MallsTitleText,
        MallsMalls,
        OfficeParksOfficeParks,
        OfficesTitleText,
        OfficesOfficeParks,
        OurLeadershipBoardOfDirectors,
        OfficesOffices,
        CorporateCenters,
        SubsidiariesCompanies,
        PusongFilinvestOurStory,
        PusongFilinvestCorporateSocialResponsibility,
        PusongFilinvestGallery,
        DreamsBuiltGreenIconText,
        DreamsBuiltGreenTitleText,
        DreamsBuiltGreenMediaSection,
        VisionMissionCoreValuesVision,
        VisionMissionCoreValuesMission,
        VisionMissionCoreValuesCoreValues,
        CompanyBackgroundIconText,
        CompanyBackgroundImageText,
        StockInformationTitle,
        StockInformationOutstandingNumberOfShares,
        StockInformationStockHolderTable,
        StructuresChartImage,
        StructuresChartTable,
        StructuresTitleText,
        StructuresDownloadButton,
        DisclosuresTable,
        PressReleasesAwards,
        InvestorRelationsProgramsPrograms,
        InvestorRelationsProgramsImage,
        FinancialHighlightsTable,
        FinancialHighlightsLegends,
        FinancialHighlightsFinancialStatements,
        FinancialHighlightsAnnualReports,
        Presentations,
        ManualCorporateGovernance,
        CodeOfBusinessConductAndEthics,
        AnnualCorporateGovernanceAndReport,
        CorporateSocialResponsibilityTitleText,
        CorporateSocialResponsibilityEnvironmentalPreservation,
        CorporateSocialResponsibilityPrograms,
        CompanyPoliciesPolicy,
        CompanyPoliciesTitle,
        BoardCommitteesTabs,
        BoardCommitteesTitleYear,
        BoardCommitteesTable,
        EnterpriseRiskManagementTable,
        FilPayHeaderImage,
        FilPayOnlinePaymentsSection,
        MixedUsedEstatesTitleText,
        MixedUsedEstatesMixedUsedEstates,
        CoLivingTitleText,
        CoLivingCoLiving,
        IndustrialTitleText,
        IndustrialIndustrial,
        TownscapesTitleText,
        TownscapesTownscapes,
        PreviousLink,
        NextLink,
        ResidentialTitleText,
        ResidentialPrestige,
        ResidentialAspire,
        ResidentialFutura,
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
