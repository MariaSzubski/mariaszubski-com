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

import { colors } from "../components/global/vars"

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

const Headline = styled.h3`
  text-align: left;
  font-weight: 400;
  color: white;
  margin-bottom: 4rem;

  @keyframes grow {
    0% {
      width: 0rem;
    }
    100% {
      width: 8rem;
    }
  }

  &:after {
    content: "";
    display: block;
    width: 0rem;
    height: 5px;
    background-color: ${colors.grape300};
    border-radius: 0.2rem;
    overflow: hidden;

    animation-name: grow;
    animation-duration: 0.4s;
    animation-timing-function: ease-out;
    animation-delay: 1.1s;
    animation-fill-mode: forwards;
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
                  fluid(maxWidth: 400, quality: 100) {
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
      <Container fluid style={{ maxWidth: 1440}}>
        <hgroup className="element">
          <h1>{data.title}</h1>
        </hgroup>

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
        {data.modules.map((section, i) => (
          <section className="element" key={section.contentful_id}>
            <Row>
              <Col lg={12}>
                <Headline>{section.title}</Headline>
              </Col>
            </Row>
            <Row>
              <Col lg={9} xl={4}>
                {i !== 0 && <HTML content={section.copy} className="text-md" />}
              </Col>
              <Col xl={7} offset={{ xl: 1 }}>
                <div className="background" style={{ padding: "2rem 0rem" }}>
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
            </Row>

            <Col xl={i === 0 ? 12 : 7}>
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
            </Col>
          </section>
        ))}
        <Row justify="center">
          <Col md={4}>
            <Link to="/contact">💁🏻‍♀️ Book me to speak at your event</Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default SpeakingPage
