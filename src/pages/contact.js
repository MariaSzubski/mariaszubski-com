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
  const { contentfulPage: data } = useStaticQuery(graphql`
    query {
      contentfulPage(contentful_id: { eq: "3wkQbDkmDvNmzOjGUhdigt" }) {
        contentful_id
        title
      }
    }
  `)

  // console.table(data.modules[0].content[0].label)
  return (
    <Layout>
      <h3>Contact Me</h3>
      <p>
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna.
      </p>
      <Row around="xs">
        <Col md={7}>
          <Form
            config={{
              form_fields: [
                {
                  required: true,
                  type: "input",
                  name: "field name 1",
                  placeholder: "What's Your Name?",
                },
                {
                  required: false,
                  type: "email",
                  name: "field name 1",
                  placeholder: "Email Address",
                },
                {
                  required: false,
                  type: "radio",
                  name: "field name 1",
                  placeholder: "placeholder",
                },
                {
                  required: false,
                  type: "textarea",
                  name: "field name 1",
                  placeholder: "How can I help?",
                },
                {
                  required: false,
                  type: "submit",
                  name: "field name 1",
                  placeholder: "Submit",
                },
              ],
            }}
          />
        </Col>
      </Row>
    </Layout>
  )
}

export default SpeakingPage