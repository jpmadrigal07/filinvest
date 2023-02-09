import { Block } from "payload/types";

const CompanyBackgroundIconText: Block = {
  slug: "companyBackgroundIconText",
  fields: [
    {
      type: "array",
      name: "iconText",
      label: "Icon and Text",
      required: true,
      fields: [
        {
          type: "upload",
          name: "iconImage",
          relationTo: "files",
          required: true,
        },
        {
          name: "text",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};

export default CompanyBackgroundIconText;
