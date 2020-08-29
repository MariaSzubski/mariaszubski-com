import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { Container, Row, Col } from "../grid-system"
import ProjectCard from "../projects"
import Link from "../utilities/link"

const SRow = styled(Row)`
  padding-top: 8rem;
  padding-bottom: 8rem;
`

const ExpandCol = styled(Col)`
  text-align: center;
`

const FeaturedSection = () => {
  const data = useStaticQuery(graphql`
    query {
      featured: contentfulSection(
        contentful_id: { eq: "7pO9zgptLE5ANOBPlUOeRo" }
      ) {
        title
        content {
          ... on ContentfulProject {
            contentful_id
            summary
            title
            slug
            skills {
              skills
            }
            hero {
              fluid(maxWidth: 420, maxHeight: 200) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `)
  return (
    <SRow align="center" fluid>
      <Col fluid>
        <Container>
          <Row justify="center">
            <Col xs={12}>
              <h1>{data.featured.title}</h1>
            </Col>
            {data.featured.content.map(card => (
              <Col sm={10} md={6.2} lg={4} xxl={3.25} key={card.contentful_id}>
                <ProjectCard
                  title={card.title}
                  summary={card.summary}
                  skills={card.skills[0].skills}
                  hero={card.hero}
                  permalink={`/projects/${card.slug}`}
                />
              </Col>
            ))}
            <ExpandCol md={12}>
              <Link to="/projects">View More Projects</Link>
            </ExpandCol>
          </Row>
        </Container>
      </Col>
    </SRow>
  )
}

export default FeaturedSection
