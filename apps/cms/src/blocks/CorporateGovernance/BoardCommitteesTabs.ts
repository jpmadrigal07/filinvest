import { Block } from "payload/types";

const BoardCommitteesTabs: Block = {
  slug: "board-committees-tabs",
  fields: [
    {
      type: "array",
      name: "tabs",
      required: true,
      fields: [
        {
          type: "text",
          name: "tab",
          required: true,
        },
      ],
    },
  ],
};

export default BoardCommitteesTabs;
