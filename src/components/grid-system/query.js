import React from "react"
import PropTypes from "prop-types"
import { useMediaQuery} from "react-responsive"

import { screen } from "../global/vars"

const Show = ({ children, ...props }) => {
  const breakpoint = props.xs ? screen.min.xs :
    props.sm ? screen.min.sm :
    props.md ? screen.min.md :
    props.lg ? screen.min.lg :
    props.xl ? screen.min.xl :
    props.xxl ? screen.min.xxl : `min-width: 0px`

  const isShown = useMediaQuery({ query: breakpoint })
  return isShown ? children : null
}

const Hide = ({ children, ...props }) => {
  const breakpoint = props.xs ? screen.max.xs :
    props.sm ? screen.max.sm :
    props.md ? screen.max.md :
    props.lg ? screen.max.lg :
    props.xl ? screen.max.xl :
    props.xxl ? screen.max.xxl : `max-width: 100%`
  const isHidden = useMediaQuery({ query: breakpoint })
  return isHidden ? children : null
}

Show.propTypes = {
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
  xxl: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Hide.prropTypes = {
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
  xxl: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Show.defaultProps = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  xxl: false,
}

Hide.defaultProps = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  xxl: false,
}

export { Show, Hide }
