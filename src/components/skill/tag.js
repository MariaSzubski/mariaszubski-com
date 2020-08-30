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

  .tr & {
    padding: 0.5rem 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.19rem;
    font-size: 1.7rem;
    color: ${colors.white};
  }

  .lt & {
    background-color: ${props =>
      props.$simple ? "transparent" : `${colors.white}EE`};
    color: ${colors.black};
    padding: 1.8rem 1.4rem;
    height: 3rem;
  }

  .dk & {
    background-color: ${colors.blue900 + "88"};
    padding: 2rem 1.2rem;
    height: 3.4rem;
    letter-spacing: 0.05rem;
  }

  &:hover {
    cursor: default;
  }

  ${StyledIcon} > * {
    height: 2.4rem;
    width: 2.4rem;
    margin-right: ${props => (props.$simple ? "0rem" : "1.1rem")};
  }

  @media ${screen.min.md} {
    font-size: 1.4rem;
    margin: 0.3rem 0.7rem 0.3rem 0rem;

    &:first-of-type {
      margin-left: 0rem;
    }
    &:last-of-type {
      margin-right: 0rem;
    }

    ${StyledIcon}:not(:last-of-type) > * {
      margin-right: ${props => (props.$simple ? "0.2rem" : "0.9rem")};
      height: ${props => props.$size};
      width: ${props => props.$size};
    }
  }
`

const SkillTag = props => {
  let Icon = icons[props.icon]
  return (
    <StyledTag title={props.label} $simple={props.simple} $size={props.size}>
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
}

SkillTag.defaultProps = {
  theme: "dark",
  simple: false,
  size: "2.2rem",
}

export default SkillTag
