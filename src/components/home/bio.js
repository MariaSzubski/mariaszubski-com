import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { Container, Row, Col } from "../grid-system"
import HTML from "../utilities/html"

const BioCol = styled(Col)`
  display: flex;
  align-items: center;
`

const BioSection = props => {
  const data = useStaticQuery(graphql`
    query {
      stats: contentfulSection(contentful_id: { eq: "Ocq2hDEarPzaUfunPe137" }) {
        contentful_id
        copy {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)
  return (
    <Row justify="center" fluid>
      <BioCol>
        <Container aria-label="Freelance Services">
          <Row
            justify="center"
            style={{ paddingTop: "14rem", paddingBottom: "14rem" }}
          >
            <Col lg={10} xl={8.5} xxl={7}>
              <HTML content={data.stats.copy} className="highlighted" />
            </Col>
          </Row>
        </Container>
      </BioCol>
    </Row>
  )
}

export default BioSection
