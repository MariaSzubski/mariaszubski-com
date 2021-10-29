import React from "react"

import { Row, Col } from "../grid-system"

import { Desc, Content, SLink } from "./styles"

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
