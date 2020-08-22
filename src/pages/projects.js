import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { Container } from "../components/demo-grid/container"
import { Row } from "../components/demo-grid/row"
import { Col } from "../components/demo-grid/col"
import Layout from "../components/layout"
import ProjectCard from "../components/projects"

const ProjectsLandingPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { order: DESC, fields: date }) {
        edges {
          node {
            contentful_id
            summary
            title
            slug
            skills {
              skill
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
  const cards = data.allContentfulProject.edges
  return (
    <Layout>
      <Container>
            <section className="element">
              <hgroup>
                <h1>Recent Projects</h1>
              </hgroup>
              <Row>
                {cards.map(card => (
                  <Col md={6} xl={4} key={card.node.contentful_id}>

                    {console.table(card.node.skills[0])}
                    <ProjectCard
                      title={card.node.title}
                      summary={card.node.summary}
                      skills={card.node.skills[0].skill}
                      hero={card.node.hero}
                      permalink={`/projects/${card.node.slug}`}
                    />
                  </Col>
                ))}
              </Row>
            </section>
      </Container>
    </Layout>
  )
}

export default ProjectsLandingPage
