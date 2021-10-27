import styled from "styled-components"

import { colors } from "../global/vars"
import Link from "../utilities/link"

const Desc = styled.p`
  padding-left: 0rem;
  li {
    margin-bottom: 2.4rem;
  }
`

const Content = styled.div`
  background: ${colors.white + "EE"};
  color: black;
  border-radius: 0.5rem;
  padding: 3rem 4rem;
  box-shadow: 0px 0.4rem 1rem rgba(0, 0, 20, 0.5);
  h3 {
    color: ${colors.black};
  }
`

const SLink = styled(Link)`
  text-shadow: none;
  color: ${colors.blue300};
`

export { Desc, Content, SLink }
