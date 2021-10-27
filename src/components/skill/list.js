import React from "react"
import PropTypes from "prop-types"

import SkillTag from "./tag"
import { StyledList } from "./styles"

const SkillList = ({ children, ...props }) => (
  <StyledList className={`${props.light ? "lt" : "dk"}`}>{children}</StyledList>
)

SkillList.propTypes = {
  light: PropTypes.bool,
  children: PropTypes.node,
}

SkillList.defaultProps = {
  light: false,
}

export { SkillList, SkillTag }
