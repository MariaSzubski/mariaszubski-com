import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { screen } from "../global/vars"

const SRow = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;
  flex-wrap: ${props => (props.$nowrap ? "nowrap" : "wrap")};
  justify-content: ${props => props.$justify};
  align-items: ${props => props.$align};
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 100%;
  max-width: 100%;
`

const Row = ({ children, ...props }) => (
  <SRow
    $nowrap={props.nowrap ? 1 : 0}
    $justify={props.justify}
    $align={props.align}
    {...props}
  >
    {children}
  </SRow>
)

Row.propTypes = {
  nowrap: PropTypes.bool,
  justify: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Row.defaultProps = {
  nowrap: false,
  justify: "flex-start",
  align: "flex-start",
}

export { Row }
