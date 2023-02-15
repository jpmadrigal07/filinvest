import { Block } from "payload/types";

const CodeOfBusinessConductAndEthics: Block = {
  slug: "code-of-business-conduct-and-ethics",
  fields: [
    {
      type: "upload",
      name: "icon",
      relationTo: "files",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
  ],
};

export default CodeOfBusinessConductAndEthics;
