import React from "react"
import { css } from "styled-components"

import { colors } from "../global/vars"

const IconMixin = css`
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

  a:nth-of-type(1) & {
    animation-delay: 0.15s;
  }
  a:nth-of-type(2) & {
    animation-delay: 0.3s;
  }
  a:nth-of-type(3) & {
    animation-delay: 0.45s;
  }
  a:nth-of-type(4) & {
    animation-delay: 0.6s;
  }
  a:nth-of-type(5) & {
    animation-delay: 0.75s;
  }

  .fill-bg {
    fill: none;
  }

  .fill-ring,
  .fill-icon {
    fill: ${colors.blue300};
  }

  &:hover,
  &:focus {
    .fill-bg {
      fill: ${colors.blue300};
      transition: fill 0.05s ease;
    }

    .fill-icon {
      fill: ${colors.black};
      transition: fill 0.05s ease;
    }
  }
`

export { IconMixin }
