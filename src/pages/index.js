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
import BioSection from "../components/home/bio"
import FeaturedSection from "../components/home/featured"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout fluid>
    <HeroSection />
    {/* <div style={{ background: colors.black + "33" }}> */}
    <div
      style={{
        background: `${colors.black}`,
      }}
    >
      <StatsSection />
      <FeaturedSection />
    </div>
    <div
      style={{
        background: `linear-gradient( 200deg, ${colors.black + "99"} 0%,  ${
          colors.plum500 + "44"
        }  100% )`,
      }}
    >
      <BioSection />
    </div>
    <div style={{ background: colors.black + "99" }}>
      <CalloutsSection />
    </div>
    {/* <div style={{ background: colors.black + "33" }}> */}
    {/* <SkillGroup title="Skills" data={data} /> */}
    <Contact />
  </Layout>
)

export default IndexPage
