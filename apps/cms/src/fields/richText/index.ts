import {
  RichTextElement,
  RichTextField,
  RichTextLeaf,
} from "payload/dist/fields/config/types";
import deepMerge from "../../utilities/deepMerge";
import elements from "./elements";
import leaves from "./leaves";
import link from "../link";

type RichText = (
  /* eslint-disable  no-unused-vars */
  overrides?: Partial<RichTextField>,
  additions?: {
    elements?: RichTextElement[];
    leaves?: RichTextLeaf[];
  }
) => RichTextField;

const richText: RichText = (
  overrides,
  additions = {
    elements: [],
    leaves: [],
  }
) =>
  deepMerge<RichTextField, Partial<RichTextField>>(
    {
      name: "richText",
      type: "richText",
      required: true,
      admin: {
        upload: {
          collections: {
            media: {
              fields: [
                {
                  name: "enableLink",
                  type: "checkbox",
                  label: "Enable Link",
                },
                link({
                  appearances: false,
                  disableLabel: true,
                  overrides: {
                    admin: {
                      condition: (_, data) => Boolean(data?.enableLink),
                    },
                  },
                }),
              ],
            },
          },
        },
        elements: [...elements, ...(additions.elements || [])],
        leaves: [...leaves, ...(additions.leaves || [])],
      },
    },
    overrides
  );

export default richText;
