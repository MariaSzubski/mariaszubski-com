import styled from "styled-components"

import { Col } from "../grid-system"
import { colors } from "../global/vars"

export const StyledQuote = styled(Col)`
  background-color: hsla(0, 0%, 100%, 0.03);
  padding: 4rem 2rem;
  margin: 1rem;

  h4,
  h5 {
    color: ${colors.yellow};
  }
`
