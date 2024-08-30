import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const Page = ({ data }) => {
  if (!data) return null;
  const page = data.prismicPage;

  return (
    <Layout>
      <h1>{page.data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.data.content.html }} />
    </Layout>
  );
};

export default Page;

export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`;
