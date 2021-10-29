import React from "react"
import PropTypes from "prop-types"

import { Row } from "../grid-system"
import { StyledQuote } from "./styles"

const Quote = props => (
  <StyledQuote className="text-center" md={8}>
    <h4>{props.title}</h4>
    <h5>{props.subtitle}</h5>
    <div>{props.quote}</div>
  </StyledQuote>
)

const Testimonials = props => (
  <section>
    <h3>Nice words from people I&#39;ve worked with. Thanks you guys!</h3>
    <Row justify="center">
      {props.data.map((quote, idx) => (
        <Quote key={`quote_${idx}`} {...quote} />
      ))}
    </Row>
  </section>
)

Quote.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  quote: PropTypes.string,
}

Testimonials.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
    })
  ),
}

export default Testimonials
