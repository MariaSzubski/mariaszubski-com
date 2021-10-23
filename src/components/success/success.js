import React from "react"
import styled from "styled-components"

import { Container, Row, Col, Hide } from "../grid-system"
import { colors } from "../global/vars"
import Link from "../utilities/link"

const Desc = styled.p`
  padding-left: 0rem;
  li {
    margin-bottom: 2.4rem;
  }
`

const Content = styled.div`
  background: ${colors.white + "EE"};
  color: black;
  border-radius: 0.5rem;
  padding: 3rem 4rem;
  box-shadow: 0px 0.4rem 1rem rgba(0, 0, 20, 0.5);
  h3 {
    color: ${colors.black};
  }
`

const SLink = styled(Link)`
  text-shadow: none;
  color: ${colors.blue300};
`

const SuccessSection = () => {
  return (
    <Row
      align="center"
      justify="center"
      style={{
        minHeight: "80vh",
      }}
      className="element"
    >
      <Col xs={11} sm={9} md={8.5} lg={6.6} xl={5.5} xxl={4.5}>
        <Content>
          <hgroup>
            <h3>Thank You!</h3>
          </hgroup>

          <Desc>
            Your form has been submitted successfully. <br /> I&apos;ll get back
            to you as soon as possible.
          </Desc>

          <SLink to="/">Back to main page</SLink>
        </Content>
      </Col>
    </Row>
  )
}

export default SuccessSection
