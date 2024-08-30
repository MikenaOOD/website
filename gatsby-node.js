const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicPage {
        nodes {
          id
          uid
          lang
        }
      }
    }
  `);

  const template = path.resolve("src/templates/page.jsx");

  pages.data.allPrismicPage.nodes.forEach((page) => {
    const pagePath = page.uid === "index" ? "/" : `/${page.uid}`;

    createPage({
      path: pagePath,
      component: template,
      context: {
        uid: page.uid,
      },
    });
  });
};
