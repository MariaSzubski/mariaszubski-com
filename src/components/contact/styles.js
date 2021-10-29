import styled from "styled-components"

import HTML from "../utilities/html"
import { colors, screen } from "../global/vars"

const Wrapper = styled.div`
  margin: 8rem 0rem;
`

const Desc = styled(HTML)`
  font-size: 2.3rem;
  p:last-of-type {
    font-size: 1.6rem;
  }
  @media ${screen.min.sm} {
    font-size: 2.6rem;
    p:last-of-type {
      font-size: 2rem;
    }
  }
`

const ContactH3 = styled.h3`
  margin-top: 10rem;
  &:after {
    background-color: ${colors.green300};
    animation-delay: 1.8s;
  }
`

export { Wrapper, Desc, ContactH3 }
