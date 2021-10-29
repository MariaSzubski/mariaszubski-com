import React from "react"
import PropTypes from "prop-types"

import { DateIcon, LocationIcon } from "./icons"

import { SRow, SCol, DateCol, LocCol, JobCol } from "./meta.styles"

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
