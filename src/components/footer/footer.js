import React from "react"
import styled from "styled-components"
import { SkillGroup } from "../skill"

import data from "../../content/site-tech.yml"
import Link from "../utilities/link"
import { colors, screen } from "../global/vars"

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-top: 12rem;
  font-size: 1.3rem;
  text-align: center;
  font-weight: 600;
  color: ${colors.white};
  background-color: ${colors.black + "dd"};
`

const Credits = styled(Link)`
  display: block;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.1rem;
  font-weight: bold;
  color: ${colors.gray300};
  margin: 2rem auto 3rem;

  @media ${screen.min.sm} {

      position: absolute;
      bottom: 2rem;
      right: 2.4rem;
      margin: 0rem;
  }
`

const Footer = () => (
  <StyledFooter text-sm text-center>
    <SkillGroup data={data} center simple theme="transparent" />
      <Credits to="/attributions">Attributions</Credits>
    &copy; {new Date().getFullYear()} Maria Szubski Digital, LLC
  </StyledFooter>
)

export default Footer
