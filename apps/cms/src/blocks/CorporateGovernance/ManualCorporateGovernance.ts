import { Block } from "payload/types";

const ManualCorporateGovernance: Block = {
  slug: "manual-corporate-governance",
  fields: [
    {
      type: "upload",
      name: "icon",
      relationTo: "files",
      required: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "viewLink",
      type: "text",
      required: true,
    },
  ],
};

export default ManualCorporateGovernance;
