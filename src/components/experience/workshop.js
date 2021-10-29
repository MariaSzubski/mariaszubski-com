import React from "react"
import PropTypes from "prop-types"

import Link from "../utilities/link"
import { DateIcon } from "./icons"

import {
  SContainer,
  SRow,
  SCol,
  LabelCol,
  DateCol,
  DurationCol,
  Company,
} from "./workshop.styles"

const WorkshopCard = props => (
  <SContainer aria-label="Workshop Card">
    <SRow align="center">
      <DateCol xs={4} md={2.25}>
        <DateIcon />
        {props.workshop.date}
      </DateCol>

      <LabelCol md={!props.workshop.duration && !props.workshop.org ? 9.75 : 7}>
        {props.workshop.permalink ? (
          <h5>
            <Link to={props.workshop.permalink}>{props.workshop.label}</Link>
          </h5>
        ) : (
          props.workshop.label
        )}
      </LabelCol>

      {props.workshop.duration && (
        <DurationCol xs={6} md={2.25}>
          ⏱ {props.workshop.duration}
        </DurationCol>
      )}

      {props.workshop.org && (
        <Company xs={6} md={2.75}>
          {props.workshop.org}
        </Company>
      )}
    </SRow>
  </SContainer>
)

WorkshopCard.propTypes = {
  workshop: PropTypes.shape({
    label: PropTypes.string.isRequired,
    org: PropTypes.string,
    date: PropTypes.string.isRequired,
    permalink: PropTypes.string,
    duration: PropTypes.string,
  }),
}

export default WorkshopCard
