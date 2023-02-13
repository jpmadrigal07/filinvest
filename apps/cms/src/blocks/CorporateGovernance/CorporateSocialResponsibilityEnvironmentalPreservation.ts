import { Block } from "payload/types";

const CorporateSocialResponsibilityEnvironmentalPreservation: Block = {
  slug: "corporate-social-responsibility-environmental-preservation",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "readMoreLink",
      type: "text",
      required: true,
    },
    {
      type: "upload",
      name: "image",
      relationTo: "files",
      required: true,
    },
  ],
};

export default CorporateSocialResponsibilityEnvironmentalPreservation;
