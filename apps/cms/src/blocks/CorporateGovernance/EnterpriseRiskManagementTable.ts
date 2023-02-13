import { Block } from "payload/types";

const CorporateSocialResponsibilityPrograms: Block = {
  slug: "corporate-social-responsibility-programs",
  fields: [
    {
      type: "array",
      name: "riskManagement",
      required: true,
      maxRows: 4,
      fields: [
        {
          type: "upload",
          name: "image",
          relationTo: "files",
          required: true,
        },
      ],
    },
  ],
};

export default CorporateSocialResponsibilityPrograms;
