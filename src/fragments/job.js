import { graphql } from "gatsby"

export const FragmentContentfulJob = graphql`
  fragment FragmentContentfulJob on ContentfulJob {
    contentful_id
    title
    companyName
    team
    dateRange
    jobTitles
    location
    desc {
      childMarkdownRemark {
        html
      }
    }
  }
`
