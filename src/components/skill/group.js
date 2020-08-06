import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { screen, colors } from "../global/vars"
import SkillTag from "./tag"

const Groups = styled.div`
  padding: ${props => (props.$simple ? "1.6rem 1rem" : "4rem 1rem")};
  margin: 0rem -2rem;

  > div:not(:last-of-type) {
    margin-bottom: 4rem;
  }

  @media ${screen.min.md} {
    display: ${props => (props.$simple ? "inline-block" : "block")};
    padding: ${props => (props.$simple ? "2rem" : "4rem 3rem")};
    margin: 0rem;
  }
`

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => (props.$center ? "center" : "flex-start")};

  > span {
    width: ${props => (props.$simple ? "auto" : "calc(50% - 0.6rem)")};
    @media ${screen.min.md} {
      width: auto;
    }
  }
`

const SkillGroup = ({ children, ...props }) => (
  <section
    className={`
      ${props.$simple ? "element-minor " : "element "}
      ${(props.light || props.$simple) ? "lt" : "dk"}
    `}
  >
    {props.title && <h3 className="pad">{props.title}</h3>}

    <Groups className={props.$simple ? "" : "background"} $simple={props.$simple ? 1 : 0}>
      {props.data &&
        props.data.map((group, g_idx) => (
          <div key={`${group.title}-skills-${g_idx}`}>
            {props.$simple ? (
              <h2>{group.title}</h2>
            ) : (
              <h5 className="pad">{group.title}</h5>
            )}

            <Skills
              $center={props.$center ? 1 : 0}
              $simple={props.$simple ? 1 : 0}
            >
              {group.skills.map((skill, s_idx) => (
                <SkillTag
                  key={`${group.title}-skill-${s_idx}`}
                  icon={skill.icon && skill.icon}
                  label={skill.label && skill.label}
                  light={props.light}
                  simple={props.$simple}
                />
              ))}
            </Skills>
          </div>
        ))}
    </Groups>
  </section>
)

SkillGroup.propTypes = {
  light: PropTypes.bool,
  title: PropTypes.string,
  data: PropTypes.array,
  $center: PropTypes.bool,
  children: PropTypes.node,
  $simple: PropTypes.bool,
}

SkillGroup.defaultProps = {
  light: false,
  $center: false,
  $simple: false,
}

export { SkillGroup, SkillTag }
