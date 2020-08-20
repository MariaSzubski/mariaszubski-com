import React from "react"
import { css } from "styled-components"

import Link from "../utilities/link"
import { IconMixin } from "./styles"

const Github = props => (
  <Link to="https://github.com/mariaszubski" target="_blank">
    <svg
      width="4.8rem"
      height="4.8rem"
      viewBox="0 0 48 48"
      css={IconMixin}
      role="img"
      aria-label="Github"
      {...props}
    >
      <circle cx={24} cy={24} r={24} className="fill-bg" />
      <path
        className="fill-ring"
        d="M24 1.3c12.537 0 22.7 10.163 22.7 22.7S36.537 46.7 24 46.7 1.3 36.537 1.3 24C1.314 11.469 11.469 1.314 24 1.3M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0z"
      />
      <path
        className="fill-icon"
        d="M31.994 14.199s-1.281-.411-4.2 1.567a14.67 14.67 0 00-3.827-.515c-1.3.006-2.608.175-3.827.515-2.921-1.978-4.204-1.567-4.204-1.567-.832 2.105-.307 3.659-.15 4.046-.978 1.069-1.574 2.433-1.574 4.102 0 5.859 3.569 7.17 6.964 7.556-.437.382-.832 1.056-.971 2.044-.871.391-3.086 1.066-4.449-1.27 0 0-.808-1.467-2.342-1.576 0 0-1.493-.019-.105.929 0 0 1.002.47 1.697 2.236 0 0 .897 2.973 5.15 2.049.007 1.276.021 2.237.021 2.6 0 .173-.064.35-.182.494C21.264 37.79 22.607 38 24 38c1.371 0 2.693-.206 3.945-.573a.79.79 0 01-.189-.51c0-.501.019-2.15.019-4.194 0-1.426-.489-2.359-1.038-2.831 3.406-.378 6.98-1.671 6.98-7.544 0-1.669-.592-3.034-1.571-4.102.157-.388.682-1.942-.152-4.047z"
      />
    </svg>
  </Link>
)

export default Github
