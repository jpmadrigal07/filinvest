import { Block } from "payload/types";

const DreamsBuiltGreenMediaSection: Block = {
  slug: "dreams-built-green-media-section",
  fields: [
    {
      type: "upload",
      name: "backgroundMedia",
      relationTo: "files",
      required: true,
    },
  ],
};

export default DreamsBuiltGreenMediaSection;
