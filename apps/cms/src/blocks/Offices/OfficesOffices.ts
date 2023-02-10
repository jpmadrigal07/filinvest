import { Block } from "payload/types";

const OfficesOffices: Block = {
  slug: "offices-offices",
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
  ],
};

export default OfficesOffices;
