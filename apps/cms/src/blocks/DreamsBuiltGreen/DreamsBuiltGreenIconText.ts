import { Block } from "payload/types";

const DreamsBuiltGreenIconText: Block = {
  slug: "dreamsBuiltGreenIconText",
  fields: [
    {
      type: "array",
      name: "iconText",
      label: "Icon and Text",
      required: true,
      fields: [
        {
          type: "upload",
          name: "iconImage",
          relationTo: "files",
          required: true,
        },
        {
          name: "text",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};

export default DreamsBuiltGreenIconText;
