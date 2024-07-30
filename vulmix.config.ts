import { defineVulmixConfig } from "./.vulmix/utils/defineVulmixConfig";

export default defineVulmixConfig({
  head: {
    link: [
      {
        rel: "manifest",
        href: "/manifest.json",
      },
    ],

    meta: [
      {
        name: "theme-color",
        content: "#29c59e",
      },
      {
        name: "description",
        content: "Vulmix PWA example",
      },
    ],
  },
});
