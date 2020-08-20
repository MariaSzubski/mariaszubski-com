import React from "react"
import { css } from "styled-components"

import Link from "../utilities/link"
import { IconMixin } from "./styles"

const LinkedIn = props => (
  <Link to="https://linkedin.com/in/mariaszubski" target="_blank">
    <svg
      width="4.8rem"
      height="4.8rem"
      viewBox="0 0 48 48"
      css={IconMixin}
      role="img"
      aria-label="Linked In"
      {...props}
    >
      <circle cx={24} cy={24} r={24} className="fill-bg" />
      <path
        className="fill-ring"
        d="M24 1.3c12.537 0 22.7 10.163 22.7 22.7S36.537 46.7 24 46.7 1.3 36.537 1.3 24C1.314 11.469 11.469 1.314 24 1.3M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0z"
      />
      <path
        className="fill-icon"
        d="M16.635 17.301a2.65 2.65 0 112.65-2.651 2.65 2.65 0 01-2.642 2.65h-.008zM26.157 21.319h.063a4.79 4.79 0 014.318-2.372c4.622 0 5.477 3.041 5.477 6.997V34H31.45v-7.145c0-1.703-.028-3.895-2.371-3.895-2.376 0-2.736 1.857-2.736 3.773V34h-4.561V19.312h4.375v2.007zM14.348 19.312h4.571v14.687h-4.571z"
      />
    </svg>
  </Link>
)

export default LinkedIn
