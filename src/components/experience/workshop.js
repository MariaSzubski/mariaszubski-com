import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"

import Link from "../utilities/link"
import { DateIcon, WorkshopIcon, LocationIcon } from "./icons"

import * as g from "../global/vars"

const StyledWorkshop = styled.article`
  border-bottom: 1px solid ${g.colors.gray200 + "33"};
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
  @media (max-width: ${g.screen.max.sm}) {
    padding: 3rem 1.4rem;
  }
`

const Details = styled(Row)`
  padding-top: ${props => (props.$compact ? "0.6rem" : "1.2rem")};
  padding-bottom: ${props => (props.$compact ? "0.6rem" : "1.2rem")};
  padding-left: 3rem;
  padding-right: 3rem;
  svg {
    height: 18px;
    width: 18px;
    margin-right: 0.8rem;
  }

  @media ${g.screen.max.md} {
    padding-top: ${props => (props.$compact ? "0.5rem" : "1.6rem")};
    padding-bottom: ${props => (props.$compact ? "0.5rem" : "1.6rem")};
  }
`

const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  font-weight: 600;

  .label {

  }

  @media ${g.screen.max.md} {
    &:nth-of-type(1) {
      order: 2;
    }
    &:nth-of-type(2) {
      order: 1;
      padding-bottom: ${props => (props.$compact ? "0rem" : "0.5rem")};
    }
    &:nth-of-type(3) {
      order: ${props => (props.$compact ? 2 : 3)};
    }
  }
`

const DateRange = styled(Col)``

const WorkshopCard = props => (
  <StyledWorkshop>
    <Details between="md" $compact={props.compact}>
      <StyledCol $compact={props.compact} xs={5} sm={3} md={2}>
        <DateRange className="h6">
          <DateIcon />
          {/* {Intl.DateTimeFormat("en-US", {
            month: "short",
            year: "numeric",
          }).format(Date(props.workshop.date))} */}
          {props.workshop.date}
        </DateRange>
      </StyledCol>
      <StyledCol $compact={props.compact} xs={props.compact ? null : 12} md>
        <span className="label text-md">
          {props.workshop.permalink ? (
            <h5>
              <Link to={props.workshop.permalink}>{props.workshop.label}</Link>
            </h5>
          ) : (
            props.workshop.label
          )}
        </span>
      </StyledCol>
      {props.workshop.duration && (
        <StyledCol
          $compact={props.compact}
          xs={props.compact ? 2 : 7}
          sm={9}
          md={2}
        >
          <span className="h6">⏱ {props.workshop.duration}</span>
        </StyledCol>
      )}
      {props.workshop.org && (
        <StyledCol $compact={props.compact} xs={7} sm={9} md={2}>
          <span className="h6">{props.workshop.org}</span>
        </StyledCol>
      )}
    </Details>
  </StyledWorkshop>
)

WorkshopCard.propTypes = {
  workshop: PropTypes.shape({
    label: PropTypes.string.isRequired,
    org: PropTypes.string,
    date: PropTypes.string.isRequired,
    permalink: PropTypes.string,
    duration: PropTypes.string,
  }),
  compact: PropTypes.bool,
}

WorkshopCard.defaultProps = {
  compact: false,
}

export default WorkshopCard
