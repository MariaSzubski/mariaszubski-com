import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Container, Row, Col } from "react-grid-system"

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
  let cards = data.allContentfulProject.edges
  return (
    <Layout>
      <Container style={{ padding: "0rem" }}>
        <Row>
          <Col>
            <section className="element">
              <hgroup>
                <h1>Recent Projects</h1>
              </hgroup>
              <Row gutterWidth={24}>
                {cards.map(card => (
                  <Col md={6} xl={4} key={card.node.contentful_id}>
                    <ProjectCard
                      title={card.node.title}
                      summary={card.node.summary}
                      skills={card.node.skills[0].skill}
                      hero={card.node.hero}
                      permalink={card.node.slug}
                    />
                  </Col>
                ))}
              </Row>
            </section>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ProjectsLandingPage
