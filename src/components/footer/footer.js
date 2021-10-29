import React from "react"

import { SkillGroup } from "../skill"

import { StyledFooter, Credits } from "./styles"
import data from "../../content/site-tech.yml"

const Footer = () => (
  <StyledFooter text-sm text-center>
    <SkillGroup data={data} center simple highlight theme="transparent" />
    <Credits to="/attributions">Attributions</Credits>
    &copy; {new Date().getFullYear()} Maria Szubski Digital, LLC
  </StyledFooter>
)

export default Footer
