import { Block } from "payload/types";

const CoLivingCoLiving: Block = {
  slug: "co-living-co-living",
  fields: [
    {
      type: "array",
      name: "co-living",
      label: "Co-Living",
      required: true,
      fields: [
        {
          type: "upload",
          name: "co-LivingImage",
          relationTo: "files",
          required: true,
        },
        {
          name: "co-livingName",
          type: "text",
          required: true,
        },
        {
          name: "co-livingLink",
          type: "text",
          required: true,
        },
        {
          name: "co-livingLocation",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};

export default CoLivingCoLiving;
