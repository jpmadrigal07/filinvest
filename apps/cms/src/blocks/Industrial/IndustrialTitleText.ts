import { Block } from "payload/types";

const IndustrialTitleText: Block = {
  slug: "industrial-title-text",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
  ],
};

export default IndustrialTitleText;
