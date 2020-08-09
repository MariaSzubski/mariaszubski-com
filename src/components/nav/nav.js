import React from "react"
import styled from "styled-components"

import { colors, screen } from "../global/vars"
import Logo from "../logo"
import Button from "../button"
import Link from "../utilities/link"

const StyledLink = styled(Link)``

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem;

  @media ${screen.max.sm} {
    padding: 1rem 2rem;
    img {
      width: 3.2rem;
      height: 3.2rem;
    }
  }
`

const PageLinks = styled.section`
  display: flex;
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
      background: linear-gradient(
        90deg,
        ${colors.blue} 0%,
        ${colors.blue200} 50%,
        ${colors.blue} 100%
      );
      transform: scaleX(0);
      transform-origin: bottom center;
      transition: transform 0.2s ease-out;
    }
    &:hover:after {
      transform: scaleX(1);
    }
    &.active:after {
      transform: scaleX(1);
      background: linear-gradient(
        90deg,
        ${colors.blue300} 0%,
        ${colors.blue200} 50%,
        ${colors.blue300} 100%
      );
    }
  }
  @media ${screen.max.sm} {
    section {
      flex-wrap: wrap;
      a:not(:last-child) {
        padding: 1rem;
      }
    }
  }
`

const StyledLogo = styled(Logo)`
  font-size: 4.8rem;
`

const Nav = () => (
  <StyledNav>
    <Link to="/">
      <StyledLogo />
    </Link>
    <PageLinks aria-label="pages" className="text-sm">
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
      <Button to="/projects" $color="green" activeClassName="active">
        Let&apos;s Connect
      </Button>
    </PageLinks>
  </StyledNav>
)

export default Nav
