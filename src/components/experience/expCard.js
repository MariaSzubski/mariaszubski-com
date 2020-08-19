import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"

import { DateIcon, LocationIcon } from "./icons"
import HTML from "../utilities/html"

import * as g from "../global/vars"

const StyledExp = styled.article`
  padding: 3rem;
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

const Company = styled.h6`
  margin-bottom: ${props => (props.$toggle ? "1.6rem" : "0rem")};
  span {
    color: ${g.colors.green200};
  }
`
const Desc = styled(HTML)`
  color: ${g.colors.gray100};
  margin: 3.2rem 0rem 3.2rem;
  display: ${props => (props.$toggle ? "block" : "none")};
`
const Meta = styled(Row)`
  * {
    font-weight: 600 !important;
    font-size: 1.2rem;
    letter-spacing: 1px;
    ${"" /* color: ${g.colors.gray500}; */}
  }
  svg {
    height: 18px;
    width: 18px;
    margin-right: 0.5rem;
  }
  &:not(:last-of-type) {
    margin-bottom: ${props => (props.$toggle ? "1rem" : "0rem")};
  }
  &:not(:first-of-type) {
    display: ${props => (props.$toggle ? "flex" : "none")};
  }
`
const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
`

const ExpCard = props => (
  <>
    <StyledExp>
      <Row middle="md">
        <Col md={props.toggle ? 12 : 9}>
          <h4>{props.job.title}</h4>
          <Company $toggle={props.toggle}>
            <span>
                {props.job.companyName}
            </span>
            {props.job.team && `\u00A0\u00A0//\u00A0 ${props.job.team}`}
          </Company>

          <Desc content={props.job.desc} $toggle={props.toggle} className="text-md" />
        </Col>

        <Col md={props.toggle ? 12 : 3}>
          {/* Date, Location, Job Titles */}
          {props.job.dateRange.map((date, idx) => (
            <Meta $toggle={props.toggle} key={`${props.job.title}-meta-${idx}`}>
              <StyledCol
                xs={6}
                md={props.toggle ? 4 : 12}
                lg={props.toggle ? 3 : 12}
                className="h6"
              >
                <DateIcon />
                {date}
              </StyledCol>
              {props.job.location && props.toggle && (
                <StyledCol xs={6} md={8} lg={9} className="h6">
                  <LocationIcon />
                  {props.job.location}
                </StyledCol>
              )}
              {props.job.dateRange.length > 1 && props.toggle && (
                <StyledCol
                  xs={6}
                  md={props.toggle ? 8 : 6}
                  lg={9}
                  className="h6"
                >
                  {props.job.jobTitles[idx]}
                </StyledCol>
              )}
            </Meta>
          ))}
        </Col>
      </Row>
    </StyledExp>
  </>
)

ExpCard.propTypes = {
  toggle: PropTypes.bool,
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    team: PropTypes.string,
    location: PropTypes.string,
    dateRange: PropTypes.arrayOf(PropTypes.string).isRequired,
    jobTitles: PropTypes.arrayOf(PropTypes.string),
    desc: PropTypes.object,
  }),
}

ExpCard.defaultProps = {
  toggle: true,
}

export default ExpCard
