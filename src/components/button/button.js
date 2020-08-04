import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

import { colors } from "../global/vars"

const StyledButton = styled(Link)`
  position: relative;
  display: inline-flex;
  vertical-align: top;
  justify-content: center;
  border-radius: 0.4rem;
  border: 1px solid ${props => props.$color};
  &:not(:last-of-type) {
    margin-right: 1rem;
  }
  transition: color 0.12s ease-in;

  color: ${colors.white};
  font-size: 1.3rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  text-shadow: 0rem 0.1rem 0.1rem ${colors.black + "C0"};

  ${"" /* Vertical Buttons */}
  &:not(:last-of-type) {
    margin-bottom: ${props => (props.$stacked ? "1.5rem" : "")};
  }
  width: ${props => (props.$stacked ? "100%" : "auto")};
  padding: 1rem ${props => (props.$stacked ? "1rem" : "3rem")};
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
    transition: opacity 0.12s ease-out;
  }

  ${"" /* Underline */}
  &:after {
    background: ${props => props.$bg_after};
  }

  &:hover {
    color: ${colors.white};
    background: ${props => props.$hover};
    &:before {
      opacity: 1;
      transition: opacity 0.12s ease-out;
    }
  }
`

const color_list = {
  border: {
    plum: colors.plum,
    green: colors.green,
    white: colors.gray500,
  },
  bg_before: {
    plum: `linear-gradient(
    30deg, ${colors.plum300} 20%, ${colors.plum700} 100% )`,
    white: colors.gray700,
    green: `linear-gradient(
    30deg, ${colors.green} 20%, ${colors.green300} 100% )`,
  },
  bg_after: {
    plum: `linear-gradient(
    90deg, ${colors.plum} 0%, ${colors.plum300} 50%, ${colors.plum} 100% );`,
    white: "none",
    green: `linear-gradient(
    90deg, ${colors.green} 0%, ${colors.blue} 50%, ${colors.green} 100% );`,
  },
  hover: {
    plum: "none",
    white: colors.gray700,
    green: "none",
  },
}

const Button = ({ children, $stacked, ...props }) => (
  <StyledButton
    as={!props.to ? "button" : Link}
    $border={color_list.border[props.$color]}
    $bg_before={color_list.bg_before[props.$color]}
    $bg_after={color_list.bg_after[props.$color]}
    $hover={color_list.hover[props.$color]}
    $stacked={$stacked ? 1 : 0}
    {...props}
  >
    {children}
  </StyledButton>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  $color: PropTypes.string, // 'green', 'plum'
  $stacked: PropTypes.bool,
  layout: PropTypes.string, // vertical
}

Button.defaultProps = {
  $color: "white",
  $stacked: false,
}

export default Button
