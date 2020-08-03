import React from "react"
import PropTypes from "prop-types"

const W3c = props => (
  <svg viewBox="0 0 256 137" width="1em" height="1em" {...props}>
    <path
      fill="#005A9C"
      d="M67.7 1.6L91.9 84l24.2-82.4h17.5L93.5 136.9h-1.7l-25-83.8-25.1 83.8H40L0 1.6h17.5L41.8 84l16.4-55.5-8-26.9h17.5z"
    />
    <path
      fill="#005A9C"
      d="M183.4 93.5c0 12.3-3.3 22.6-9.8 30.9-6.5 8.3-15 12.5-25.3 12.5-7.8 0-14.6-2.5-20.4-7.4-5.8-5-10.1-11.7-12.9-20.1l13.7-5.7c2 5.1 4.7 9.2 7.9 12.1 3.3 2.9 7.1 4.4 11.6 4.4 4.7 0 8.6-2.6 11.9-7.9 3.2-5.2 4.8-11.5 4.8-18.9 0-8.1-1.7-14.4-5.2-18.9-4-5.2-10.3-7.9-18.9-7.9h-6.7v-8l23.4-40.4h-28.2l-7.9 13.4h-5v-30h65.1v8.2L157 52.4c8.7 2.8 15.3 7.9 19.7 15.2 4.5 7.3 6.7 16 6.7 25.9z"
    />
    <path
      fill={props.light ? "#221B0A" : "#FFFFFF"}
      d="M251.4.9l2.8 17.3-10.1 19.2s-3.9-8.2-10.3-12.7c-5.4-3.8-8.9-4.6-14.4-3.5-7.1 1.5-15.1 9.9-18.6 20.3-4.2 12.5-4.2 18.5-4.4 24-.2 8.9 1.2 14.1 1.2 14.1s-6.1-11.3-6-27.8c0-11.8 1.9-22.5 7.4-33.1 4.8-9.3 11.9-14.9 18.3-15.5 6.6-.7 11.7 2.5 15.7 5.9 4.2 3.6 8.5 11.4 8.5 11.4L251.4.9zM252.6 98.6s-4.4 7.9-7.2 11c-2.8 3.1-7.7 8.5-13.8 11.2-6.1 2.7-9.3 3.2-15.4 2.6-6-.6-11.7-4.1-13.6-5.5-2-1.4-7-5.8-9.8-9.7-2.9-4-7.3-12-7.3-12s2.5 8 4 11.4c.9 2 3.6 8 7.5 13.2 3.6 4.9 10.7 13.3 21.4 15.1 10.7 1.9 18.1-2.9 19.9-4.1 1.8-1.2 5.7-4.4 8.1-7 2.5-2.7 4.9-6.2 6.3-8.2 1-1.5 2.6-4.6 2.6-4.6l-2.7-13.4z"
    />
  </svg>
)

W3c.propTypes = {
  light: PropTypes.number,
}

W3c.defaultProps = {
  light: 0,
}

export default W3c
