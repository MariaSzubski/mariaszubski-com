import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { screen, colors } from "../global/vars"
import SkillTag from "./tag"

const Groups = styled.div`
  background-color: hsla(0, 0%, 100%, 0.03);
  padding: 4rem 1rem;
  margin: 0rem -2rem;

  > div:not(:last-of-type) {
    margin-bottom: 4rem;
  }

  @media ${screen.min.md} {
    padding: 4rem 3rem;
    margin: 0rem;
  }
`

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  > span {
    margin-right: 0rem;
  }
`

const SkillList = ({ children, ...props }) => (
  <StyledList className={`element ${props.light ? "lt" : "dk"}`}>
    {children}
  </StyledList>
)

SkillList.propTypes = {
  light: PropTypes.bool,
  children: PropTypes.node,
}

SkillList.defaultProps = {
  light: false,
}

export { SkillList, SkillTag }
