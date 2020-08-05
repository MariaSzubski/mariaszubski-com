import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"

import Link from "../utilities/link"
import { DateIcon, WorkshopIcon } from "./icons"

import * as g from "../global/vars"

const Wrapper = styled.div`
  background-color: #ffffff11;
  padding: 3rem;
`

const StyledWorkshop = styled.article`
  border-bottom: 1px solid ${g.colors.gray500};
  &:last-of-type {
    border-bottom: none;
  }
  a {
    color: ${g.colors.green300};
  }
  @media (max-width: ${g.screen.max.sm}) {
    padding: 3rem 1.4rem;
  }
`

const Details = styled(Row)`
  svg {
    height: 18px;
    width: 18px;
    margin-right: 0.5rem;
  }

  & .h6 {
    color: ${g.colors.gray200};
    font-weight: 400;
  }
`

const DateRange = styled(Col)``

const Workshop = props => (
  <Wrapper>
    <h4>Workshops Taught</h4>
    <StyledWorkshop>
      <Details>
        <Col md={2}>
          <DateRange className="h6">
            <DateIcon />
            {props.workshop.date}
          </DateRange>
        </Col>
        <Col md={10}>
          <p>
            <WorkshopIcon />
            {props.workshop.title}
          </p>
        </Col>
      </Details>
    </StyledWorkshop>
    <StyledWorkshop>
      <Details>
        <Col md={2}>
          <DateRange className="h6">
            <DateIcon />
            {props.workshop.date}
          </DateRange>
        </Col>
        <Col md={10}>
          <p>
            <WorkshopIcon />
            {props.workshop.title}
          </p>
        </Col>
      </Details>
    </StyledWorkshop>
    <StyledWorkshop>
      <Details>
        <Col md={2}>
          <DateRange className="h6">
            <DateIcon />
            {props.workshop.date}
          </DateRange>
        </Col>
        <Col md={10}>
          <p>
            <WorkshopIcon />
            {props.workshop.title}
          </p>
        </Col>
      </Details>
    </StyledWorkshop>
  </Wrapper>
)

Workshop.propTypes = {
  workshop: PropTypes.shape({
    password: PropTypes.bool.isRequired,
    category: PropTypes.string,
    summary: PropTypes.string,
    title: PropTypes.string.isRequired,
    org: PropTypes.string,
    date: PropTypes.string.isRequired,
    links: PropTypes.objectOf(PropTypes.string),
    desc: PropTypes.string,
    permalink: PropTypes.string,
  }),
}

Workshop.defaultProps = {
  workshop: {
    password: false,
    category: "workshop",
    summary: "Intro to HTML/CSS, 4 Sessions",
    title: "Code Your First Website: New Year's Edition",
    org: "Girl Develop It Cincinnati",
    date: "Jan 2018",
    links: null,
    desc: "Nullam quis risus eget urna mollis ornare vel eu leo.",
  },
}

export default Workshop
