import styled from "styled-components"
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
export { Panel, Company, Desc }
