import { Block } from "payload/types";

const PusongFilinvestOurStory: Block = {
  slug: "pusongFilinvestOurStory",
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

export default PusongFilinvestOurStory;
