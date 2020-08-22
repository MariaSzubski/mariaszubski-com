import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { screen } from "../global/vars"

const SCol = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  min-height: 1px;
  position: relative;
  max-width: 100%;
  width: ${props => props.$xs[0]};
  margin-left: ${props => props.$xs[1]};
  @media ${screen.min.sm} {
    width: ${props => props.$sm[0]};
    margin-left: ${props => props.$sm[1]};
  }
  @media ${screen.min.md} {
    width: ${props => props.$md[0]};
    margin-left: ${props => props.$md[1]};
  }
  @media ${screen.min.lg} {
    width: ${props => props.$lg[0]};
    margin-left: ${props => props.$lg[1]};
  }
  @media ${screen.min.xl} {
    width: ${props => props.$xl[0]};
    margin-left: ${props => props.$xl[1]};
  }
  @media ${screen.min.xxl} {
    width: ${props => props.$xxl[0]};
    margin-left: ${props => props.$xxl[1]};
  }

  & > * {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    height: 100%;
    & > * {
      width: 100%;
      max-width: 100%;
      min-width: 100%;
      height: 100%;
    }
  }
`

const Col = ({ children, ...props }) => {
  let xs = props.xs || 12
  let sm = props.sm || props.xs || 12
  let md = props.md || props.sm || props.xs || 12
  let lg = props.lg || props.md || props.sm || props.xs || 12
  let xl = props.xl || props.lg || props.md || props.sm || props.xs || 12
  let xxl = props.xxl || props.xl || props.lg || props.md || props.sm || props.xs || 12

  let offset = {
    xs: props.offset.xs || 0,
    sm: props.offset.sm || props.offset.xs || 0,
    md: props.offset.md || props.offset.sm || props.offset.xs || 0,
    lg: props.offset.lg || props.offset.md || props.offset.sm || props.offset.xs || 0,
    xl: props.offset.xl || props.offset.lg || props.offset.md || props.offset.sm || props.offset.xs || 0,
    xxl: props.offset.xxl || props.offset.xl || props.offset.lg || props.offset.md || props.offset.sm || props.offset.xs || 0,
  }

  const calculate = val => ((val / 12) * 100).toString().concat("%")



  return (
    <SCol
      $nowrap={props.nowrap ? 1 : 0}
      $justify={props.justify}
      $align={props.align}
      $xs={[calculate(xs), calculate(offset.xs)]}
      $sm={[calculate(sm), calculate(offset.sm)]}
      $md={[calculate(md), calculate(offset.md)]}
      $lg={[calculate(lg), calculate(offset.lg)]}
      $xl={[calculate(xl), calculate(offset.xl)]}
      $xxl={[calculate(xxl), calculate(offset.xxl)]}
      {...props}
    >
      <div>{children}</div>
    </SCol>
  )
}

Col.propTypes = {
  nowrap: PropTypes.bool,
  justify: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
  offset: PropTypes.object,
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
