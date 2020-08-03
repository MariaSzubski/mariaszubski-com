import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Styledcomp = () => {
  const data = useStaticQuery(graphql`
    query {
      styledIcon: file(relativePath: { eq: "styled.png" }) {
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.styledIcon.childImageSharp.fluid} />
}

export default Styledcomp
