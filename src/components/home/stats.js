import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { Container, Row, Col } from "../grid-system"

import { colors, screen } from "../global/vars"

const StatsCol = styled(Col)`
  transform: translateY(-30%);
  z-index: 100;
  background-color: ${colors.black};
  background: linear-gradient(
    170deg,
    ${colors.black} 8%,
    ${colors.blue900} 100%
  );
  padding: 4rem 3rem 5rem 3rem;
  border-radius: 1rem;
  text-align: center;
  color: white;

  & > * > * > *:nth-of-type(1),
  & > * > * > *:nth-of-type(2) {
    margin-bottom: 4rem;
  }

  @media ${screen.min.md} {
    padding: 3rem 4rem 4rem 4rem;
    & > * > * > *:nth-of-type(1),
    & > * > * > *:nth-of-type(2)  {
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
  // const data = useStaticQuery(graphql`
  //   query {
  //   }
  // `)
  return (
    <Row justify="center" fluid>
      <StatsCol xs={11} sm={8} md={9.5} lg={8} xl={6.75} xxl={6} fluid>
        <Container>
          <Row>
            <Col xs={6} md={3.2}>
              <Num>2.5 yrs</Num>
              <h6>in business</h6>
            </Col>
            <Col xs={6} md={2.4}>
              <Num>7</Num>
              <h6>clients</h6>
            </Col>
            <Col xs={6} md={2.7}>
              <Num>28+</Num>
              <h6>projects</h6>
            </Col>
            <Col xs={6} md={3.7}>
              <Num>11 yrs</Num>
              <h6>industry experience</h6>
            </Col>
          </Row>
        </Container>
      </StatsCol>
    </Row>
  )
}

export default StatsSection
