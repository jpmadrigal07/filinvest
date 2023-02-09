import { Block } from "payload/types";

const OurLeadershipBoardOfDirectors: Block = {
  slug: "our-leadership-board-of-directors",
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
      type: "array",
      name: "director",
      required: true,
      fields: [
        {
          type: "upload",
          name: "directorImage",
          relationTo: "files",
          required: true,
        },
        {
          name: "directorFullName",
          type: "text",
          required: true,
        },
        {
          name: "directorTitle",
          type: "text",
          required: true,
        },
        {
          name: "facebook",
          type: "text",
        },
        {
          name: "twitter",
          type: "text",
        },
        {
          name: "linkedIn",
          type: "text",
        },
      ],
    },
  ],
};

export default OurLeadershipBoardOfDirectors;
