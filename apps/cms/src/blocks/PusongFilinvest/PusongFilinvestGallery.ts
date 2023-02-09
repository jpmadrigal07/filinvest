import { Block } from "payload/types";

const PusongFilinvestGallery: Block = {
  slug: "pusongFilinvestGallery",
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
      type: "array",
      name: "image",
      required: true,
      minRows: 6,
      maxRows: 6,
      fields: [
        {
          type: "upload",
          name: "image",
          relationTo: "files",
          required: true,
        },
        {
          name: "title",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};

export default PusongFilinvestGallery;
