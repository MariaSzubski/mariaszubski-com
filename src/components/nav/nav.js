import React from "react"
import styled from "styled-components"

import { Show, Hide } from "../grid-system"
import { colors, screen } from "../global/vars"
import Logo from "../logo"
import Button from "../button"
import Link from "../utilities/link"
import MenuIcon from "./menu/icon"

const StyledLink = styled(Link)``

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;

  @media ${screen.max.md} {
    padding: 1.6rem 2.4rem;
    margin-bottom: 2.4rem;
  }
`

const PageLinks = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  ${StyledLink} {
    font-weight: bold;
    text-transform: uppercase;
    position: relative;
    &:not(:last-child) {
      padding: 1rem 2rem;
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
      transform: scaleX(1);
      transform-origin: bottom center;
      transition: all 0.2s ease-out;
    }
    &:hover:after {
      ${"" /* transform: scaleX(0.85); */}

      transform: scaleX(1);
      opacity: 1;
    }
    &.active:after {
      ${"" /* transform: scaleX(0.85); */}
      opacity: 1;
      background: ${colors.blue300};
    }
  }
`

const StyledLogo = styled(Logo)`
  font-size: 4.8rem;
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

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">
        <StyledLogo />
      </Link>
      <PageLinks aria-label="pages">
        <Show md>
          <div className="text-sm">
            <StyledLink to="/type-spec" activeClassName="active">
              Type Spec
            </StyledLink>
            <StyledLink to="/blog" activeClassName="active">
              Blog
            </StyledLink>
            <StyledLink to="/about" activeClassName="active">
              About
            </StyledLink>
            <StyledLink to="/projects" activeClassName="active">
              Code
            </StyledLink>
            <StyledLink to="/speaking" activeClassName="active">
              Speaking
            </StyledLink>
            <Button to="/contact" $color="green" activeClassName="active">
              Contact
            </Button>
          </div>
        </Show>
        <Hide md>
          <MenuIcon />
        </Hide>
      </PageLinks>
    </StyledNav>
  )
}

export default Nav
