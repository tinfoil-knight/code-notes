module.exports = {
  pathPrefix: "/code-notes",
  siteMetadata: {
    title: "Kunal's Programming Notes",
    description: `Personal Notes on Programming`,
    author: "Kunal Kundu",
  },
  plugins: [
    {
      resolve: "gatsby-theme-code-notes",
      options: {
        contentPath: "notes",
        basePath: "/",
        showThemeInfo: false,
        showDescriptionInSidebar: true,
      },
    },
  ],
};
