import { Block } from "payload/types";

const TownscapesTitleText: Block = {
  slug: "townscapes-title-text",
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

export default TownscapesTitleText;
