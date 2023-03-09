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
          type: "text",
          name: "title",
          required: true,
        },
        {
          type: "richText",
          name: "description",
          required: true,
        },
      ],
    },
  ],
};

export default CompanyPoliciesPolicy;
