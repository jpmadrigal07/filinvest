import { Block } from "payload/types";

const BoardCommitteesTitleYear: Block = {
  slug: "board-committees-title-and-year",
  fields: [
    {
      type: "text",
      name: "title",
    },
    {
      type: "text",
      name: "year",
    },
  ],
};

export default BoardCommitteesTitleYear;
