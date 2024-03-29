import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { Container, Row, Col } from "../grid-system"
import HTML from "../utilities/html"
import { HighQuality, Streamline, Teamwork } from "../social"
import { colors, screen } from "../global/vars"

const SRow = styled(Row)`
  padding-top: 8rem;
  padding-bottom: 8rem;
  min-height: 90vh;
  @media ${screen.min.lg} {
    min-height: auto;
    height: 90vh;
    max-height: 1150px;
  }
`

const SCol = styled(Col)`
  &:not(first-of-type) {
    margin-top: 5rem;
  }
  svg {
    max-width: 140px;
    display: block;
    margin: auto;
    box-shadow: -3px 3px 30px #00000066;
    border-radius: 100%;
  }

  @media ${screen.min.lg} {
    &:not(first-of-type) {
      margin-top: 0rem;
    }
    svg {
      max-width: 170px;
    }
  }
  @media ${screen.min.xl} {
    svg {
      max-width: 220px;
    }
  }
`
const Headline = styled.p`
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
  margin-top: 3rem;
`

const StyledH1 = styled.h1`
  text-align: center;
  margin-bottom: 8rem;
  color: ${colors.pink};
  &:after {
    display: none;
  }
`

const CalloutsSection = props => {
  const data = useStaticQuery(graphql`
    query {
      callouts: contentfulSection(
        contentful_id: { eq: "173TesyPA50Bsy3akJV8lU" }
      ) {
        copy {
          childMarkdownRemark {
            html
          }
        }
        subtitle
        content {
          ... on ContentfulSection {
            contentful_id
            subtitle
            copy {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `)
  return (
    <SRow align="center" fluid>
      <Col fluid>
        <StyledH1>Services I Offer</StyledH1>
        <Container>
          <Row justify="center">
            {/* <Col xs={12}>
              <h1>{data.callouts.subtitle}</h1>
              <HTML content={data.callouts.copy} />
            </Col> */}
            {data.callouts.content.map((callout, idx) => (
              <SCol
                xs={10}
                sm={8.5}
                md={7}
                lg={3.2}
                offset={{ lg: idx === 0 ? 0 : 0.75 }}
                key={callout.contentful_id}
              >
                {idx === 0 && <HighQuality />}
                {idx === 1 && <Streamline />}
                {idx === 2 && <Teamwork />}
                <Headline>{callout.subtitle}</Headline>
                <HTML content={callout.copy} className="text-md" />
              </SCol>
            ))}
          </Row>
        </Container>
      </Col>
    </SRow>
  )
}

export default CalloutsSection
