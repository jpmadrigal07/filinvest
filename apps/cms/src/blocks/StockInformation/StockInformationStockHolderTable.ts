import { Block } from "payload/types";

const StockInformationStockHolderTable: Block = {
  slug: "stock-information-stock-holder-table",
  fields: [
    {
      type: "text",
      name: "tableTitle",
    },
    {
      type: "text",
      name: "tableSubTitle",
    },
    {
      type: "textarea",
      name: "tableDescription",
    },
    {
      type: "array",
      name: "rowData",
      required: true,
      fields: [
        {
          type: "text",
          name: "shareholder",
          required: true,
        },
        {
          type: "text",
          name: "numberOfSharesHeld",
          required: true,
        },
        {
          type: "text",
          name: "toTotalOutstanding",
          required: true,
        },
      ],
    },
  ],
};

export default StockInformationStockHolderTable;
