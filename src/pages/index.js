import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
// import { SkillGroup } from "../components/skill"
// import Testimonials from "../components/testimonials"

import { colors, screen } from "../components/global/vars"
// import endorsements from "../content/endorsements.yml"
// import data from "../content/all-skills.yml"

// NEW SECTIONS
import HeroSection from "../components/home/hero"
import StatsSection from "../components/home/stats"
import CalloutsSection from "../components/home/callouts"
import FeaturedSection from "../components/home/featured"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout fluid title="Home Page - Available For Hire">
    <HeroSection />
    {/* <div style={{ background: colors.black + "33" }}> */}
    <div style={{ background: colors.black + "99" }}>
      <StatsSection />
    </div>
    <CalloutsSection />
    {/* <div style={{ background: colors.black + "33" }}> */}
    <div style={{ background: colors.black + "99" }}>
      <FeaturedSection />
    </div>
    {/* <SkillGroup title="Skills" data={data} /> */}
    <Contact />
  </Layout>
)

export default IndexPage
