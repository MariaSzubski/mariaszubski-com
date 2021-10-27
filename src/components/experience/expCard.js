import React from "react"
import PropTypes from "prop-types"

import { Container, Row, Col } from "../grid-system"
import Meta from "./meta"

import { Panel, Company, Desc } from "./card.styles"

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
