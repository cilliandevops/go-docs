import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Golang Learning",
      description: "A docs demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Golang 学习",
      description: "vuepress-theme-hope 的文档演示",
      

    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
