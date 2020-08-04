import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { Row, Col } from "react-flexbox-grid"

import data from "../content/all-skills.yml"

import Layout from "../components/layout"
import { SkillGroup } from "../components/skill"
import { SkillList, SkillTag } from "../components/skill/list"
import Link from "../components/utilities/link"

const Headshot = () => {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "headshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.headshot.childImageSharp.fluid}
      css={`
        border-radius: 100%;
        // border: 3px solid black;
      `}
    />
  )
}

const AboutPage = () => (
  <Layout>
    <hgroup>
      <h1>About Me</h1>
    </hgroup>

    <section className="element">
      <Row around="md">
        <Col md={12} lg={10} xl={9}>
          <p className="text-lg">
            Hi, I&#39;m Maria and I work remotely as a{" "}
            <strong>Freelance Front-End Developer</strong> based in Cincinnati,
            OH. I specialize in <strong>Javascript</strong>,{" "}
            <strong>React</strong>, <strong>JAMStack</strong>, and{" "}
            <strong>Shopify</strong>. I love to help small businesses launch
            projects with the best practices in accessibility, user experience,
            and maintainable code standards.
          </p>
          <p>
            I&#39;ve been a full-time contractor since 2018 and have worked with{" "}
            <strong>7 clients</strong> on over <strong>25 projects</strong>.
            I’ve launched websites solo and have been embedded in teams
            long-term. I pick up development languages and frameworks quickly
            and am comfortable hopping on whatever tech stack best suits the
            client&#39;s needs.
          </p>
          <p>
            Before freelancing, I spent 7 years as a{" "}
            <strong>UX Designer</strong> and <strong>Developer</strong> in the
            consumer retail, entertainment, sports, and B2B software industries.
            I volunteered with a tech non-profit for 3 years, organizing events
            and classes for the local chapter. I&#39;ve led in-person workshops
            on <strong>GatsbyJS</strong> and Intro to Web Development.
          </p>

          <h4 className="pad">Interested in working together?</h4>

          <p>
            I&#39;m always looking for new clients! Whether you have a specific
            project in mind or your agency needs a part-time developer to handle
            project overflow, I&#39;m happy to hear from you. Reach out at{" "}
            <Link href="mailto:hello@mariaszubski.com" target="_blank">
              hello@mariaszubski.com
            </Link>{" "}
            or through{" "}
            <Link href="https://linkedin.com/in/mariaszubski" target="_blank">
              LinkedIn
            </Link>{" "}
            to get the ball rolling.
          </p>
        </Col>
      </Row>

      <Row around="md">
        <Col xs={5} md={3} xl={2}>
          <Headshot />
        </Col>
      </Row>
    </section>

    <section className="element">
      <h3>Professional Experience</h3>



      <h4>Web Development</h4>
      <h6><a href="">Maria Szubski Digital, LLC</a> {`//`} Team</h6>
      <p>
        Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis
        euismod semper. Donec id elit non mi porta gravida at eget metus. Donec
        ullamcorper nulla non metus.
      </p>
      <h6>Jan 2018 - Present</h6><h6>Cincinnati, OH</h6>





      <h4>Card Headers</h4>
      <h6>Labels</h6>
      <p>
        <strong>Front-End Development Consultant</strong>
      </p>
      <p className="subheadline">Company Name</p>
      <p>
        Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis
        euismod semper. Donec id elit non mi porta gravida at eget metus. Donec
        ullamcorper nulla non metus.
      </p>
      <p className="headline">UX Designer</p>
      <p className="subheadline">Company Name // Team</p>
      <p>
        Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
        ligula porta felis euismod semper. Vivamus sagittis lacus vel augue
        laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo
        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
        Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur et.
      </p>
    </section>
  </Layout>
)

export default AboutPage
