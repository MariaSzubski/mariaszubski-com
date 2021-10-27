import React from "react"

import { Show, Hide } from "../grid-system"
import Button from "../button"
import Link from "../utilities/link"
import MenuIcon from "./menu/icon"

import { StyledLink, StyledNav, Desktop, StyledLogo } from "./styles"

const Nav = () => (
  <StyledNav>
    <Link to="/" aria-label="Site Logo - Home">
      <StyledLogo />
    </Link>
    <Show md>
      <Desktop className="text-sm">
        <StyledLink to="/" activeClassName="active">
          Home
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
        <Button to="/contact" color="blue" activeClassName="active">
          Contact
        </Button>
      </Desktop>
    </Show>
    <Hide md>
      <MenuIcon />
    </Hide>
  </StyledNav>
)

export default Nav
