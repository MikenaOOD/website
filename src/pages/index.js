import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";

// Import slice components
import PhotoTextLeft from "../components/slices/PhotoTextLeft";
import PhotoTextRight from "../components/slices/PhotoTextRight";

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      prismicPage(uid: { eq: "index" }) {
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
  `);

  const page = data.prismicPage;

  return (
    <Layout>
      {page.data.body.map((slice, index) => {
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
}
