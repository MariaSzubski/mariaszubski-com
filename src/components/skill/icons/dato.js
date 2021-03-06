import React from "react"

const Dato = props => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 256 259"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <linearGradient
        x1="0%"
        y1="49.999%"
        x2="100%"
        y2="49.999%"
        id="prefix__a"
      >
        <stop stopColor="#FF593D" offset="0%" />
        <stop stopColor="#FF7751" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M128.002.653H0v257.646h128.002c64.017 0 127.998-57.68 127.998-128.805C256 58.368 192.019.653 128.002.653zm0 187.36c-32.33-.013-58.528-26.231-58.516-58.56.012-32.33 26.23-58.529 58.559-58.517 32.33.011 58.529 26.228 58.518 58.558a58.52 58.52 0 01-58.561 58.518z"
      fill="url(#prefix__a)"
      fillRule="nonzero"
    />
  </svg>
)

export default Dato
