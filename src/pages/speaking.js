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
  flex-wrap: wrap;
  padding: 0.4rem;
  .gatsby-image-wrapper {
    border: 0.4rem solid transparent;
    border-radius: 1rem;
    flex: 1;
    ${"" /* flex-basis: 33.333%; */}
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
              ... on ContentfulImage {
                contentful_id
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

  console.table(data.modules[0].content[0].label)
  let imagesArr = []
  return (
    <Layout>
      <Grid fluid>
        <hgroup className="element">
          <h1>{data.title}</h1>
        </hgroup>
        <h3>Available Workshops</h3>
        [ Gatsby Workshop ]
        <p>More Coming Soon</p>

        {data.modules.map((section, i) => (
          <section className="element" key={section.contentful_id}>



            <Row between="md">
              <Col lg={9} xl={5}>
                <h3>{section.title}</h3>
                <HTML content={section.copy} />
                <ImageGroup className="element-minor">
                  {section.content
                    .filter(c => c.__typename === "ContentfulImage")
                    .map(img => {imagesArr.push(img)})}
                </ImageGroup>
              </Col>

              <Col xl={6}>
                <div className="background">
                  <h5 className="pad">{section.subtitle}</h5>
                  {section.content
                    .filter(c => c.__typename === "ContentfulTechTalk")
                    .map(talk => (
                      <WorkshopCard
                        compact
                        workshop={talk}
                        key={talk.contentful_id}
                      />
                    ))}
                </div>
              </Col>

              {/* <Col xl={i === 0 ? 10 : 7}>
                <ImageGroup className="element-minor">
                  {section.content
                    .filter(c => c.__typename === "ContentfulImage")
                    .map(img => (
                      <Img
                        fluid={img.image.fluid}
                        alt={img.alt}
                        objectFit="contain"
                        key={img.contentful_id}
                      />
                    ))}
                </ImageGroup>
              </Col> */}
            </Row>
          </section>
        ))}
        <section className="element">
          <ImageGroup className="element-minor">
            {imagesArr.map(img => (
                <Img
                  fluid={img.image.fluid}
                  alt={img.alt}
                  objectFit="contain"
                  key={img.contentful_id}
                />
              ))}
          </ImageGroup>
        </section>
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
