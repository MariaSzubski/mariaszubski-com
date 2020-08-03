import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { screen, colors } from "../global/vars"
import SkillTag from "./tag"

const Groups = styled.div`
  background-color: hsla(0, 0%, 100%, 0.03);
  padding: 4rem 1rem;
  margin: 0rem -2rem;

  > div:not(:last-of-type) {
    margin-bottom: 4rem;
  }

  @media ${screen.min.md} {
    padding: 4rem 3rem;
    margin: 0rem;
  }
`

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;

  > span {
    width: calc(50% - 0.6rem);
    @media ${screen.min.md} {
      width: auto;
    }
  }
`

const SkillGroup = ({ children, ...props }) => (
  <section className={`element ${props.dark ? "dk" : "lt"}`}>
    {props.title && <h3 className="pad">{props.title}</h3>}
    <Groups>
      {props.data &&
        props.data.map((group, g_idx) => (
          <div key={`${group.title}-skills-${g_idx}`}>
            <h5 className="pad">{group.title}</h5>
            <Skills>
              {group.skills.map((skill, s_idx) => (
                <SkillTag
                  key={`${group.title}-skill-${s_idx}`}
                  icon={skill.icon && skill.icon}
                  label={skill.label && skill.label}
                  dark={props.dark}
                />
              ))}
            </Skills>
          </div>
        ))}
    </Groups>
  </section>
)

SkillGroup.propTypes = {
  dark: PropTypes.bool,
  title: PropTypes.string,
  data: PropTypes.array,
  children: PropTypes.node,
}

SkillGroup.defaultProps = {
  dark: false,
}

export { SkillGroup, SkillTag }
