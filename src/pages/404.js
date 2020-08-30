import React from "react"

import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import { Row, Col } from "../components/grid-system"
import Link from "../components/utilities/link"

const NotFoundPage = () => (
  <Layout fluid title="404: Page Not Found">
    <Row
      align="center"
      justify="center"
      style={{ minHeight: "70vh" }}
      className="element"
    >
      <Col md={10} lg={5.5} xl={8} xxl={9}>
        <hgroup>
          <h3>Page Not Found</h3>
        </hgroup>
        <Link to="/">Back to home page</Link>
      </Col>
    </Row>
  </Layout>
)

export default NotFoundPage
