import React from "react";
import { graphql } from "gatsby";

const Page = ({ data }) => {
  if (!data) return null;
  const page = data.prismicPage;

  return (
    <React.Fragment>
      <h1>{page.data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.data.content.html }} />
    </React.Fragment>
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
