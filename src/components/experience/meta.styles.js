import styled from "styled-components"

import { Container, Row, Col } from "../grid-system"
import { colors, screen } from "../global/vars"

const SRow = styled(Row)`
  * {
    font-weight: 600 !important;
    font-size: 1.35rem !important;
    color: ${colors.gray500};
    letter-spacing: 0rem;
  }

  svg {
    height: 18px;
    width: 18px;
    margin-right: 0.8rem;
  }

  &:not(:last-of-type) {
    margin-bottom: ${props => (props.$toggle ? "1rem" : "0rem")};
  }

  &:not(:first-of-type) {
    display: ${props => (props.$toggle ? "flex" : "none")};
  }
`

const SCol = styled(Col)`
  display: flex;
  align-items: center;
`
const DateCol = styled(SCol)`
  text-transform: uppercase;
  font-size: 1.2rem !important;
  @media ${screen.max.md} {
    margin-top: ${props => (props.$toggle ? "0rem" : "1.8rem")};
  }
`

const LocCol = styled(SCol)``

const JobCol = styled(SCol)`
  @media ${screen.max.md} {
    margin: 0.4rem 0rem 1.6rem 2.5rem;
  }
`

export { SRow, SCol, DateCol, LocCol, JobCol }
