import { Block } from "payload/types";

const PreviousLink: Block = {
  slug: "previous-link",
  fields: [
    {
      name: "previousPageTitle",
      type: "text",
      required: true,
    },
    {
      name: "previousLink",
      type: "text",
      required: true,
    },
  ],
};

export default PreviousLink;
