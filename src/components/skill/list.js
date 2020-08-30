import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { screen, colors } from "../global/vars"
import SkillTag from "./tag"

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  > span {
    margin-right: 0rem;
  }

  @media ${screen.min.sm} and ${screen.max.lg} {
    flex-direction: row;
    > span {
      margin-right: 0.6rem;
    }
  }
`

const SkillList = ({ children, ...props }) => (
  <StyledList className={`${props.light ? "lt" : "dk"}`}>
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
