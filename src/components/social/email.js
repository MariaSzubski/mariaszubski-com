import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"

const SVG = styled.svg`
  margin-right: 1.2rem;
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  opacity: 0;
  animation-name: fade;
  animation-duration: 0.6s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-fill-mode: forwards;

  &:nth-of-type(1){
    animation-delay: 0.15s;
  }
  &:nth-of-type(2){
    animation-delay: 0.3s;
  }
  &:nth-of-type(3){
    animation-delay: 0.45s;
  }
  &:nth-of-type(4){
    animation-delay: 0.6s;
  }

  #email-bg {
    fill: none;
  }

  #email-ring,
  #email-icon path {
    fill: #0C8FE2;
  }

  &:hover,
  &:focus {
    #email-bg {
      fill: #0C8FE2;
    }

    #email-icon path {
      fill: black;
    }
  }
`

const Email = props => (
  <SVG
    width="2em"
    height="2em"
    viewBox="0 0 48 48"
    role="img"
    aria-label="Logo"
    {...props}
  >
    <path
      id="email-bg"
      d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm10 31.725a1.417 1.417 0 01-1.416 1.416H15.416A1.417 1.417 0 0114 31.725V20.486l10 5.454 10-5.455v11.24zm0-13.402l-10 5.454-10-5.454v-2.048a1.417 1.417 0 011.416-1.416h17.167a1.417 1.417 0 011.416 1.416v2.048z"
    />
    <path
      id="email-ring"
      d="M24 1.3c12.537 0 22.7 10.163 22.7 22.7S36.537 46.7 24 46.7 1.3 36.537 1.3 24C1.314 11.469 11.469 1.314 24 1.3M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0z"
    />
    <g id="email-icon">
      <path d="M34 18.323v-2.048a1.418 1.418 0 00-1.416-1.416H15.416A1.418 1.418 0 0014 16.275v2.048l10 5.454 10-5.454z" />
      <path d="M15.416 33.142h17.167a1.418 1.418 0 001.416-1.416v-11.24L24 25.94l-10-5.454v11.239a1.418 1.418 0 001.416 1.417z" />
    </g>
  </SVG>
)

Email.propTypes = {
  color: PropTypes.string,
}

Email.defaultProps = {
  color: "white",
}

export default Email
