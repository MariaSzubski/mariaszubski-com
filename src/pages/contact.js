import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Container, Row, Col } from "react-grid-system"

import Layout from "../components/layout"
import Link from "../components/utilities/link"
import HTML from "../components/utilities/html"

import Form from "../components/form"

const SpeakingPage = props => {
  let blogDate = new Date("2020-08-07")
  let trans = blogDate.toDateString()
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
    <Layout>
      <Container>
        <section className="element">
          <hgroup>
            <h1>Let&#39;s Work Together!</h1>
          </hgroup>
          <Row justify="center">
            <Col md={7} xl={6}>
              <HTML content={data.form.desc} className="text-center" />
            </Col>
          </Row>
          <Row justify="center">
            <Col md={5}>
              <Form config={data.form} source="Contact Page" />
              <ul>
                <li>✉️<Link to="mailto:hello@mariaszubski.com">hello@mariaszubski.com</Link></li>
                <li>Twitter</li>
                <li>Linked In</li>
                <li>Github</li>
              </ul>
            </Col>
          </Row>
        </section>
      </Container>
    </Layout>
  )
}

export default SpeakingPage
