import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/components/": [
    {
      text: "组件",
      icon: "laptop-code",
      collapsible:true,
      children: "structure",
    },

  ],
});
