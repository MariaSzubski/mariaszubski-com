import React, { useState } from "react"
import styled from "styled-components"

import { colors } from "../../global/vars"
import KeyframeMixin from "./keyframes"
import Button from "../../button"
import Link from "../../utilities/link"

const Line = styled.div`
  border-radius: 0.4rem;
  width: 100%;
  height: 0.4rem;
  background: white;
  transition: all 0.3s;
  position: relative;
  &:not(:first-of-type) {
    margin-top: 0.7rem;
  }
`

const Icon = styled.div`
  width: 3.2rem;
  height: 2.6rem;
  position: relative;
  cursor: pointer;
  z-index: 100000000;
  -webkit-touch-callout: none;
  user-select: none;
  animation-iteration-count: 0;

  ${KeyframeMixin}
  & ${Line}:nth-of-type(1) {
    animation: ${props =>
      props.$open === -1
        ? "none"
        : props.$open === 1
        ? "ease 0.65s top forwards"
        : "ease 0.65s top-2 forwards"};
  }
  & ${Line}:nth-of-type(2) {
    animation: ${props =>
      props.$open === -1
        ? "none"
        : props.$open === 1
        ? "ease 0.65s scaled forwards"
        : "ease 0.65s scaled-2 forwards"};
  }
  & ${Line}:nth-of-type(3) {
    animation: ${props =>
      props.$open === -1
        ? "none"
        : props.$open === 1
        ? "ease 0.65s bottom forwards"
        : "ease 0.65s bottom-2 forwards"};
  }
`

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  width: 26rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10000000;
  padding: 6rem 0rem 0rem 0rem;
  box-shadow: 0px 0px 20px black;
  background: linear-gradient(
    140deg,
    ${colors.plum500} 0%,
    ${colors.grape500} 100%
  );
  transition: all 0.3s;
  border-radius: 1rem;
  transform-origin: 87% 7%;
  transform: scale(0);
  animation: ${props =>
    props.$open === -1
      ? "none"
      : props.$open === 1
      ? "ease 0.7s menu forwards"
      : "ease 0.6s menu-2 forwards"};
`

const SLink = styled(Link)`
  color: white;
  font-weight: 600;
  letter-spacing: 0.15rem;
  font-size: 1.6rem;
  text-transform: uppercase;
  padding: 1.6rem 4rem;
  border-top: 1px solid ${colors.white + "22"};
  position: relative;
  transition: all .18s ease;
  &:hover {
    background-color: ${colors.white + "14"};
  }
  &.active:after {
    content: "";
    display: block;
    background: white;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 100%;
    position: absolute;
    left: 1.8rem;
    top: calc(50% - 0.4rem);
  }
`

const MenuIcon = props => {
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
