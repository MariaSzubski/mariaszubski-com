import React, { useState } from "react"

import { Line, Icon, Panel, SLink } from "./styles"

const MenuIcon = () => {
  let [toggle, setToggle] = useState(-1)
  return (
    <>
      <Panel $open={toggle}>
        <SLink to="/" activeClassName="active">
          Home
        </SLink>
        <SLink to="/about" activeClassName="active">
          About
        </SLink>
        <SLink to="/projects" activeClassName="active">
          Code
        </SLink>
        <SLink to="/speaking" activeClassName="active">
          Speaking
        </SLink>
        <SLink to="/contact" activeClassName="active">
          Contact
        </SLink>
      </Panel>
      <Icon $open={toggle} onClick={() => setToggle(toggle <= 0 ? 1 : 0)}>
        <Line />
        <Line />
        <Line />
      </Icon>
    </>
  )
}

export default MenuIcon
