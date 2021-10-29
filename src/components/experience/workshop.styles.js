import styled from "styled-components"

import { Container, Row, Col } from "../grid-system"
import * as g from "../global/vars"

const SContainer = styled(Container)`
  border-bottom: 1px solid ${g.colors.gray100};
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
`

const SRow = styled(Row)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  svg {
    height: 18px;
    width: 18px;
    margin-right: 0.8rem;
  }

  @media ${g.screen.max.md} {
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;
  }
`

const SCol = styled(Col)`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${g.colors.gray500};
`

const LabelCol = styled(Col)`
  font-weight: 700;
  font-size: 1.8rem;

  @media ${g.screen.max.md} {
    order: 1;
    margin-bottom: 0.8rem;
  }
`

const DateCol = styled(SCol)`
  @media ${g.screen.max.md} {
    order: 2;
  }
`

const DurationCol = styled(SCol)`
  margin-right: 0;
  margin-left: auto;
  @media ${g.screen.max.md} {
    order: 3;
    margin-left: inherit;
  }
`

const Company = styled(SCol)`
  @media ${g.screen.max.md} {
    order: 3;
  }
`

export { SContainer, SRow, SCol, LabelCol, DateCol, DurationCol, Company }
