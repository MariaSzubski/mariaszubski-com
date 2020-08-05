import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"

import Link from "../utilities/link"
import { DateIcon, LocationIcon } from "./icons"

import * as g from "../global/vars"

const StyledExp = styled.article`
  padding: 3rem;
  border-bottom: 1px solid ${g.colors.green700};

  &:last-of-type {
    border-bottom: none;
  }
  a {
    color: ${g.colors.green200};
  }
  @media (max-width: ${g.screen.max.sm}) {
    padding: 3rem 1.4rem;
  }
`

const Company = styled.h6`
  margin-bottom: 1.6rem;
`
const Desc = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  margin: 1.6rem 0rem 2rem;
`
const Meta = styled(Row)`
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
const Location = styled(Col)``

const ExpCard = props => (
  <>
    <StyledExp>
      <h4>{props.job.title}</h4>
      <Company>
        <Link to={props.job.companyUrl} target="_blank">
          {props.job.companyName}
        </Link>
        {props.job.team && `\u00A0\u00A0//\u00A0 ${props.job.team}`}
      </Company>
      <Desc>{props.job.desc}</Desc>
      <Meta>
        <DateRange xs={6} md={3} className="h6">
          <DateIcon />
          {props.job.dateStart}{" "}
          {props.job.dateEnd ? `- ${props.job.dateEnd}` : `- Present`}
        </DateRange>
        {props.job.location && (
          <Location xs={6} md={3} className="h6">
            <LocationIcon />
            Cincinnati, OH{" "}
          </Location>
        )}
      </Meta>
    </StyledExp>
    <StyledExp>
      <h4>Bachelor of Science: Digital Design</h4>
      <Company>
        <Link to="https://www.uc.edu/" target="_blank">
          University of Cincinnati
        </Link>
        {props.job.team &&
          `\u00A0\u00A0//\u00A0 College of Design, Architecture, Art, & Planning`}
      </Company>
      <Desc>
        Participated in the Professional Practice program, alternating quarters
        of courses with job experience in the field of Digital Design, focusing
        on both UI design and web development.
      </Desc>
      <Meta>
        <DateRange xs={6} md={3} className="h6">
          <DateIcon />
          Class of 2012
        </DateRange>
      </Meta>
    </StyledExp>
  </>
)

ExpCard.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    companyUrl: PropTypes.string.isRequired,
    team: PropTypes.string,
    location: PropTypes.string,
    dateStart: PropTypes.string.isRequired,
    dateEnd: PropTypes.string,
    desc: PropTypes.string.isRequired,
  }),
}

ExpCard.defaultProps = {
  job: {
    title: "Freelance Web Developer",
    companyName: "Maria Szubski Digital, LLC",
    companyUrl: "/",
    team: "Team Name",
    location: "Cincinnati, OH",
    dateStart: "Jan 2018",
    dateEnd: null,
    desc:
      "Consult with clients to strategize and build web applications, with an emphasis on frontend development, accessibility, and the implementation of responsive design. Commonly used technologies include React, Vue, and static site generators such as Gatsby and Nuxt.",
  },
}

export default ExpCard
