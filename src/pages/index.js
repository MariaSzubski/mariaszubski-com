import React from "react"
import styled from "styled-components"

import { Container, Row, Col, Show } from "../components/grid-system"
import Layout from "../components/layout"
import SEO from "../components/layout/seo"

import Contact from "../components/contact"
import Button from "../components/button/button"
import Link from "../components/utilities/link"
import { SkillGroup } from "../components/skill"
// import Testimonials from "../components/testimonials"

import skills from "../content/specialize.yml"
import { colors, screen } from "../components/global/vars"
// import endorsements from "../content/endorsements.yml"









// NEW SECTIONS
import HeroSection from "../components/home/hero"
import StatsSection from "../components/home/stats"
import CalloutsSection from "../components/home/callouts"
import FeaturedSection from "../components/home/featured"





const IndexPage = () => (
  <Layout fluid>
    <SEO title="Home" />
    <HeroSection />
    <StatsSection />
    <p className="text-lg">This is a short blurb about what I offer and who I work with.</p>
    <CalloutsSection />
    <FeaturedSection />
    <Contact />


    {/* <Row justify="center" align="flex-start">
      <Stats xs={11} md={9.5} lg={8} xl={6.75} xxl={5}>
        <Row>
          <Col md={3}>
            <StatsNum>2.5 yrs</StatsNum>
            <h6>in business</h6>
          </Col>
          <Col md={2.4}>
            <StatsNum>7</StatsNum>
            <h6>clients</h6>
          </Col>
          <Col md={2.6}>
            <StatsNum>28+</StatsNum>
            <h6>projects</h6>
          </Col>
          <Col md={4}>
            <StatsNum>11 yrs</StatsNum>
            <h6>industry experience</h6>
          </Col>
        </Row>
      </Stats>
    </Row>
    ^ Appear/hide on scroll
    <Contact /> */}
    {/* <Testimonials data={endorsements} /> */}
  </Layout>
)

export default IndexPage
