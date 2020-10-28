import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { Container, Row, Col } from "../grid-system"
import Meta from "./meta"
import HTML from "../utilities/html"

import { colors, screen } from "../global/vars"

const Panel = styled.div`
  padding: 2.8rem 3.2rem;
  border-bottom: 1px solid ${colors.gray100};
  &:last-of-type {
    border-bottom: none;
  }
  @media ${screen.max.sm} {
    padding: 2.4rem 1.8rem;
  }
`

const Company = styled.h6`
  margin-bottom: ${props => (props.$toggle ? "1.6rem" : "0rem")};
  color: ${colors.blue700};
  line-height: 1.4;
  span {
    color: ${colors.green};
  }
`
const Desc = styled(HTML)`
  display: ${props => (props.$toggle ? "block" : "none")};
  strong {
    color: ${colors.blue700};
  }
  ul {
    padding: 0rem 0rem 1rem 4rem;
    li {
      list-style-type: circle;
      margin-bottom: 0.7rem;

    }

  }

`

const ExpCard = props => (
  <Panel aria-label="Experience Card">
    <Container fluid>
      <Row align="center">
        <Col md={props.toggle ? 12 : 8.1}>
          <h4>{props.job.title}</h4>

          <Company $toggle={props.toggle}>
            <span>{props.job.companyName}</span>
            {props.job.team && `\u00A0\u00A0//\u00A0 ${props.job.team}`}
          </Company>

          <Desc
            content={props.job.desc}
            $toggle={props.toggle}
            className="text-md"
          />
        </Col>

        <Col md={props.toggle ? 12 : 3.9}>
          {props.job.dateRange.map((date, idx) => (
            <Meta
              key={`${props.job.title}-${idx}`}
              toggle={props.toggle}
              date={date}
              idx={idx}
              {...props.job}
            />
          ))}
        </Col>
      </Row>
    </Container>
  </Panel>
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
