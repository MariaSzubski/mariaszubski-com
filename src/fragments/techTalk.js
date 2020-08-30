import { graphql } from "gatsby"

export const TechTalkAttr = graphql`
  fragment TechTalkAttr on ContentfulSection {
    id
    date
    label
    org
    duration
    detailsLink
    expCV
  }
`
