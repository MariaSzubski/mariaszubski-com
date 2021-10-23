import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"

import { Container, Row, Col } from "../components/grid-system"
import Layout from "../components/layout"
import Link from "../components/utilities/link"
import Button from "../components/button"
import ExpCard from "../components/experience/expCard"
import WorkshopCard from "../components/experience/workshop"
import HTML from "../components/utilities/html"

import { Email, Twitter, LinkedIn, Github, Resume } from "../components/social"

import { colors, screen } from "../components/global/vars"

const Expand = styled.h5`
  text-align: left;
  user-select: none;
  margin-bottom: 4.2rem;
  color: ${colors.blue200};
  text-shadow: 1px 1px 3px ${colors.blue900};
  &:hover {
    cursor: pointer;
  }

  @media ${screen.min.md} {
    text-align: right;
  }
`

const StyledH4 = styled.h4`
  font-family: Milkshake;
  margin-left: 20%;
  font-size: 4rem;
  color: ${colors.gray100};
  font-weight: 300;
`

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      about: contentfulSection(
        contentful_id: { eq: "22YLUykvzPJVuW80cLyWDR" }
      ) {
        title
        contentful_id
        copy {
          childMarkdownRemark {
            html
          }
        }
      }

      professional: contentfulSection(
        contentful_id: { eq: "3NPjhnwQCxWrDwz0r1D2zB" }
      ) {
        title
        contentful_id
        content {
          ...FragmentContentfulJob
        }
      }

      volunteering: contentfulSection(
        contentful_id: { eq: "6mmf8cY0iOAoc5KAWvSj79" }
      ) {
        title
        contentful_id
        copy {
          childMarkdownRemark {
            html
          }
        }
        content {
          ... on ContentfulSection {
            contentful_id
            subtitle
            content {
              ... on ContentfulTechTalk {
                contentful_id
                date(formatString: "MMM YYYY")
                label
                org
                detailsLink
              }
            }
          }
          ...FragmentContentfulJob
        }
      }

      coop: contentfulSection(contentful_id: { eq: "7D58ZXsMEYkwvqFjYLrn1G" }) {
        title
        contentful_id
        content {
          ...FragmentContentfulJob
        }
      }

      education: contentfulSection(
        contentful_id: { eq: "286nn25pRemLOfovDcqpS2" }
      ) {
        title
        contentful_id
        content {
          ...FragmentContentfulJob
        }
      }
    }
  `)
  let [toggle, setToggle] = useState([true, false])
  return (
    <Layout fluid title="About Me - Bio">
      <Container>
        <section className="element">
          <Row justify="center">
            <hgroup>
              <h1>{data.about.title}</h1>
            </hgroup>
          </Row>
          <Row justify="center">
            <Col md={10} lg={9.5} xl={8} xxl={6.25}>
              <HTML content={data.about.copy} className="" />
              <StyledH4>
                - Maria
                <br />
                <Email />
                <Github />
                <LinkedIn />
                <Twitter />
                {/* <Resume /> */}
              </StyledH4>
            </Col>
          </Row>
        </section>

        <section className="element">
          <Row justify="center">
            <Col sm={12} md={12} lg={9.5} xl={8} xxl={6.25}>
              {/* Professional Experience */}
              <section className="element">
                <Row justify="space-between" align="flex-end">
                  <Col md={8.75}>
                    <h3>{data.professional.title}</h3>
                  </Col>
                  <Col md={3.25}>
                    <Expand onClick={() => setToggle([!toggle[0], toggle[1]])}>
                      {toggle[0] ? "Collapse" : "Expand"} Details
                    </Expand>
                  </Col>
                </Row>
                <div className="background">
                  {data.professional.content.map(job => (
                    <ExpCard
                      job={job}
                      key={job.contentful_id}
                      toggle={toggle[0]}
                    />
                  ))}
                </div>
              </section>

              {/* Workshops */}
              <section className="element">
                <h3>{data.volunteering.title}</h3>
                <Row>
                  <Col xxl={8.5}>
                    {data.volunteering.copy && (
                      <HTML
                        content={data.volunteering.copy}
                        className="text-md"
                      />
                    )}
                  </Col>
                </Row>
                <div className="background" style={{ paddingTop: "2rem" }}>
                  <h5 className="pad" style={{ color: colors.grape300 }}>
                    Recent Tech Talks I&#39;ve Led
                  </h5>
                  {data.volunteering.content[0].content
                    .filter(c => c.__typename === "ContentfulTechTalk")
                    .reverse()
                    .map(workshop => (
                      <WorkshopCard
                        workshop={workshop}
                        key={workshop.contentful_id}
                      />
                    ))}
                </div>
                <div style={{ textAlign: "center", marginTop: "5rem" }}>
                  <Link to="/speaking">
                    <h4>{"View More ->"}</h4>
                  </Link>
                  <Button
                    to="/contact"
                    color="green"
                    style={{ marginTop: "2rem" }}
                  >
                    Book Me to Speak at an Event
                  </Button>
                </div>
              </section>

              {/* Co-Ops */}
              <section className="element">
                <Row justify="space-between" align="flex-end">
                  <Col md={8.75}>
                    <h3>{data.coop.title}</h3>
                  </Col>
                  <Col md={3.25}>
                    <Expand onClick={() => setToggle([toggle[0], !toggle[1]])}>
                      {toggle[1] ? "Collapse" : "Expand"} Details
                    </Expand>
                  </Col>
                </Row>
                <div className="background">
                  {data.coop.content.map(job => (
                    <ExpCard
                      job={job}
                      key={job.contentful_id}
                      toggle={toggle[1]}
                    />
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="element">
                <h3>{data.education.title}</h3>
                <div className="background">
                  <ExpCard job={data.education.content[0]} />
                </div>
              </section>
            </Col>
          </Row>
        </section>
      </Container>
    </Layout>
  )
}

export default AboutPage
