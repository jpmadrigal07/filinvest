import { Block } from "payload/types";

const DisclosuresTable: Block = {
  slug: "disclosures-table",
  fields: [
    {
      type: "array",
      name: "rowData",
      required: true,
      maxRows: 1,
      fields: [
        {
          type: "date",
          name: "date",
          required: true,
        },
        {
          type: "text",
          name: "name",
          required: true,
        },
        {
          type: "text",
          name: "category",
          required: true,
        },
        {
          type: "text",
          name: "downloadLink",
          required: true,
        },
      ],
    },
  ],
};

export default DisclosuresTable;
