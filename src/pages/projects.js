import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { Container, Row, Col } from "../components/grid-system"
import Layout from "../components/layout"
import ProjectCard from "../components/projects"

const ProjectsLandingPage = () => {
  const data = useStaticQuery(graphql`
    query {
      project: contentfulSection(
        contentful_id: { eq: "4m08XL6AKd6Shb8rtGoiYH" }
      ) {
        contentful_id
        content {
          ... on ContentfulProject {
            contentful_id
            password
            summary
            title
            slug
            skills {
              skills
            }
            hero {
              fluid(maxWidth: 470, maxHeight: 220, quality: 80) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout title="Example Projects & Case Studies">
      <hgroup className="element">
        <h1>Projects</h1>
      </hgroup>
      <Row justify="center">
        {data.project.content.map(card => {
          if (card.password) return null
          return (
            <Col md={10} lg={6} xl={4} xxl={3.8} key={card.contentful_id}>
              <ProjectCard
                title={card.title}
                summary={card.summary}
                skills={card.skills[0].skills}
                hero={card.hero}
                permalink={`/projects/${card.slug}`}
              />
            </Col>
          )
        })}
      </Row>
    </Layout>
  )
}

export default ProjectsLandingPage
