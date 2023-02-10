import { Block } from "payload/types";

const CorporateCenters: Block = {
  slug: "corporate-centers",
  fields: [
    {
      type: "array",
      name: "locations",
      label: "Locations",
      required: true,
      fields: [
        {
          name: "Location",
          type: "text",
          required: true,
        },
      ],
    },
    {
      type: "array",
      name: "office",
      label: "Office",
      required: true,
      fields: [
        {
          type: "upload",
          name: "officeImage",
          relationTo: "files",
          required: true,
        },
        {
          name: "officeName",
          type: "text",
          required: true,
        },
        {
          name: "officeLink",
          type: "text",
          required: true,
        },
        {
          name: "officeLocation",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};

export default CorporateCenters;
