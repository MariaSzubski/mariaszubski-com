import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { Container, Row, Col, Hide } from "../grid-system"
import Link from "../utilities/link"

import { colors, screen } from "../global/vars"

const Desc = styled.ul`
  padding-left: 0rem;
  li {
    margin-bottom: 2.4rem;
  }

`

const AttributionsSection = props => {
  return (
    <Row
      align="center"
      justify="center"
      style={{ minHeight: "70vh" }}
      className="element"
    >
      <Col md={10} lg={5.5} xl={8} xxl={9}>
        <hgroup>
          <h3>Asset Credits</h3>
        </hgroup>
        <Desc>
          <li>
            Home page icons made by{" "}
            <Link
              to="https://www.flaticon.com/authors/freepik"
              title="Freepik"
              target="_blank"
            >
              Freepik
            </Link>{" "}
            <Link
              to="https://www.flaticon.com/packs/universe-29"
              title="Spaceship"
              target="_blank"
            >
              [1]
            </Link>{" "}
            <Link
              to="https://www.flaticon.com/packs/tech-support-26"
              title="Bug"
              target="_blank"
            >
              [2]
            </Link>{" "}
            <Link
              to="https://www.flaticon.com/packs/teamwork-52"
              title="Motivation"
              target="_blank"
            >
              [3]
            </Link>{" "}
            from{" "}
            <Link
              to="https://www.flaticon.com/"
              title="Flaticon"
              target="_blank"
            >
              flaticon.com
            </Link>
          </li>
          <li>
            Flat device mockups made by{" "}
            <Link
              to="https://dribbble.com/shots/988673-Flat-Devices"
              target="_blank"
            >
              Nick Herasimenka
            </Link>
          </li>
          <li>
            Technology icons curated by{" "}
            <Link
              to="https://github.com/gilbarbara/logos"
              title="Tech Logos"
              target="_blank"
            >
              Gil Barbara
            </Link>
          </li>
        </Desc>
      </Col>
    </Row>
  )
}

export default AttributionsSection
