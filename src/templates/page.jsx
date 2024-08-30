import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

// Import the slice components
import PhotoTextLeft from "../components/slices/PhotoTextLeft";
import PhotoTextRight from "../components/slices/PhotoTextRight";

const Page = ({ data }) => {
  if (!data) return null;
  const page = data.prismicPage;

  return (
    <Layout>
      {page.data.body.map((slice, index) => {
        // Switch case to choose the right component for each slice
        switch (slice.slice_type) {
          case "photo_text_left":
            return <PhotoTextLeft key={index} slice={slice} />;
          case "photo_text_right":
            return <PhotoTextRight key={index} slice={slice} />;
          default:
            return null;
        }
      })}
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
        body {
          ... on PrismicPageDataBodyPhotoTextLeft {
            slice_type
            primary {
              image {
                url
                alt
              }
              container_header {
                text
              }
              container_content {
                html
              }
            }
          }
          ... on PrismicPageDataBodyPhotoTextRight {
            slice_type
            primary {
              image {
                url
                alt
              }
              container_header {
                text
              }
              container_content {
                html
              }
            }
          }
        }
      }
    }
  }
`;
