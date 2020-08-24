import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// import { Row, Col } from "../grid-system"
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
  @media (max-width: ${g.screen.max.lg}) {
    padding: 3rem 1.4rem;
  }
`

const Details = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  padding-top: ${props => (props.$compact ? "0.6rem" : "1.2rem")};
  padding-bottom: ${props => (props.$compact ? "0.6rem" : "1.2rem")};
  padding-left: 2rem;
  padding-right: 2rem;
  svg {
    height: 18px;
    width: 18px;
    margin-right: 0.8rem;
  }

  @media ${g.screen.max.lg} {
    padding-top: ${props => (props.$compact ? "0.5rem" : "1.6rem")};
    padding-bottom: ${props => (props.$compact ? "0.5rem" : "1.6rem")};
  }
`

const BaseCol = styled.div`
  display: flex;
  flex: 0 0 10rem;
  align-items: center;
  font-weight: 600;
`

const DateCol = styled(BaseCol)`
  flex: 0 0 10rem;
  width: 12rem;
  @media ${g.screen.max.lg} {
    order: 2;
  }
`

const Label = styled(BaseCol)`
  flex: 1 1 auto;
  padding-left: 1.6rem;
  padding-right: 1.6rem;

  @media ${g.screen.max.lg} {
    order: 1;
    max-width: 71%;
    padding-left: 0rem;
    padding-bottom: ${props => (props.$compact ? "0rem" : "0.5rem")};
  }
`

const Company = styled(BaseCol)`
  flex: 0 0 15rem;
  @media ${g.screen.max.lg} {
    order: 3;
    flex-basis: 100%;
  }
`

const WorkshopCard = props => (
  <StyledWorkshop>
    <Details $compact={props.compact}>
      <DateCol>
        <div className="h6">
          <DateIcon />
          {props.workshop.date}
        </div>
      </DateCol>
      <Label>
        <span className="label text-md">
          {props.workshop.permalink ? (
            <h5>
              <Link to={props.workshop.permalink}>{props.workshop.label}</Link>
            </h5>
          ) : (
            props.workshop.label
          )}
        </span>
      </Label>
      {props.workshop.duration && (
        <BaseCol>
          <span className="h6">⏱ {props.workshop.duration}</span>
        </BaseCol>
      )}
      {props.workshop.org && (
        <Company>
          <span className="h6">{props.workshop.org}</span>
        </Company>
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
