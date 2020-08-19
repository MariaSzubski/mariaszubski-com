import React from "react"
import styled from "styled-components"
import { SkillGroup } from "../skill"

import data from "../../content/site-tech.yml"
import { colors } from "../global/vars"

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-top: 12rem;
  font-size: 1.3rem;
  text-align: center;
  font-weight: 600;
  color: ${colors.white};
`

const Footer = () => (
  <StyledFooter text-sm text-center>
    <SkillGroup data={data} center simple />
    &copy; {new Date().getFullYear()} Maria Szubski Digital, LLC
  </StyledFooter>
)

export default Footer
