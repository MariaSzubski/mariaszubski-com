import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { Container, Row, Col } from "../grid-system"
import ProjectCard from "../projects"
import Link from "../utilities/link"
import WorkshopCard from "../experience/workshop"
import Button from "../button"

import { colors } from "../global/vars"

const SRow = styled(Row)`
  padding-top: 10rem;
  padding-bottom: 10rem;
`

const ExpandCol = styled(Col)`
  text-align: center;
  padding-top: 7rem;
  font-size: 3.2rem;
  font-weight: 600;
  text-transform: uppercase;
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

      talks: contentfulSection(
        contentful_id: { eq: "6mmf8cY0iOAoc5KAWvSj79" }
      ) {
        title
        contentful_id
        copy {
          childMarkdownRemark {
            html
          }
        }
        content {
          ... on ContentfulSection {
            contentful_id
            subtitle
            content {
              ... on ContentfulTechTalk {
                contentful_id
                date(formatString: "MMM YYYY")
                label
                org
                detailsLink
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
              <Col xs={12} sm={10} md={10} lg={4} xxl={3.25} key={card.contentful_id}>
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
              <Link to="/projects">View More</Link>
            </ExpandCol>
          </Row>
        </Container>
      </Col>
    </SRow>
  )
}

export default FeaturedSection
