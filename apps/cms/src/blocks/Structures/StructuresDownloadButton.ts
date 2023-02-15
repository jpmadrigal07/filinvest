import { Block } from "payload/types";

const StructuresDownloadButton: Block = {
  slug: "structures-download-button",
  fields: [
    {
      name: "downloadLink",
      type: "text",
      required: true,
    },
  ],
};

export default StructuresDownloadButton;
