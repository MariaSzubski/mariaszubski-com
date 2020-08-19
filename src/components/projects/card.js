import React from "react"
import PropTypes from "prop-types"
// import Img from "gatsby-image/withIEPolyfill"
import styled, { css } from "styled-components"

import * as g from "../global/vars"

import SkillTag from "../skill/tag"
import Link from "../utilities/link/link"

const Wrapper = styled(Link)`
  display: block;
  box-shadow: 0px 0.4rem 1rem rgba(0, 0, 20, 0.5);
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 1.2rem 0rem;
  transform: scale(1) translateY(0rem);
  transition: all 0.1s ease-in;

  &:hover {
    transform: scale(1.03) translateY(-0.5rem);
    z-index: 1000000;
    transition: all 0.1s ease-in;
  }
`

const Hero = styled.img`
  padding: 3rem 0.5rem;
  object-fit: contain;
  width: 100%;
  background: ${g.colors.white + "EE"};
`

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background: #ffffff;

  > span {
    display: inline-block;
    margin-right: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h4 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.9rem;
    margin-bottom: 0.2rem;
  }

  &,
  h6 {
    color: ${g.colors.blue700};
    font-weight: 600;
  }
`

const SkillGroup = styled.div`
  display: flex;
`

const Skills = props => (
  <SkillGroup>
    {props.skills.splice(0, 3).map((tag, idx) => (
      <SkillTag
        icon={tag}
        key={`${props.title}-tag-${idx}`}
        simple={true}
        size="1.8rem"
        light={true}
      />
    ))}
  </SkillGroup>
)

const ProjectCard = props => (
  <Wrapper to={props.permalink}>
    {/* <Img fluid={hero.fluid} objectFit="cover" objectPosition="50% 50%" /> */}
    <Hero src={props.hero} />
    <Details>
      <span>
        <h4>{props.title}</h4>
        <h6>{props.summary}</h6>
      </span>
      <Skills skills={props.skills} title={props.title} />
    </Details>
  </Wrapper>
)

Skills.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array,
}

ProjectCard.propTypes = {
  // hero: PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   fluid: PropTypes.object.isRequired, // base64, tracedSVG, srcWebp, srcSetWebp
  // }),
  permalink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  skills: PropTypes.array,
  hero: PropTypes.string.isRequired,
}

ProjectCard.defaultProps = {
  permalink: "/",
  summary: "Gatsby Workshop",
  title: "Intro to Static Site Generators",
  hero:
    "//images.ctfassets.net/sx9v94b5k8eh/2Pnmp6sjLadMjQsWQi8g77/19e440fb36248457a742aa7ce57c859c/style_guide.png?w=1400&q=50&fm=webp",
}

export default ProjectCard
