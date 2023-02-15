import { Block } from "payload/types";

const OfficesTitleText: Block = {
  slug: "offices-title-and-text",
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

export default OfficesTitleText;
