import { Block } from "payload/types";

const PusongFilinvestCorporateSocialResponsibility: Block = {
  slug: "pusongFilinvestCorporateSocialResponsibility",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "subTitle",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
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

export default PusongFilinvestCorporateSocialResponsibility;
