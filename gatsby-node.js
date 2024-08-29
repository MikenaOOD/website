const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicPage {
        nodes {
          id
          uid
          url
        }
      }
    }
  `);

  const template = path.resolve("src/templates/page.jsx");

  pages.data.allPrismicPage.nodes.forEach((page) => {
    createPage({
      path: `/${page.uid}`,
      component: template,
      context: {
        uid: page.uid,
      },
    });
  });
};
