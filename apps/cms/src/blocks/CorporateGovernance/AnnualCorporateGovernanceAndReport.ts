import { Block } from "payload/types";

const AnnualCorporateGovernanceAndReport: Block = {
  slug: "annual-corporate-governance-and-report",
  fields: [
    {
      type: "array",
      name: "reportList",
      required: true,
      fields: [
        {
          type: "upload",
          name: "icon",
          relationTo: "files",
          required: true,
        },
        {
          name: "year",
          type: "text",
          required: true,
        },
        {
          type: "richText",
          name: "report",
          required: true,
        },
      ],
    },
  ],
};

export default AnnualCorporateGovernanceAndReport;
