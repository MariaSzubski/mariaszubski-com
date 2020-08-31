import React from "react"
import PropTypes from "prop-types"

const Gatsby = ({ light, ...props })  => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <title>GatsbyJS</title>
    <path
      d="M128 0C57.308 0 0 57.307 0 128s57.308 128 128 128c70.693 0 128-57.307 128-128S198.693 0 128 0zM27.504 129.334l99.161 99.162c-54.45-.71-98.452-44.71-99.161-99.162zm122.992 96.65l-120.48-120.48C40.234 60.824 80.223 27.487 128 27.487c33.397 0 62.985 16.293 81.263 41.36l-13.917 12.279C180.52 59.864 155.886 45.949 128 45.949c-35.505 0-65.74 22.552-77.169 54.113L155.94 205.169c25.525-9.243 45.156-30.79 51.73-57.477h-43.566V128h64.41c0 47.778-33.336 87.767-78.017 97.983z"
      fill={light ? "#744C9E" : "#9361C7"}
    />
  </svg>
)

Gatsby.propTypes = {
  light: PropTypes.number,
}

Gatsby.defaultProps = {
  light: 0,
}

export default Gatsby
