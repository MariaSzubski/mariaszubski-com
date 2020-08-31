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

import { colors, screen } from "../components/global/vars"

const Hero = styled(Img)`
  margin-bottom: 6rem;
`

const Aside = styled.aside`
  padding: 2rem 2rem;
  margin-bottom: 2rem;
  background-color: ${colors.black + "99"};
  ${"" /* max-width: 30rem;
  @media ${screen.min.lg} {
    max-width: none;
  } */}
`

const DescHTML = styled(HTML)`
  ol li {
    list-style-type: decimal;
  }

  ol {
    padding-left: 5rem;
  }

  ul,
  ol {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 1.8rem;
  }

  ul {
    padding-left: 3rem;
  }

  h4 {
    margin-top: 5rem;
    color: ${colors.green300};
  }
  h5 {
    color: ${colors.gray200};
    text-align: left;
    padding-bottom: 0.5rem;
    margin-top: 2rem;
    padding-left: 3rem;
  }
`

const ProjectTemplate = props => {
  const post = props.data.contentfulProject
  return (
    <Layout title={`${post.title} - ${post.summary}`}>
      <Row justify="center">
        <Col xxl={10.5}>
          <section className="element">
            <hgroup>
              <h1>{post.title}</h1>
              <h2>{post.summary}</h2>
            </hgroup>
            {post.hero && (
              <Hero
                fluid={post.hero.fluid}
                alt={`${post.summary} - ${post.title}`}
                object-fit="containe"
              />
            )}
          </section>
        </Col>
      </Row>
      <Row justify="center">
        <Col xl={11} xxl={9}>
          <section className="element">
            <Row justify="between">
              <Col lg={8.5} xl={8.25} xxl={7.75}>
                <DescHTML content={post.desc} />
              </Col>
              <Col lg={3.5} xl={3.25} offset={{ xl: 0.5, xxl: 1 }}>
                <Aside>
                  {post.skills[0].displayLabel && (
                    <h5
                      style={{ color: colors.yellow, marginBottom: "1.4rem" }}
                    >
                      {post.skills[0].title}
                    </h5>
                  )}
                  <SkillList>
                    {post.skills[0].skills.map((skill, i) => (
                      <SkillTag
                        icon={skill.toLowerCase()}
                        label={skill}
                        key={`${post.skills[0].contentful_id}-${i}`}
                      />
                    ))}
                  </SkillList>
                </Aside>
                <Aside style={{ maxWidth: "30rem" }}>
                  {post.links.map(link => (
                    <Button
                      to={link.url}
                      target={link.targetBlank && "_blank"}
                      key={link.contentful_id}
                      color="green"
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
        skills
      }
      desc {
        childMarkdownRemark {
          html
        }
      }
      hero {
        fluid(maxWidth: 980, quality: 75) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`
