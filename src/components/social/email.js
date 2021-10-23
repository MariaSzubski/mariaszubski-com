import React from "react"

import Link from "../utilities/link"
import { IconMixin } from "./styles"

export const Email = props => (
  <Link
    to="mailto:hello@mariaszubski.com"
    target="_blank"
    title="Send me an email"
  >
    <svg
      width="4.8rem"
      height="4.8rem"
      viewBox="0 0 48 48"
      css={IconMixin}
      role="img"
      aria-label="Email Me"
      {...props}
    >
      <circle cx={24} cy={24} r={24} className="fill-bg" />
      <path
        className="fill-ring"
        d="M24 1.3c12.537 0 22.7 10.163 22.7 22.7S36.537 46.7 24 46.7 1.3 36.537 1.3 24C1.314 11.469 11.469 1.314 24 1.3M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0z"
      />
      <g>
        <path
          className="fill-icon"
          d="M34 18.323v-2.048a1.418 1.418 0 00-1.416-1.416H15.416A1.418 1.418 0 0014 16.275v2.048l10 5.454 10-5.454z"
        />
        <path
          d="M15.416 33.142h17.167a1.418 1.418 0 001.416-1.416v-11.24L24 25.94l-10-5.454v11.239a1.418 1.418 0 001.416 1.417z"
          className="fill-icon"
        />
      </g>
    </svg>
  </Link>
)
