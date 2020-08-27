import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"
import Img from "gatsby-image"

import data from "../content/all-skills.yml"

import { Container, Row, Col } from "../components/grid-system"
import Layout from "../components/layout"
import { SkillGroup } from "../components/skill"
import { SkillList, SkillTag } from "../components/skill/list"
import Link from "../components/utilities/link"
import Button from "../components/button"
import ExpCard from "../components/experience/expCard"
import WorkshopCard from "../components/experience/workshop"
import HTML from "../components/utilities/html"

import Email from "../components/social/email"
import Twitter from "../components/social/twitter"
import LinkedIn from "../components/social/linkedin"
import Github from "../components/social/github"
import Resume from "../components/social/resume"

import { colors, screen } from "../components/global/vars"

const Expand = styled.h5`
  text-align: left;
  user-select: none;
  margin-bottom: 3.6rem;
  color: ${colors.blue200};
  &:hover {
    cursor: pointer;
  }

  @media ${screen.min.md} {
    text-align: right;
  }
`

const StyledH4 = styled.h4`
  font-family: Milkshake;
  margin-left: 28%;
  font-size: 4rem;
  color: ${colors.pink500};
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
        content {
          ... on ContentfulImage {
            id
            alt
            image {
              fluid(maxWidth: 2400, quality: 100) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }

      professional: contentfulSection(
        contentful_id: { eq: "3NPjhnwQCxWrDwz0r1D2zB" }
      ) {
        title
        contentful_id
        content {
          ... on ContentfulJob {
            contentful_id
            title
            companyName
            team
            dateRange
            jobTitles
            location
            desc {
              childMarkdownRemark {
                html
              }
            }
          }
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
          ... on ContentfulJob {
            contentful_id
            title
            companyName
            team
            dateRange
            jobTitles
            location
            desc {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }

      coop: contentfulSection(contentful_id: { eq: "7D58ZXsMEYkwvqFjYLrn1G" }) {
        title
        contentful_id
        content {
          ... on ContentfulJob {
            contentful_id
            title
            companyName
            team
            dateRange
            jobTitles
            location
            desc {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }

      education: contentfulSection(
        contentful_id: { eq: "286nn25pRemLOfovDcqpS2" }
      ) {
        title
        contentful_id
        content {
          ... on ContentfulJob {
            contentful_id
            title
            companyName
            team
            dateRange
            jobTitles
            location
            desc {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `)
  let [toggle, setToggle] = useState([false, false])
  return (
    <Layout fluid>
      <Container>
        <section className="element">
          <hgroup>
            <h1>{data.about.title}</h1>
          </hgroup>
          <Row justify="center">
            <Col md={10} lg={9.5} xl={8} xxl={6.25}>
              <HTML content={data.about.copy} className="text-md" />
              <StyledH4>- Maria </StyledH4>
              <div>
                <Email />
                <Github />
                <LinkedIn />
                <Twitter />
                <Resume />
              </div>
            </Col>
          </Row>
          <Row justify="center">
            <Col xs={5} md={3} xl={2}>
              <Img
                fluid={data.about.content[0].image.fluid}
                alt={data.about.content[0].alt}
                css={`
                  border-radius: 100%;
                `}
              />
            </Col>
          </Row>
        </section>

        <section className="element">
          <Row justify="center">
            <Col sm={12} md={11} lg={9.5} xl={8} xxl={6.25}>
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
                <div className="background" style={{ padding: "2rem 0rem" }}>
                  <h5 className="pad">Recent Tech Talks I&#39;ve Led</h5>
                  {data.volunteering.content[0].content
                    .filter(c => c.__typename === "ContentfulTechTalk")
                    .reverse()
                    .map(workshop => (
                      <WorkshopCard
                        workshop={workshop}
                        key={workshop.contentful_id}
                        compact={false}
                      />
                    ))}
                </div>
                <div className="element" style={{ textAlign: "center" }}>
                  <Link to="/speaking">
                    <h4>{"🙋🏻See other Tech Events I've volunteered with >"}</h4>
                  </Link>
                  <Button to="/contact" color="green" fill>
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
