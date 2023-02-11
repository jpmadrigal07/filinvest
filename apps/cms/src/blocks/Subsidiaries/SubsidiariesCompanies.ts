import { Block } from "payload/types";

const SubsidiariesCompanies: Block = {
  slug: "subsidiaries-companies",
  fields: [
    {
      type: "array",
      name: "subsidiariesCompanies",
      required: true,
      fields: [
        {
          type: "upload",
          name: "companyLogo",
          relationTo: "files",
          required: true,
        },
        {
          name: "companyName",
          type: "text",
          required: true,
        },
        {
          name: "companyDescription",
          type: "text",
          required: true,
        },
        {
          name: "learnMoreLink",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};

export default SubsidiariesCompanies;
