import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Container, Row, Col, Hide } from "../grid-system"
import Form from "../form"
import Button from "../button"
import { Email, Twitter, LinkedIn, Github } from "../social"

import { Wrapper, Desc, ContactH3 } from "./styles"

const ContactSection = () => {
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
      <Wrapper>
        <Container>
          <Row align="center" style={{ minHeight: "80vh" }}>
            <Col
              xs={11.2}
              md={10}
              lg={5.5}
              xl={5}
              xxl={4}
              offset={{ xs: 0.4, md: 1, lg: 0.5, xl: 0.5, xxl: 1.5 }}
            >
              <hgroup>
                <h3>Let&#39;s Work Together!</h3>
              </hgroup>
              <Desc content={data.form.desc} />
              <Button
                to={`MSzubski_FrontEndDeveloper_Resume.pdf`}
                color="pink"
                rounded
                target="_blank"
              >
                Resume (PDF)
              </Button>
              <Email />
              <Github />
              <LinkedIn />
              <Twitter />
            </Col>
            <Col
              xs={11.2}
              md={10}
              lg={5}
              xl={5}
              xxl={3.75}
              offset={{ xs: 0.4, md: 1, lg: 0.25, xl: 0.5, xxl: 1 }}
            >
              <Hide lg>
                <ContactH3>Contact Form</ContactH3>
              </Hide>
              <Form
                config={data.form}
                action="/success"
                source="Contact Page"
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </section>
  )
}

export default ContactSection
