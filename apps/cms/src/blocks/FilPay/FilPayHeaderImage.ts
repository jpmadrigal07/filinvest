import { Block } from "payload/types";

const FilPayHeaderImage: Block = {
  slug: "filpay-header-image",
  fields: [
    {
      type: "upload",
      name: "image",
      relationTo: "files",
      required: true,
    },
  ],
};

export default FilPayHeaderImage;
