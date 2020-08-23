import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"

import { Row, Col } from "../components/grid-system"
import Layout from "../components/layout"
import HTML from "../components/utilities/html"
import Button from "../components/button"
import { SkillList, SkillTag } from "../components/skill/list"

const Hero = styled(Img)`
  margin-bottom: 6rem;
`

const Aside = styled.aside`
  padding: 2rem 2rem;
  margin-bottom: 2rem;
`

const ProjectTemplate = props => {
  const post = props.data.contentfulProject
  return (
    <Layout>
      <Row justify="center">
        <Col xxl={10.5}>
          <section className="element">
            <hgroup>
              <h1>{post.summary}</h1>
              <h2>{post.title}</h2>
            </hgroup>
            <Hero
              fluid={post.hero.fluid}
              alt={`${post.summary} - ${post.title}`}
              object-fit="containe"
            />
          </section>
        </Col>
      </Row>
      <Row justify="center">
        <Col xxl={8.5}>
          <section className="element">
            <Row justify="between">
              <Col lg={9} xl={8.25}>
                <HTML content={post.desc} className="" />
              </Col>
              <Col lg={3} xl={3.25}>
                <Aside className="background">
                  {post.skills[0].displayLabel && (
                    <h5>{post.skills[0].title}</h5>
                  )}
                  <SkillList>
                    {post.skills[0].skill.map((skill, i) => (
                      <SkillTag
                        icon={skill.toLowerCase()}
                        label={skill}
                        key={`${post.skills[0].contentful_id}-${i}`}
                      />
                    ))}
                  </SkillList>
                </Aside>
                <Aside className="background">
                  {post.links.map(link => (
                    <Button
                      to={link.url}
                      target={link.targetBlank && "_blank"}
                      key={link.contentful_id}
                      stacked
                    >
                      {link.label}
                    </Button>
                  ))}
                </Aside>
              </Col>
            </Row>
          </section>
        </Col>
      </Row>
    </Layout>
  )
}

ProjectTemplate.propTypes = {
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  org: PropTypes.string,
  links: PropTypes.array,
  skills: PropTypes.array,
  desc: PropTypes.object,
  hero: PropTypes.string,
  data: PropTypes.object,
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      contentful_id
      category
      summary
      title
      org
      links {
        contentful_id
        label
        url
        targetBlank
      }
      skills {
        contentful_id
        title
        displayLabel
        darkMode
        skill
      }
      desc {
        childMarkdownRemark {
          html
        }
      }
      hero {
        fluid {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`
