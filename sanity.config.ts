import { defineConfig, isDev } from "sanity";
import { visionTool } from "@sanity/vision";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
// import { getStartedPlugin } from "@/plugins/sanity-plugin-tutorial";

// const devOnlyPlugins = [getStartedPlugin()];

const projectId = "mx80fx9y";

const dataset = "production";

export default defineConfig({
  name: "next_js_blog",
  basePath: "/studio",
  title: "NextJS MatheusBlog",
  templates: [
    {
      name: "blog",
      path: "templates/blog.js",
    },
  ],

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()], //, ...(isDev ? devOnlyPlugins : []) -> ussi estava dentro do array <<

  schema: {
    types: schemaTypes,
  },
  theme: myTheme,
});
