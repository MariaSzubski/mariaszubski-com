import React from "react"
import { css } from "styled-components"

import Link from "../utilities/link"
import { IconMixin } from "./styles"

const Twitter = props => (
  <Link to="https://twitter.com/mariaszubski" target="_blank" title="twitter">
    <svg
      width="4.8rem"
      height="4.8rem"
      viewBox="0 0 48 48"
      css={IconMixin}
      role="img"
      aria-label="Twitter"
      {...props}
    >
      <circle cx={24} cy={24} r={24} className="fill-bg" />
      <path
        className="fill-ring"
        d="M24 1.3c12.537 0 22.7 10.163 22.7 22.7S36.537 46.7 24 46.7 1.3 36.537 1.3 24C1.314 11.469 11.469 1.314 24 1.3M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0z"
      />
      <path
        className="fill-icon"
        d="M24.828 20.45a4.721 4.721 0 018.041-4.305A9.526 9.526 0 0035.863 15a4.748 4.748 0 01-2.074 2.611 9.462 9.462 0 002.711-.739 9.61 9.61 0 01-2.353 2.444c.007.201.011.406.011.61-.001 6.23-4.742 13.421-13.43 13.421a13.342 13.342 0 01-7.229-2.123c.373.047.749.071 1.125.073a9.471 9.471 0 005.858-2.022 4.735 4.735 0 01-4.414-3.281c.289.058.582.088.876.088.411 0 .82-.055 1.216-.164a4.765 4.765 0 01-3.839-4.63v-.058c.683.341 1.428.54 2.19.586a4.76 4.76 0 01-1.41-6.295 13.393 13.393 0 009.727 4.929z"
      />
    </svg>
  </Link>
)

export default Twitter
