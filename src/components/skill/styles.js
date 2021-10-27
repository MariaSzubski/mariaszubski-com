import styled from "styled-components"
import { screen, colors } from "../global/vars"

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  > span {
    margin-right: 0rem;
  }

  @media ${screen.min.sm} and ${screen.max.lg} {
    flex-direction: row;
    > span {
      margin-right: 0.6rem;
    }
  }
`

const StyledIcon = styled.span`
  display: inline-flex;
  align-items: center;
`

const StyledTag = styled.span`
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  margin: 0.3rem 0.3rem 0.3rem 0rem;
  font-weight: 700;
  text-transform: capitalize;
  font-size: 1.4rem;

  .tr & {
    padding: 0.5rem 0rem;
    text-transform: uppercase;
    letter-spacing: 0.19rem;
    font-size: 1.7rem;
    color: ${colors.white};
    margin-right: 2.6rem;
  }

  &:last-of-type {
    margin-right: 0rem;
  }

  .lt & {
    background-color: ${props =>
      props.$simple ? "transparent" : `${colors.white}EE`};
    color: ${colors.black};
    padding: 1.8rem 1.4rem;
    height: 3rem;
  }

  .dk & {
    background-color: ${colors.blue900 + "88"};
    padding: 2rem 1.2rem;
    height: 3.4rem;
    letter-spacing: 0.05rem;
  }

  &:hover {
    cursor: inherit;
  }

  ${StyledIcon} > * {
    height: 2rem;
    width: 2rem;
    margin-right: ${props => (props.$simple ? "0.5rem" : "1.1rem")};
    margin-left: 0rem;
  }

  @media ${screen.min.md} {
    font-size: 1.4rem;
    margin: 0.3rem 0.7rem 0.3rem 0rem;

    &:first-of-type {
      margin-left: 0rem;
    }
    &:last-of-type {
      margin-right: 0rem;
    }

    ${StyledIcon} > * {
      height: ${props => props.$size};
      width: ${props => props.$size};

      margin-left: ${props => (props.$simple ? "0rem" : "1.1rem")};
      margin-right: ${props => (props.$simple ? "0rem" : "0.7rem")};
    }
  }
`

export { StyledList, StyledIcon, StyledTag }
