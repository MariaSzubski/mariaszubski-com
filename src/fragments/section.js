import { graphql } from "gatsby"

export const SectionAttr = graphql`
  fragment SectionAttr on ContentfulSection {
    id
    title
    subtitle
    copy {
      childMarkdownRemark {
        html
      }
    }
  }
`
