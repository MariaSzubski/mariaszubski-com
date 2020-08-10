import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { Row, Col } from "react-flexbox-grid"

import data from "../content/all-skills.yml"

import Layout from "../components/layout"
import { SkillGroup } from "../components/skill"
import { SkillList, SkillTag } from "../components/skill/list"
import Link from "../components/utilities/link"
import Button from "../components/button"
import ExpCard from "../components/experience/expCard"
import WorkshopCard from "../components/experience/workshop"
import HTML from "../components/utilities/html"

const Expand = styled.h4`
  text-align: center;
  &:hover {
    cursor: pointer;
  }
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
            companyUrl
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
                date
                label
                org
                detailsLink
              }
            }
          }
          ... on ContentfulJob {
            contentful_id
            title
            companyUrl
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
            companyUrl
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
            companyUrl
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
    <Layout>
      <section className="element">
        <hgroup>
          <h1>{data.about.title}</h1>
        </hgroup>
        <Row around="md">
          <Col md={12} lg={10} xl={9}>
            <HTML content={data.about.copy} className="highlighted" />
            <h3>Maria - LinkedIn - Let&#39;s Connect - GitHub - Download CV</h3>
          </Col>
        </Row>
        <Row around="md">
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

      {/* Volunteering */}
      <section className="element">
        <h1>{data.volunteering.title}</h1>
        <Row around="md">
          <Col md={12} lg={10} xl={8}>
            {data.volunteering.copy && (
              <HTML content={data.volunteering.copy} className="highlighted" />
            )}
            <div className="background">
              <h4>Recent Tech Talks I&#39;ve Led</h4>
              {data.volunteering.content[0].content
                .filter(c => c.__typename === "ContentfulTechTalk")
                .map(workshop => (
                  <WorkshopCard
                    workshop={workshop}
                    key={workshop.contentful_id}
                  />
                ))}
            </div>
          </Col>
        </Row>

        <Row around="md">
          <Col md={12} lg={10} xl={8}>
            <div className="element" style={{ textAlign: "center" }}>
              <Link to="/speaking">
                <h4>{"🙋🏻See other Tech Events I've volunteered with >"}</h4>
              </Link>
              <Button to="/contact">Book Me to Speak at an Event</Button>
            </div>
          </Col>
        </Row>
      </section>

      {/* Professional Experience */}
      <section className="element">
        <h1>{data.professional.title}</h1>
        <Row around="md">
          <Col md={12} lg={10} xl={8}>
            <Expand onClick={() => setToggle([!toggle[0], toggle[1]])}>
              {toggle[0] ? "Collapse" : "Expand"} Details
            </Expand>
            <div className="background">
              {data.professional.content.map(job => (
                <ExpCard job={job} key={job.contentful_id} toggle={toggle[0]} />
              ))}
            </div>
          </Col>
        </Row>
      </section>

      {/* Co-Ops */}
      <section className="element">
        <h1>{data.coop.title}</h1>
        <Row around="md">
          <Col md={12} lg={10} xl={8}>
            <Expand onClick={() => setToggle([toggle[0], !toggle[1]])}>
              Expand Details
            </Expand>
            <div className="background">
              {data.coop.content.map(job => (
                <ExpCard job={job} key={job.contentful_id} toggle={toggle[1]} />
              ))}
            </div>
          </Col>
        </Row>
      </section>

      {/* Education */}
      <section className="element">
        <h1>{data.education.title}</h1>
        <Row around="md">
          <Col md={12} lg={10} xl={8}>
            <div className="background">
              <ExpCard job={data.education.content[0]} />
            </div>
          </Col>
        </Row>
      </section>
    </Layout>
  )
}

export default AboutPage
