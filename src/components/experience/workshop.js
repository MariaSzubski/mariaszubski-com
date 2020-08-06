import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"

import Link from "../utilities/link"
import { DateIcon, WorkshopIcon, LocationIcon } from "./icons"

import * as g from "../global/vars"

const StyledWorkshop = styled.article`
  border-bottom: 1px solid ${g.colors.black + "99"};
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
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
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

const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  font-weight: 600;

  padding-left: rem;
  h5 {
    text-align: left;
  }

  @media ${g.screen.max.md} {
    &:nth-of-type(1) {
      order: 2;
    }
    &:nth-of-type(2) {
      order: 1;
      padding-bottom: 0.5rem;
    }
    &:nth-of-type(3) {
      order: 3;
    }
  }
`

const DateRange = styled(Col)``

const WorkshopCard = props => (
  <StyledWorkshop>
    <Details>
      <StyledCol xs={5} sm={3} md={2}>
        <DateRange className="h6">
          <DateIcon />
          {props.workshop.date}
        </DateRange>
      </StyledCol>
      <StyledCol xs={12} md={7}>
        <h5>
          <Link to={props.workshop.permalink}>{props.workshop.title}</Link>
        </h5>
      </StyledCol>
      <StyledCol xs={7} sm={9} md={3}>
        <span className="h6">{props.workshop.org}</span>
      </StyledCol>
    </Details>
  </StyledWorkshop>
)

WorkshopCard.propTypes = {
  workshop: PropTypes.shape({
    title: PropTypes.string.isRequired,
    org: PropTypes.string,
    date: PropTypes.string.isRequired,
    permalink: PropTypes.string,
  }),
}

WorkshopCard.defaultProps = {}

export default WorkshopCard
