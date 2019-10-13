import React from 'react'
import styled from 'styled-components'

import { colors, screen } from '../global/vars'
import Logo from '../logo'
import Button from '../utils/button'
import Link from '../utils/link'

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
      content: '';
      position: absolute;
      width: calc(100% - 1.6rem);
      height: 0.2rem;
      bottom: 0;
      left: 0.8rem;
      background: linear-gradient(
        90deg,
        ${colors.plum} 0%,
        ${colors.plum300} 50%,
        ${colors.plum} 100%
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
        ${colors.plum} 0%,
        ${colors.plum300} 50%,
        ${colors.plum} 100%
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

const LogoLink = styled(Logo)`
  font-size: 4.8rem;
`

const Nav = () => (
  <StyledNav>
    <LogoLink to="/">
      <Logo />
    </LogoLink>
    <PageLinks aria-label="pages" className="text-sm">
      <StyledLink to="/type-spec" activeClassName="active">
        About
      </StyledLink>
      <StyledLink to="/projects" activeClassName="active">
        Projects
      </StyledLink>
      <StyledLink to="/projects/style-guide" activeClassName="active">
        Experience
      </StyledLink>
      <Button to="/projects" color="green" activeClassName="active">
        Let&apos;s Connect
      </Button>
    </PageLinks>
  </StyledNav>
)

export default Nav
