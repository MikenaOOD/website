/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `mikena`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver:
          ({ node, key, value }) =>
          (page) =>
            `/${page.uid}`,
        schemas: {
          page: require("./custom-types/page.json"),
        },
      },
    },
  ],
};
