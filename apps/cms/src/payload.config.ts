import { buildConfig } from "payload/config";
import path from "path";
import seo from "@payloadcms/plugin-seo";

import { Users } from "./collections/Users";
import { Sites } from "./collections/Sites";
import { Awards } from "./collections/Awards";
import { Files } from "./collections/Files";
import { Pages } from "./collections/Pages";
import { News } from "./collections/News";
import { Projects } from "./collections/Projects";
import { Careers } from "./collections/Careers";

import { CareerCategories } from "./collections/CareerCategories";
import { ProjectCategories } from "./collections/ProjectCategories";
import { PropertyCategories } from "./collections/PropertyCategories";
import { LocationGroupCategories } from "./collections/LocationGroupCategories";
import { LocationCategories } from "./collections/LocationCategories";
import { SubLocationCategories } from "./collections/SubLocationCategories";
// import { SubLocationCategoriesTwo } from "./collections/SubLocationCategoriesTwo";

import { Navigation } from "./globals/Navigation";
import { Footer } from "./globals/Footer";

import Logo from "./graphics/Logo";
import Icon from "./graphics/Icon";
import { PropertySearch } from "./globals/PropertySearch";

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
    Awards,
    Careers,
    Users,
    Sites,
    CareerCategories,
    ProjectCategories,
    PropertyCategories,
    LocationGroupCategories,
    LocationCategories,
    SubLocationCategories,
    Files,
  ],
  plugins: [
    seo({
      collections: ["news", "projects", "pages"],
      uploadsCollection: "files",
    }),
  ],
  globals: [Navigation, Footer, PropertySearch],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
