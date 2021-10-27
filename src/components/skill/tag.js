import React from "react"
import PropTypes from "prop-types"

import icons from "./icons"
import { StyledIcon, StyledTag } from "./styles"

const SkillTag = props => {
  let Icon = icons[props.icon]
  const handleHover = () => props.handleHighlight(props.label || props.icon)
  return (
    <StyledTag
      title={props.label || props.icon}
      $simple={props.simple}
      $size={props.size}
      onMouseEnter={props.highlight ? handleHover : null}
    >
      {Icon && (
        <StyledIcon>
          <Icon light={props.theme === "light" ? 1 : 0} />
        </StyledIcon>
      )}
      {!props.simple && <div className="text">{props.label || props.icon}</div>}
    </StyledTag>
  )
}

SkillTag.propTypes = {
  theme: PropTypes.oneOf(["dark", "light", "transparent"]),
  icon: PropTypes.string,
  label: PropTypes.string,
  simple: PropTypes.bool,
  size: PropTypes.string,
  highlight: PropTypes.bool,
  handleHighlight: PropTypes.func,
}

SkillTag.defaultProps = {
  theme: "dark",
  simple: false,
  size: "2.2rem",
}

export default SkillTag
