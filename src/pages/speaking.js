import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Container, Row, Col } from "react-grid-system"
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"
import HTML from "../components/utilities/html"
import Link from "../components/utilities/link"
import WorkshopCard from "../components/experience/workshop"

import { colors, screen } from "../components/global/vars"

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
  flex-wrap: wrap;
  padding: 0.4rem;
  .gatsby-image-wrapper {
    border: 0.4rem solid transparent;
    border-radius: 1rem;
    flex: 1 1 auto;
    max-height: 40rem;
    margin: auto;
  }
  @media ${screen.max.lg} {
    .gatsby-image-wrapper {
      flex-basis: 33.333%;
    }
  }
`

const Headline = styled.h3`
  &:after {
    background-color: ${colors.grape300};
  }
`

const SpeakingPage = props => {
  let blogDate = new Date("2020-08-07")
  let trans = blogDate.toDateString()
  const data = useStaticQuery(graphql`
    query {
      images: contentfulSection(
        contentful_id: { eq: "6TZjAZJTScGoLFa2OgpXR3" }
      ) {
        content {
          ... on ContentfulImage {
            contentful_id
            alt
            image {
              fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
      sections: contentfulPage(
        contentful_id: { eq: "3wkQbDkmDvNmzOjGUhdigt" }
      ) {
        contentful_id
        title
        subtitle
        modules {
          ... on ContentfulSection {
            contentful_id
            title
            subtitle
            copy {
              childMarkdownRemark {
                html
              }
            }
            content {
              ... on ContentfulTechTalk {
                contentful_id
                date
                label
                duration
                detailsLink
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Container style={{ padding: "0rem" }}>
        <Row justify="center">
          <Col xxl={10}>
            <hgroup className="element">
              <h1>{data.sections.title}</h1>
            </hgroup>

            <section className="element">
              <ImageGroup className="element-minor">
                {data.images.content.map(img => (
                  <Img
                    fluid={img.image.fluid}
                    alt={img.alt}
                    objectFit="cover"
                    objectPosition="14% 50%"
                    key={img.contentful_id}
                  />
                ))}
              </ImageGroup>
            </section>
            {data.sections.modules.map((section, i) => (
              <section className="element" key={section.contentful_id}>
                <Row>
                  <Col lg={12}>
                    <Headline>{section.title}</Headline>
                  </Col>
                </Row>
                <Row>
                  <Col lg={9} xl={4}>
                    <HTML content={section.copy} className="text-md" />
                  </Col>
                  <Col xl={7} offset={{ xl: 1 }}>
                    <div
                      className="background"
                      style={{ padding: "2rem 0rem" }}
                    >
                      <h5 className="pad">{section.subtitle}</h5>
                      {section.content
                        .filter(c => c.__typename === "ContentfulTechTalk")
                        .reverse()
                        .map(talk => (
                          <WorkshopCard
                            compact
                            workshop={talk}
                            key={talk.contentful_id}
                          />
                        ))}
                    </div>
                  </Col>
                </Row>
              </section>
            ))}
            <Row justify="center">
              <Col md={4}>
                <Link to="/contact">💁🏻‍♀️ Book me to speak at your event</Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default SpeakingPage
