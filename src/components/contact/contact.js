import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Row, Col, Visible } from "react-grid-system"

import HTML from "../utilities/html"
import Form from "../form"

import Email from "../social/email"
import Twitter from "../social/twitter"
import LinkedIn from "../social/linkedin"
import Github from "../social/github"

import { colors, screen } from "../global/vars"

const Desc = styled(HTML)`
  font-size: 2.3rem;
  p:last-of-type {
    font-size: 1.6rem;
  }
  @media ${screen.min.sm} {
    font-size: 2.6rem;
    p:last-of-type {
      font-size: 2rem;
    }
  }
`

const ContactH3 = styled.h3`
  margin-top: 6rem;
  &:after {
    background-color: ${colors.green300};
    animation-delay: 1.8s;
  }
`

const ContactSection = props => {
  const data = useStaticQuery(graphql`
    query {
      form: contentfulForm(contentful_id: { eq: "2BIm4mvh8sivBJmxWvjBbL" }) {
        contentful_id
        title
        action
        desc {
          childMarkdownRemark {
            html
          }
        }
        formFields {
          contentful_id
          name
          required
          type
          placeholder
          values
        }
      }
    }
  `)

  return (
    <section className="element">
      <Row align="center" style={{ minHeight: "80vh" }}>
        <Col
          md={10}
          lg={5.5}
          xl={5}
          xxl={4}
          offset={{ md: 1, lg: 0.5, xl: 0.5, xxl: 1.5 }}
        >
          <hgroup>
            <h3>Let&#39;s Work Together!</h3>
          </hgroup>
          <Desc content={data.form.desc} />
          <Email />
          <Github />
          <LinkedIn />
          <Twitter />
        </Col>
        <Col
          md={10}
          lg={5}
          xl={5}
          xxl={3.75}
          offset={{ md: 1, lg: 0.25, xl: 0.5, xxl: 1 }}
        >
          <Visible xs sm md>
            <ContactH3>Contact Form</ContactH3>
          </Visible>
          <Form config={data.form} source="Contact Page" />
        </Col>
      </Row>
    </section>
  )
}

export default ContactSection
