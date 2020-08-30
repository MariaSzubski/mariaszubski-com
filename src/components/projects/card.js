import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image/withIEPolyfill"
import styled, { css } from "styled-components"

import * as g from "../global/vars"

import SkillTag from "../skill/tag"
import Link from "../utilities/link/link"

const Wrapper = styled(Link)`
  display: flex;
  box-shadow: 0px 0.4rem 1rem rgba(0, 0, 20, 0.5);
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 0.7rem 0rem;
  text-shadow: none;
  transform: scale(1) translateY(0rem);
  transition: all 0.1s ease-in;
  background: ${g.colors.white + "EE"};
  &:hover {
    transform: scale(1.03) translateY(-0.5rem);
    z-index: 1000000;
    text-decoration: none;
    transition: all 0.1s ease-in;
  }
  @media ${g.screen.min.sm} {
    margin: 1.4rem 0rem;
  }
  @media ${g.screen.min.lg} {
    flex-direction: column;
    margin: 1.4rem 0rem;
  }
`

const Hero = styled.div`
  padding: 3rem 0rem;
  height: 100%;
  flex: 0 0 35%;
  width: 35%;


  @media ${g.screen.min.lg} {
    padding: 4.8rem 0.4rem;
    height: auto;
    flex: 1 1 100%;
    width: auto;
  }
`

const Details = styled.div`
  flex: 0 0 65%;
  width: 65%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  background: #ffffff;

  h4 {
    color: ${g.colors.blue700};
    font-size: 1.9rem;
    margin-bottom: 0.6rem;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &,
  h6 {
    color: ${g.colors.blue700};
    font-weight: 600;
  }

  h6 {
    margin-bottom: 1.2rem;
  }

  @media ${g.screen.min.lg} {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex: 1 1 auto;
    width: auto;

    > span {
      display: inline-block;
      margin-right: 0.5rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    h4 {
      color: ${g.colors.blue700};
      font-size: 1.9rem;
      margin-bottom: 0.2rem;
      line-height: 1.55;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    h6 {
      margin-bottom: 0rem;
    }
  }
`

const SkillGroup = styled.div`
  display: flex;
`

const Skills = props => {
  const arr = [].concat(props.skills)
  return (
    <SkillGroup>
      {arr.slice(0, 3).map((tag, idx) => (
        <SkillTag
          icon={tag.toLowerCase()}
          simple={true}
          size="2.4rem"
          theme={props.theme}
          key={`${props.title}-tag-${idx}`}
        />
      ))}
    </SkillGroup>
  )
}

const ProjectCard = props => (
  <Wrapper to={props.permalink}>
    {props.hero && (
      <Hero>
        <Img fluid={props.hero.fluid} alt={props.title} objectFit="contain" />
      </Hero>
    )}
    <Details>
      <span>
        <h4 title={props.title}>{props.title}</h4>
        <h6>{props.summary}</h6>
      </span>
      <Skills
        skills={props.skills}
        title={props.title}
        theme="light"
      />
    </Details>
  </Wrapper>
)

Skills.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array,
  theme: PropTypes.string,
}

ProjectCard.propTypes = {
  hero: PropTypes.shape({
    fluid: PropTypes.object.isRequired,
  }),
  permalink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
}

ProjectCard.defaultProps = {
  permalink: "/",
  summary: "Gatsby Workshop",
  title: "Intro to Static Site Generators",
  hero:
    "//images.ctfassets.net/sx9v94b5k8eh/2Pnmp6sjLadMjQsWQi8g77/19e440fb36248457a742aa7ce57c859c/style_guide.png?w=1400&q=50&fm=webp",
}

export default ProjectCard
