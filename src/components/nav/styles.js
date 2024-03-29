import styled from "styled-components"

import { colors, screen } from "../global/vars"
import Logo from "../logo"
import Link from "../utilities/link"
import Button from "../button"

const StyledLink = styled(Link)``

const StyledButton = styled(Button)`
  font-size: 1.3rem !important;
`

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2.4rem;

  @media ${screen.max.md} {
    padding: 1.6rem 2.4rem;
    margin-bottom: 2.4rem;
  }
`

const Desktop = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  ${StyledLink} {
    color: ${colors.white};
    font-weight: bold;
    text-transform: uppercase;
    position: relative;
    &:not(:last-child) {
      padding: 1.25rem 2rem;
    }
    &:hover {
      text-decoration: none;
    }
    &:after {
      content: "";
      position: absolute;
      width: calc(100% - 1.6rem);
      height: 0.2rem;
      bottom: 0;
      left: 0.8rem;
      background: ${colors.blue500};
      opacity: 0;
      transform: scaleX(0.85);
      transform-origin: bottom center;
      transition: opacity 0.15s ease-out;
    }
    &:hover:after {
      opacity: 1;
    }
    &.active:after {
      opacity: 1;
      background: ${colors.blue300};
    }
  }
`

const StyledLogo = styled(Logo)`
  font-size: 4.8rem;

  &:hover {
    ${"" /* animation: ease .5s grow forwards; */}
  }
  ${
    "" /* @keyframes grow {
      0% {
        transform: scale(1);
      }
      25% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
      }
    } */
  }
`

const MobileMenu = styled.div`
  width: 300px;
  height: 200px;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1000000;
  background-color: ${colors.white};
  transition: all 0.3s;
  border-radius: 1rem;
  transform-origin: 88% 10%;
  animation-delay: 6s;
  transform: scale(0);

  animation: ${props =>
    props.$open ? "ease .6s scaled-2 forwards" : "ease .6s scaled-3 forwards"};
`

export { StyledLink, StyledButton, StyledNav, Desktop, StyledLogo, MobileMenu }
