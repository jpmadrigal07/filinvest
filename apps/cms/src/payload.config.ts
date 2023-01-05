import { buildConfig } from "payload/config";
import path from "path";
import { Users } from "./collections/Users";
import { Sites } from "./collections/Sites";
import { Files } from "./collections/Files";
import { Pages } from "./collections/Pages";
import { News } from "./collections/News";
import { Projects } from "./collections/Projects";
import { Careers } from "./collections/Careers";
import { Advertisements } from "./collections/Advertisements";

import { CareerCategories } from "./collections/CareerCategories";
import { NewsCategories } from "./collections/NewsCategories";
import { ProjectCategories } from "./collections/ProjectCategories";

import { seed } from "./seed";
import Logo from "./graphics/Logo";
import Icon from "./graphics/Icon";

export default buildConfig({
  cors: "*",
  admin: {
    user: Users.slug,
    css: path.resolve(__dirname, "styles/custom.scss"),
    meta: {
      titleSuffix: "- Filinvest CMS",
      favicon: "/assets/filinvest-cms-logo.png",
      ogImage: "/assets/filinvest-cms-logo.png",
    },
    components: {
      graphics: {
        Logo,
        Icon,
      },
    },
  },
  collections: [
    Pages,
    News,
    Projects,
    Careers,
    Advertisements,
    Users,
    Sites,
    CareerCategories,
    NewsCategories,
    ProjectCategories,
    Files,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  onInit: async (payload) => {
    // If the `env` var `PAYLOAD_SEED` is set, seed the db
    if (process.env.PAYLOAD_SEED) {
      await seed(payload);
    }
  },
});
