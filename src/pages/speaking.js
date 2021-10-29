import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"
import HTML from "../components/utilities/html"
import Button from "../components/button"
import WorkshopCard from "../components/experience/workshop"

import { Container, Row, Col } from "../components/grid-system"
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
              fluid(maxWidth: 240, maxHeight: 240, quality: 70) {
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
                date(formatString: "MMM YYYY")
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
    <Layout title="Guest Speaking, Panels, & Workshops">
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
          <Container>
            <Row justify="center" style={{ marginTop: "8rem" }}>
              <Col xl={8.5}>
                <p className="text-lg">
                  I regularly volunteer to lead and organize meetups in the tech
                  community. If you’re looking for a guest speaker, I’m
                  available to give talks on web development, javascript,
                  accessibility, and small business ownership.
                </p>
                <Button
                  to="/contact"
                  color="green"
                  style={{
                    display: "flex",
                    maxWidth: "400px",
                    margin: "3rem auto 0rem",
                  }}
                >
                  Book Me to Speak at an Event
                </Button>
              </Col>
            </Row>
          </Container>
          {data.sections.modules.map((section, i) => (
            <section className="element" key={section.contentful_id}>
              <Container fluid>
                <Row>
                  <Col lg={12}>
                    <Headline>{section.title}</Headline>
                  </Col>
                </Row>
                <Row>
                  <Col lg={9} xl={4.1}>
                    <HTML content={section.copy} className="text-md" />
                  </Col>
                  <Col xl={7.4} offset={{ xl: 0.5 }}>
                    <div className="background" style={{ paddingTop: "2rem" }}>
                      <h5 className="pad" style={{ color: colors.grape300 }}>
                        {section.subtitle}
                      </h5>
                      {section.content.map(talk => (
                        <WorkshopCard
                          workshop={talk}
                          key={talk.contentful_id}
                        />
                      ))}
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          ))}
        </Col>
      </Row>
    </Layout>
  )
}

export default SpeakingPage
