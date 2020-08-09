import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Grid, Row, Col } from "react-flexbox-grid"
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"
import HTML from "../components/utilities/html"
import Link from "../components/utilities/link"
import WorkshopCard from "../components/experience/workshop"

const Aside = styled.aside`
  padding: 2rem 2rem;
  margin-bottom: 2rem;
`

const Section = styled.section`
  img {
    display: inline-block;
    max-width: 48%;
    margin: auto;
  }
`

const ImageGroup = styled.aside`
  display: flex;
  padding: 0.4rem;
  .gatsby-image-wrapper {
    border: 0.4rem solid transparent;
    border-radius: 1rem;
    flex: 1;
    max-height: 40rem;
    margin: auto;
  }
`

const SpeakingPage = props => {
  let blogDate = new Date("2020-08-07")
  let trans = blogDate.toDateString()
  const { contentfulPage: data } = useStaticQuery(graphql`
    query {
      contentfulPage(contentful_id: { eq: "3wkQbDkmDvNmzOjGUhdigt" }) {
        title
        subtitle
        modules {
          ... on ContentfulSection {
            id
            title
            subtitle
            copy {
              childMarkdownRemark {
                html
              }
            }
            content {
              ... on ContentfulTechTalk {
                id
                date
                label
                org
                duration
                detailsLink
                expCV
              }
              ... on ContentfulImage {
                id
                alt
                image {
                  fluid(maxWidth: 800, quality: 100) {
                    ...GatsbyContentfulFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Grid fluid>
        <hgroup className="element">
          <h1>{data.title}</h1>
        </hgroup>
        {data.modules.map((section, idx_s) => (
          <section className="element" key={`${data.title}-section-${idx_s}`}>
            <Row around="md">
              <Col lg={9} xl={6}>
                <h3>{section.title}</h3>
                <HTML content={section.copy} />
                <h5>{section.subtitle}</h5>
              </Col>
              <Col xl={7}>
                <div
                  className="background"
                  style={{ margin: "20px 0px 20px 0px", padding: "2rem" }}
                >
                  {section.content
                    .filter(c => c.__typename === "ContentfulTechTalk")
                    .map((talk, idx_t) => (
                      <WorkshopCard
                        workshop={{
                          title: talk.label,
                          date: talk.date,
                          duration: talk.duration,
                        }}
                        compact
                        key={`${section.title}-talk-${idx_t}`}
                      />
                    ))}
                </div>
              </Col>

              <Col xl={idx_s === 0 ? 10 : 7}>
                <ImageGroup>
                  {section.content
                    .filter(c => c.__typename === "ContentfulImage")
                    .map((img, idx_i) => (
                      <Img
                        fluid={img.image.fluid}
                        alt={img.alt}
                        objectFit="contain"
                        key={`${section.title}-image-${idx_i}`}
                      />
                    ))}
                </ImageGroup>
              </Col>
            </Row>
          </section>
        ))}
        <Row around="xs">
          <Col md={3}>
            <Link to="/contact">💁🏻‍♀️ Book me to speak at your event</Link>
          </Col>
        </Row>
      </Grid>
    </Layout>
  )
}

export default SpeakingPage
