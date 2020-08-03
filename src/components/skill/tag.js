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
  font-size: 1.4rem;

  .text {
    height: 1.8rem;
  }

  .lt & {
    background-color: ${colors.white};
    color: ${colors.black};
    padding: 0.4rem 1.4rem;
    height: 3rem;
  }

  .dk & {
    background-color: ${colors.blue900 + "80"};
    padding: 0.3rem 1.2rem;
    height: 3.4rem;
  }

  &:hover {
    cursor: default;
  }

  ${StyledIcon} > * {
    height: 2.2rem;
    width: 2.2rem;
    margin-right: ${props => (props.dark ? "1.1rem" : "1rem")};
  }

  @media ${screen.min.md} {
    font-size: 1.3rem;
    margin: 0.3rem 0.6rem 0.3rem 0rem;

    &:first-of-type {
      margin-left: 0rem;
    }
    &:last-of-type {
      margin-right: 0rem;
    }

    ${StyledIcon} > * {
      height: 2rem;
      width: 2rem;
      margin-right: 0.6rem;
    }
  }
`

const SkillTag = props => {
  let Icon = icons[props.icon]
  return (
    <StyledTag title={props.label}>
      {Icon && (
        <StyledIcon>
          <Icon dark={props.dark ? 1 : 0} />
        </StyledIcon>
      )}
      <div className="text">{props.label || props.icon}</div>
    </StyledTag>
  )
}

SkillTag.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  dark: PropTypes.bool,
}

SkillTag.defaultProps = {
  dark: false,
}

export default SkillTag
