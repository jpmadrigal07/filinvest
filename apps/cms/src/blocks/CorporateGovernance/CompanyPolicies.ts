import { Block } from "payload/types";

const CompanyPolicies: Block = {
  slug: "company-policies",
  fields: [
    {
      type: "text",
      name: "title",
    },
    {
      type: "text",
      name: "subtitle",
    },
    {
      type: "array",
      name: "policies",
      required: true,
      maxRows: 4,
      fields: [
        {
          type: "upload",
          name: "icon",
          relationTo: "files",
          required: true,
        },
        {
          type: "text",
          name: "title",
          required: true,
        },
        {
          type: "textarea",
          name: "description",
          required: true,
        },
      ],
    },
  ],
};

export default CompanyPolicies;
