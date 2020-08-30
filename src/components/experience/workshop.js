import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { Container, Row, Col } from "../grid-system"
import Link from "../utilities/link"
import { DateIcon, WorkshopIcon, LocationIcon } from "./icons"

import * as g from "../global/vars"

const SContainer = styled(Container)`
  border-bottom: 1px solid ${g.colors.gray100};
  &:last-of-type {
    border-bottom: none;
  }
  a {
    color: ${g.colors.blue200};
    &:hover,
    &:focus {
      color: ${g.colors.blue300};
    }
  }
`

const SRow = styled(Row)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  svg {
    height: 18px;
    width: 18px;
    margin-right: 0.8rem;
  }

  @media ${g.screen.max.md} {
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;
  }
`

const SCol = styled(Col)`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${g.colors.gray500};
`

const LabelCol = styled(Col)`
  font-weight: 700;
  font-size: 1.8rem;

  @media ${g.screen.max.md} {
    order: 1;
    margin-bottom: 0.8rem;
  }
`

const DateCol = styled(SCol)`
  @media ${g.screen.max.md} {
    order: 2;
  }
`

const DurationCol = styled(SCol)`
  margin-right: 0;
  margin-left: auto;
  @media ${g.screen.max.md} {
    order: 3;
    margin-left: inherit;
  }
`

const Company = styled(SCol)`
  @media ${g.screen.max.md} {
    order: 3;
  }
`

const WorkshopCard = props => (
  <SContainer>
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
