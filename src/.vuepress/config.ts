import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Go-Cillian",
      description: "A docs demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Go-Cillian",
      description: "vuepress-theme-hope 的文档演示",
      

    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
