import { graphql } from "gatsby"

export const ImageAttr = graphql`
  fragment ImageAttr on ContentfulImage {
    id
    alt
    image {
      fluid(maxWidth: 2400, quality: 100) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`
