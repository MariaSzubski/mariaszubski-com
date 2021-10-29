import styled from "styled-components"

import Link from "../utilities/link"
import { colors } from "../global/vars"

export const StyledButton = styled(Link)`
  position: relative;
  display: inline-flex;
  vertical-align: top;
  justify-content: center;
  border-radius: ${props => (props.$rounded ? "3rem" : "0.3rem")};
  border: 1px solid ${props => props.$border};

  background: ${props => props.$fill};
  cursor: pointer;
  line-height: 1.8;
  letter-spacing: 0.06rem;
  &:not(:last-of-type) {
    margin-right: 1rem;
  }

  color: ${props => (props.$textColor ? "white" : props.$border)};
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  text-shadow: 0rem 0.15rem 0.1rem ${colors.black};

  ${"" /* Vertical Buttons */}
  &:not(:last-of-type) {
    margin-bottom: ${props => (props.$stacked ? "1.5rem" : "")};
  }
  width: ${props => (props.$stacked ? "100%" : "auto")};
  padding: 1rem
    ${props => (props.$stacked ? "1rem" : props.$rounded ? "2rem" : "3rem")};
  align-items: flex-start;

  img {
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 0.8rem;
    margin-left: -0.5rem;
  }

  ${"" /* Background */}
  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: ${props => props.$bg_before};
    border-radius: ${props => (props.$rounded ? "3rem" : "0.3rem")};
    transition: opacity 0.15s ease-out;
  }

  &:hover {
    color: white;
    text-decoration: none;
    background: ${props => props.$hover};
    border-radius: ${props => (props.$rounded ? "3rem" : "0.3rem")};
    &:before {
      opacity: 1;
      transition: opacity 0.25s ease-out;
    }
  }
`
