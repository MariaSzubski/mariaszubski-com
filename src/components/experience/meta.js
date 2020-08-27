import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { Container, Row, Col } from "../grid-system"
import { DateIcon, LocationIcon } from "./icons"

import { colors, screen } from "../global/vars"

const SRow = styled(Row)`
  * {
    font-weight: 600 !important;
    font-size: 1.35rem !important;
    color: ${colors.gray500};
    letter-spacing: 0rem;
  }

  svg {
    height: 18px;
    width: 18px;
    margin-right: 0.8rem;
  }

  &:not(:last-of-type) {
    margin-bottom: ${props => (props.$toggle ? "1rem" : "0rem")};
  }

  &:not(:first-of-type) {
    display: ${props => (props.$toggle ? "flex" : "none")};
  }
`

const SCol = styled(Col)`
  display: flex;
  align-items: center;
`
const DateCol = styled(SCol)`
  text-transform: uppercase;
  font-size: 1.2rem !important;
  @media ${screen.max.md} {
    margin-top: ${props => props.$toggle ? "0rem" : "1.8rem"};
  }
`

const LocCol = styled(SCol)``

const JobCol = styled(SCol)`
  @media ${screen.max.md} {
    margin: 0.4rem 0rem 1.6rem 2.5rem;
  }
`

const Meta = props => (
  <SRow $toggle={props.toggle}>
    <DateCol
      xs={6.4}
      md={props.toggle ? 3.6 : 12}
      $toggle={props.toggle ? 1 : 0}
    >
      <DateIcon />
      {props.date}
    </DateCol>

    {props.location && props.toggle && (
      <LocCol xs={5.6} md={8} lg={8}>
        <LocationIcon />
        {props.location}
      </LocCol>
    )}

    {props.dateRange.length > 1 && props.toggle && (
      <JobCol xs={12} md={props.toggle ? 8 : 6} lg={8}>
        {props.jobTitles[props.idx]}
      </JobCol>
    )}
  </SRow>
)

Meta.propTypes = {
  toggle: PropTypes.bool,
  idx: PropTypes.number,
  date: PropTypes.string,
  location: PropTypes.string,
  dateRange: PropTypes.arrayOf(PropTypes.string).isRequired,
  jobTitles: PropTypes.arrayOf(PropTypes.string),
}

export default Meta
