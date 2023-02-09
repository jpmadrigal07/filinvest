import { Block } from "payload/types";

const DreamsBuiltGreenMediaSection: Block = {
  slug: "dreamsBuiltGreenMediaSection",
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
