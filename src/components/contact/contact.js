import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Row, Col } from "react-grid-system"

import HTML from "../utilities/html"
import Email from "../social/email"
import Form from "../form"

import { colors } from "../global/vars"

const Headline = styled.h3`
  text-align: left;
  font-weight: 400;
  color: white;

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
    background-color: ${colors.pink500};
    border-radius: 0.2rem;
    overflow: hidden;

    animation-name: grow;
    animation-duration: 0.4s;
    animation-timing-function: ease-out;
    animation-delay: 1.1s;
    animation-fill-mode: forwards;
  }
`

const Desc = styled(HTML)`
  font-size: 2.6rem;
  p:last-of-type {
    font-size: 2rem;
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
        <Col md={5} xl={4} offset={{ xl: 1 }}>
          <hgroup>
            <Headline>Let&#39;s Work Together!</Headline>
          </hgroup>
          <Desc content={data.form.desc} />
          <Email />
          <Email />
          <Email />
          <Email />
        </Col>
        <Col md={5} xl={3.5} offset={{ xl: 1 }}>
          <Form config={data.form} source="Contact Page" />
        </Col>
      </Row>
    </section>
)}

export default ContactSection
