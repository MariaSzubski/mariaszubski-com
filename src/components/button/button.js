import React from "react"
import PropTypes from "prop-types"

import Link from "../utilities/link"
import { colors } from "../global/vars"

import { StyledButton } from "./styles"

const color_list = {
  border: {
    plum: colors.plum300,
    green: colors.green300,
    white: colors.gray500,
    blue: colors.blue300,
    pink: colors.pink,
  },
  fill: {
    plum: colors.plum300,
    green: colors.green300,
    white: colors.gray500,
    blue: colors.blue400,
    pink: colors.pink500,
  },
  bg_before: {
    plum: `linear-gradient(
    30deg, ${colors.plum300} 20%, ${colors.plum700} 100% )`,
    white: colors.gray700,
    green: `linear-gradient(
    30deg, ${colors.green300} 20%, ${colors.green200} 100% )`,
    blue: `linear-gradient(
    30deg, ${colors.blue500} 20%, ${colors.blue200} 100% )`,
    pink: `linear-gradient(
    30deg, ${colors.pink500} 20%, ${colors.pink} 100% )`,
  },
  hover: {
    plum: "none",
    white: colors.gray700,
    green: `linear-gradient(
    30deg, ${colors.green300} 20%, ${colors.green200} 100% )`,
    blue: `linear-gradient(
    30deg, ${colors.blue400} 20%, ${colors.blue300} 100% )`,
    pink: `linear-gradient(
    30deg, ${colors.pink500} 20%, ${colors.pink} 100% )`,
  },
}

const Button = ({ children, stacked, color, fill, rounded, ...props }) => (
  <StyledButton
    as={!props.to ? "button" : Link}
    $border={color_list.border[color]}
    $bg_before={color_list.bg_before[color]}
    $hover={color_list.hover[color]}
    $stacked={stacked ? 1 : 0}
    $fill={fill ? color_list.fill[color] : "#00000044"}
    $rounded={rounded ? 1 : 0}
    $textColor={fill ? 1 : 0}
    {...props}
  >
    {children}
  </StyledButton>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  color: PropTypes.string, // 'green', 'plum'
  stacked: PropTypes.bool,
  fill: PropTypes.bool,
  rounded: PropTypes.bool,
  layout: PropTypes.string, // vertical
}

Button.defaultProps = {
  color: "white",
  stacked: false,
  rounded: false,
}

export default Button
