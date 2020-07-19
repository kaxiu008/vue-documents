const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "A Starter Kit",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */

  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    search: true,
    searchMaxSuggestions: 5,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Cypress",
        link: "/cypress/",
      },
      {
        text: "Rest Assured",
        link: "/rest-assured/",
      },
      {
        text: "Spring Boot",
        link: "/spring-boot/",
      },
      {
        text: "Story Mapping",
        link: "/story-mapping/",
      },
      {
        text: "GitHub",
        link: "https://github.com/kaxiu008",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          sidebarDepth: 2,
          children: ["", "using-vue"],
        },
      ],
      "/cypress/": [
        {
          title: "Cypress",
          collapsable: false,
          sidebarDepth: 2,
          children: ["", "using-cypress"],
        },
      ],
      "/rest-assured/": [
        {
          title: "Rest Assured",
          collapsable: false,
          sidebarDepth: 2,
          children: ["", "using-rest-assured", "bdd", "code-segment"],
        },
      ],
      "/spring-boot/": [
        {
          title: "Spring Boot",
          collapsable: false,
          sidebarDepth: 2,
          children: ["using-spring-boot"],
        },
      ],
      "/story-mapping/": [
        {
          title: "Story Mapping",
          collapsable: false,
          sidebarDepth: 2,
          children: ["using-story-mapping"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
