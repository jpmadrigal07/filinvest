import { Block } from "payload/types";

const CompanyBackgroundImageText: Block = {
  slug: "company-background-image-text",
  fields: [
    {
      type: "array",
      name: "imageText",
      label: "Image and Text",
      required: true,
      fields: [
        {
          type: "upload",
          name: "image",
          relationTo: "files",
          required: true,
        },
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};

export default CompanyBackgroundImageText;
