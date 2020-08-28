import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { screen } from "../global/vars"

const SCol = styled.div`
  padding: ${props => (props.$fluid ? "0rem" : "0rem 1.4rem")};
  flex-grow: 0;
  flex-shrink: 0;
  min-height: 1px;
  position: relative;
  left: 0;
  right: 0;
  max-width: 100%;

  width: ${props => props.$xs[0]};
  max-width: ${props => props.$xs[0]};
  flex-basis: ${props => props.$xs[0]};
  margin-left: ${props => props.$xs[1]};

  @media ${screen.min.sm} {
    width: ${props => props.$sm[0]};
    width: ${props => props.$sm[0]};
    flex-basis: ${props => props.$sm[0]};
    margin-left: ${props => props.$sm[1]};
  }
  @media ${screen.min.md} {
    width: ${props => props.$md[0]};
    max-width: ${props => props.$md[0]};
    flex-basis: ${props => props.$md[0]};
    margin-left: ${props => props.$md[1]};
  }
  @media ${screen.min.lg} {
    width: ${props => props.$lg[0]};
    max-width: ${props => props.$lg[0]};
    flex-basis: ${props => props.$lg[0]};
    margin-left: ${props => props.$lg[1]};
  }
  @media ${screen.min.xl} {
    width: ${props => props.$xl[0]};
    max-width: ${props => props.$xl[0]};
    flex-basis: ${props => props.$xl[0]};
    margin-left: ${props => props.$xl[1]};
  }
  @media ${screen.min.xxl} {
    width: ${props => props.$xxl[0]};
    max-width: ${props => props.$xxl[0]};
    flex-basis: ${props => props.$xxl[0]};
    margin-left: ${props => props.$xxl[1]};
  }
`

const Col = ({ children, offset, ...props }) => {
  let xs = props.xs || 12
  let sm = props.sm || props.xs || 12
  let md = props.md || props.sm || props.xs || 12
  let lg = props.lg || props.md || props.sm || props.xs || 12
  let xl = props.xl || props.lg || props.md || props.sm || props.xs || 12
  let xxl =
    props.xxl || props.xl || props.lg || props.md || props.sm || props.xs || 12

  let $offset = {
    xs: offset.xs || 0,
    sm: offset.sm || offset.xs || 0,
    md: offset.md || offset.sm || offset.xs || 0,
    lg: offset.lg || offset.md || offset.sm || offset.xs || 0,
    xl: offset.xl || offset.lg || offset.md || offset.sm || offset.xs || 0,
    xxl:
      offset.xxl ||
      offset.xl ||
      offset.lg ||
      offset.md ||
      offset.sm ||
      offset.xs ||
      0,
  }

  const calculate = val => ((val / 12) * 100).toString().concat("%")

  return (
    <SCol
      $nowrap={props.nowrap ? 1 : 0}
      $justify={props.justify}
      $align={props.align}
      $fluid={props.fluid ? 1 : 0}
      $xs={[calculate(xs), calculate($offset.xs)]}
      $sm={[calculate(sm), calculate($offset.sm)]}
      $md={[calculate(md), calculate($offset.md)]}
      $lg={[calculate(lg), calculate($offset.lg)]}
      $xl={[calculate(xl), calculate($offset.xl)]}
      $xxl={[calculate(xxl), calculate($offset.xxl)]}
      {...props}
    >
      {children}
    </SCol>
  )
}

Col.propTypes = {
  nowrap: PropTypes.bool,
  justify: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node,
  offset: PropTypes.object,
  fluid: PropTypes.bool,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  xxl: PropTypes.number,
}

Col.defaultProps = {
  nowrap: false,
  justify: "flex-start",
  align: "flex-start",
  fluid: false,
  offset: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    xxl: null,
  },
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  xxl: null,
}

export { Col }
