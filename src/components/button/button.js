import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Link from "../utilities/link"
import { colors } from "../global/vars"

const StyledButton = styled(Link)`
  position: relative;
  display: inline-flex;
  vertical-align: top;
  justify-content: center;
  border-radius: ${props => (props.$rounded ? "3rem" : "0.3rem")};
  border: 1px solid ${props => props.$border};

  background: ${props => props.$fill};
  cursor: pointer;
  line-height: 1.8;
  letter-spacing: 0.06rem;
  &:not(:last-of-type) {
    margin-right: 1rem;
  }

  color: ${props => (props.$textColor ? "white" : props.$border)};
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  text-shadow: 0rem 0.15rem 0.1rem ${colors.black};

  ${"" /* Vertical Buttons */}
  &:not(:last-of-type) {
    margin-bottom: ${props => (props.$stacked ? "1.5rem" : "")};
  }
  width: ${props => (props.$stacked ? "100%" : "auto")};
  padding: 1rem
    ${props => (props.$stacked ? "1rem" : props.$rounded ? "2rem" : "3rem")};
  align-items: flex-start;

  img {
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 0.8rem;
    margin-left: -0.5rem;
  }

  ${"" /* Background */}
  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: ${props => props.$bg_before};
    border-radius: ${props => (props.$rounded ? "3rem" : "0.3rem")};
    transition: opacity 0.15s ease-out;
  }

  &:hover {
    color: white;
    text-decoration: none;
    background: ${props => props.$hover};
    border-radius: ${props => (props.$rounded ? "3rem" : "0.3rem")};
    &:before {
      opacity: 1;
      transition: opacity 0.25s ease-out;
    }
  }
`

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
