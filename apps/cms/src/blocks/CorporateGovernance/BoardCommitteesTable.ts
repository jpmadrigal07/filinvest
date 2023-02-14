import { Block } from "payload/types";

const BoardCommitteesTable: Block = {
  slug: "board-committees-table",
  fields: [
    {
      type: "text",
      name: "tableTitle",
    },
    {
      type: "array",
      name: "tableHeader",
      required: true,
      maxRows: 1,
      fields: [
        {
          type: "text",
          name: "header",
          required: true,
        },
        {
          type: "array",
          name: "tableData",
          required: true,
          fields: [
            {
              type: "text",
              name: "data",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};

export default BoardCommitteesTable;
