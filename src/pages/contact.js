import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Grid, Row, Col } from "react-flexbox-grid"

import Layout from "../components/layout"
import Link from "../components/utilities/link"

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
      <h3>Contact Me</h3>
      <p>
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna.
      </p>
      <Row around="xs">
        <Col md={7}>
          {/* <Form config={data.form} source="Contact Page" /> */}
        </Col>
      </Row>
    </Layout>
  )
}

export default SpeakingPage
