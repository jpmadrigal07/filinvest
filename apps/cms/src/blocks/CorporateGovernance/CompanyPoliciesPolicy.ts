import { Block } from "payload/types";

const CompanyPoliciesPolicy: Block = {
  slug: "company-policies-policy",
  fields: [
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

export default CompanyPoliciesPolicy;
