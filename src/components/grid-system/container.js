import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { screen } from "../global/vars"

const SContainer = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  padding: ${props => props.$fluid ? "0rem" : "0rem 1.4rem"};
  max-width: auto;
  @media ${screen.min.sm} { max-width: ${props => props.$fluid ? "auto" : "54rem"}; }
  @media ${screen.min.md} { max-width: ${props => props.$fluid ? "auto" : "75rem"}; }
  @media ${screen.min.lg} { max-width: ${props => props.$fluid ? "auto" : "96rem"}; }
  @media ${screen.min.xl} { max-width: ${props => props.$fluid ? "auto" : "114rem"}; }
  @media ${screen.min.xxl} { max-width: ${props => props.$fluid ? "auto" : "154rem"}; }
`

const Container = ({ children, ...props }) => (
  <SContainer
    $gutterWidth={props.gutterWidth}
    $fluid={props.fluid ? 1 : 0}
    {...props}
  >
    {children}
  </SContainer>
)

Container.propTypes = {
  gutterWidth: PropTypes.number,
  fluid: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Container.defaultProps = {
  gutterWidth: 15,
  fluid: false,
}

export { Container }
