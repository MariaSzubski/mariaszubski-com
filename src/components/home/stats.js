import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { Container, Row, Col } from "../grid-system"
import SkillTag from "../skill/tag"
import HTML from "../utilities/html"

import { colors, screen } from "../global/vars"

const BioCol = styled(Col)`
  ${"" /* min-height: 60vh; */}
  display: flex;
  align-items: center;
  @media ${screen.min.xl} {
    ${"" /* min-height: 60vh; */}
  }
`

const StatsCol = styled(Col)`
  margin-top: 3rem;
  z-index: 100;
  background-color: #0C151D;
  padding: 3rem 2rem 4rem 2rem;
  border-radius: 0.6rem;
  text-align: center;
  color: white;

  & > * > * > *:nth-of-type(1),
  & > * > * > *:nth-of-type(2) {
    margin-bottom: 4rem;
  }

  @media ${screen.min.md} {
    margin-top: 0rem;
    transform: translateY(-30%);
    padding: 3rem 4rem 4rem 4rem;
    & > * > * > *:nth-of-type(1),
    & > * > * > *:nth-of-type(2) {
      margin-bottom: 0rem;
    }
  }
`

const Num = styled.div`
  font-size: 3.2rem;
  text-transform: lowercase;
  font-weight: 600;
  @media ${screen.min.lg} {
    font-size: 4rem;
  }
`

const StatsSection = props => {
  const data = useStaticQuery(graphql`
    query {
      stats: contentfulSection(contentful_id: { eq: "Ocq2hDEarPzaUfunPe137" }) {
        contentful_id
        copy {
          childMarkdownRemark {
            html
          }
        }
        content {
          ... on ContentfulKeyVal {
            contentful_id
            key
            value
          }
        }
      }
    }
  `)
  return (
    <Row justify="center" fluid>
      <StatsCol xs={9.5} sm={8} md={9.5} lg={8} xl={6.75} xxl={5.8} fluid>
        <Container aria-label="Business Statistics">
          <Row>
            {data.stats.content.map((stat, idx) => (
              <Col
                xs={6}
                md={(() => {
                  if (idx === 0) return 3.2
                  if (idx === 1) return 2.4
                  if (idx === 2) return 2.7
                  if (idx === 3) return 3.7
                })()}
                key={stat.contentful_id}
              >
                <Num style={{ color: colors.blue300 }} aria-label={`${stat.value} ${stat.key}`}><span aria-hidden>{stat.value}</span></Num>
                <h6 aria-hidden>{stat.key}</h6>
              </Col>
            ))}
          </Row>
        </Container>
      </StatsCol>

      <BioCol>
        <Container aria-label="Freelance Services">
          <Row justify="center" style={{ paddingTop: "8rem", paddingBottom: "10rem" }}>
            <Col lg={10} xl={8.5} xxl={7}>
              <HTML content={data.stats.copy} className="highlighted" />
            </Col>
          </Row>
        </Container>
      </BioCol>
    </Row>
  )
}

export default StatsSection
