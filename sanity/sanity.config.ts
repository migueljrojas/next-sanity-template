import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schema } from "./schema";
import deskStructure from "./deskStructure";

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  title: "Contenido",
  basePath: "/studio",
  plugins: [deskTool({ structure: deskStructure }), visionTool()],
  schema,
});
