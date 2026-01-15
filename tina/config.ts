import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      // English Blog Posts
      {
        name: "post_en",
        label: "Posts (English)",
        path: "src/content/blog/english/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image",
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            options: ["Admin"], // Add more authors as needed
          },
          {
            type: "string",
            name: "categories",
            label: "Categories",
            list: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      // French Blog Posts
      {
        name: "post_fr",
        label: "Posts (Français)",
        path: "src/content/blog/french/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image à la une",
          },
          {
            type: "string",
            name: "author",
            label: "Auteur",
            options: ["Admin"], // Add more authors as needed
          },
          {
            type: "string",
            name: "categories",
            label: "Catégories",
            list: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Étiquettes",
            list: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Brouillon",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenu",
            isBody: true,
          },
        ],
      },
    ],
  },
});
