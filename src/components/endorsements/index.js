import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'

import { screen, colors } from '../global/vars'

const StyledQuote = styled(Col)`
  background-color: hsla(0, 0%, 100%, 0.03);
  padding: 4rem 2rem;
  margin: 1rem;

  h4,
  h5 {
    color: ${colors.yellow};
  }
`

const Quote = props => (
  <StyledQuote className="text-center" md={8}>
    <h4>{props.title}</h4>
    <h5>{props.subtitle}</h5>
    <div>{props.quote}</div>
  </StyledQuote>
)

const Endorsements = props => (
  <section>
    <h3>Endorsements</h3>
    <Row center="sm">
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

Endorsements.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
  }),
}

export default Endorsements
