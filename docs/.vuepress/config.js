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
        text: "The Manager's Recepie",
        link: "/manager-recepie/",
      },
      {
        text: "Customer-centric Testing",
        link: "/customer-centric-testing/",
      },
      {
        text: "Domain Driven Design", //This title need to update later
        link: "/development-devops/",
      },
      {
        text: "Product Management",
        link: "/product-management/",
      },
      {
        text: "Book List",
        link: "/book-list/",
      },
      {
        text: "GitHub",
        link: "https://github.com/kaxiu008",
      },
      {
        text: "Find me",
        link: "https://twitter.com/JackieWang7",
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
      "/manager-recepie/": [
        {
          title: "Cypress",
          collapsable: false,
          sidebarDepth: 2,
          children: ["", "a-starter-kit"],
        },
      ],
      "/customer-centric-testing/": [
        {
          title: "Customer-centric Testing",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "",
            "using-cypress",
            "using-rest-assured",
            "bdd",
            "code-segment",
          ],
        },
      ],
      "/develoment-devops/": [
        {
          title: "Domain Driven Design",
          collapsable: false,
          sidebarDepth: 2,
          children: ["using-spring-boot"],
        },
      ],
      "/product-management/": [
        {
          title: "Product Management",
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
