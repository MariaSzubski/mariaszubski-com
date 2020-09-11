import { graphql } from "gatsby"

export const FragmentContentfulTechTalk = graphql`
  fragment FragmentContentfulTechTalk on ContentfulSection {
    id
    date
    label
    org
    duration
    detailsLink
    expCV
  }
`
