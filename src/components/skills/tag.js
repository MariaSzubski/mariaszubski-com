import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors, screen } from '../global/vars'
import icons from './icons'

const StyledIcon = styled.span`
  display: inline-block;
`

const StyledTag = styled.span`
  border-radius: 0.4rem;
  display: inline-flex;
  vertical-align: top;
  align-items: center;
  margin: 0.3rem;
  margin-right: ${props => (props.vertical ? '0rem' : '0.3rem')};
  font-weight: 700;
  text-transform: capitalize;
  font-size: 1.4rem;
  width: calc(50% - 0.6rem);

  .lt & {
    background-color: ${colors.white};
    color: ${colors.black};
    padding: 0.4rem 1.4rem;
    height: 3rem;
  }

  .dk & {
    background-color: ${colors.blue900 + '80'};
    padding: 0.3rem 1.2rem;
    height: 3.4rem;
  }

  &:hover {
    cursor: default;
  }

  ${StyledIcon} > * {
    height: 2.2rem;
    width: 2.2rem;
    .lt & {
      margin-right: 1rem;
    }
    .dk & {
      margin-right: 1.1rem;
    }
  }

  @media ${screen.min.md} {
    width: auto;
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
  const Icon = icons[props.icon]
  return (
    <StyledTag vertical={props.vertical ? 1 : 0}>
      <StyledIcon>
        <Icon dark={props.dark ? true : false} />
      </StyledIcon>
      {props.label || props.icon}
    </StyledTag>
  )
}

SkillTag.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string,
  vertical: PropTypes.bool,
  dark: PropTypes.bool,
}

SkillTag.defaultProps = {
  vertical: false,
  dark: false,
}

export default SkillTag
