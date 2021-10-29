import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image/withIEPolyfill"

import SkillTag from "../skill/tag"

import { Wrapper, Hero, Details, SkillGroup } from "./styles"

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
        <Img fluid={props.hero.fluid} alt="" objectFit="contain" />
      </Hero>
    )}
    <Details>
      <span>
        <h4>{props.title}</h4>
        <h6>{props.summary}</h6>
      </span>
      <Skills skills={props.skills} title={props.title} theme="light" />
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
