import { Block } from "payload/types";

const DreamsBuiltGreenTitleText: Block = {
  slug: "dreamsBuiltGreenTitleText",
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

export default DreamsBuiltGreenTitleText;
