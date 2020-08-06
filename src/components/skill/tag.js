import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { colors, screen } from "../global/vars"
import icons from "./icons"
import Github from "./icons/github"

const StyledIcon = styled.span`
  display: inline-block;
`

const StyledTag = styled.span`
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  margin: 0.3rem;
  font-weight: 700;
  text-transform: capitalize;
  font-size: 1rem;

  .text {
    height: 1.8rem;
  }

  .lt & {
    background-color: ${props => props.$simple ? "transparent" : `${colors.white}EE`};
    color: ${colors.black};
    padding: 1.8rem 1.4rem;
    height: 3rem;
  }

  .dk & {
    background-color: ${colors.blue900 + "80"};
    padding: 2rem 1.2rem;
    height: 3.4rem;
  }

  &:hover {
    cursor: default;
  }

  ${StyledIcon} > * {
    height: 2.2rem;
    width: 2.2rem;
    margin-right: ${props => (props.$simple ? "0rem" : "1.1rem")};
  }

  @media ${screen.min.md} {
    font-size: 1.4rem;
    margin: 0.3rem 0.6rem 0.3rem 0rem;

    &:first-of-type {
      margin-left: 0rem;
    }
    &:last-of-type {
      margin-right: 0rem;
    }

    ${StyledIcon} > * {
      margin-right: ${props => (props.$simple ? "0rem" : "0.9rem")};
    }
  }
`

const SkillTag = props => {
  let Icon = icons[props.icon]
  return (
    <StyledTag title={props.label} $simple={props.simple}>
      {Icon && (
        <StyledIcon>
          <Icon light={props.light ? 1 : 0} />
        </StyledIcon>
      )}
      {!props.simple && <div className="text">{props.label || props.icon}</div>}
    </StyledTag>
  )
}

SkillTag.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  light: PropTypes.bool,
  simple: PropTypes.bool,
}

SkillTag.defaultProps = {
  light: false,
  simple: false,
}

export default SkillTag
