import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

// Import the slice components
import PhotoTextLeft from "../components/slices/PhotoTextLeft";
import PhotoTextRight from "../components/slices/PhotoTextRight";
import HeaderText from "../components/slices/HeaderText";
import Hero from "../components/slices/Hero";

const Page = ({ data }) => {
  if (!data || !data.prismicPage) return null;
  const page = data.prismicPage;

  return (
    <Layout>
      {page.data.body.map((slice, index) => {
        switch (slice.slice_type) {
          case "photo_text_left":
            return <PhotoTextLeft key={index} slice={slice} />;
          case "photo_text_right":
            return <PhotoTextRight key={index} slice={slice} />;
          case "header___text":
            return <HeaderText key={index} slice={slice} />;
          case "hero_section":
            return <Hero key={index} slice={slice} />;
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
          ... on PrismicPageDataBodyHeaderText {
            slice_type
            primary {
              container_header {
                text
              }
              container_content {
                html
              }
              link_label
              container_link {
                id
                lang
                link_type
                slug
                uid
              }
            }
          }
          ... on PrismicPageDataBodyHeroSection {
            slice_type
            primary {
              container_content {
                html
              }
              link_label
              link {
                id
                lang
                link_type
                slug
                uid
              }
              hero_image {
                url
                alt
              }
            }
          }
        }
      }
    }
  }
`;
