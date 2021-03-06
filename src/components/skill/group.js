import React, { useState } from "react"
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

  h2 {
    position: relative;
    display: inline;
    width: auto;

    > span {
      display: inline;
      position: absolute;
      left: 100%;
      top: -2px;
      text-transform: capitalize;
      font-weight: 700;
      padding-left: 0.7rem;
    }
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
    width: ${props => (props.$simple ? "auto" : "calc(50% - 2.6rem)")};
    @media ${screen.min.md} {
      width: auto;
    }
  }
`

const SkillGroup = ({ children, ...props }) => {
  const [highlight, setHighlight] = useState(undefined)

  const handleHighlight = label => {
    setHighlight(label)
  }

  return (
    <section
      className={`
      ${props.simple ? "element-minor " : "element "}
      ${(props.theme === "transparent" || props.simple) && "tr"}
      ${props.theme === "light" && "lt"}
      ${props.theme === "dark" && "dk"}
    `}
    >
      {!props.data ? (
        <Skills
          $center={props.center ? 1 : 0}
          $simple={props.simple ? 1 : 0}
          $transparent={props.theme === "transparent" ? 1 : 0}
        >
          {children}
        </Skills>
      ) : (
        <>
          {props.title && <h3 className="pad">{props.title}</h3>}

          <Groups
            $simple={props.simple ? 1 : 0}
            onMouseLeave={() => handleHighlight(undefined)}
          >
            {props.data &&
              props.data.map((group, g_idx) => (
                <div key={`${group.title}-skills-${g_idx}`}>
                  {props.simple ? (
                    <hgroup>
                      <h2>
                        {group.title}
                        {highlight && <span>{highlight}</span>}
                      </h2>
                    </hgroup>
                  ) : (
                    <h5 className="pad">{group.title}</h5>
                  )}

                  <Skills
                    $center={props.center ? 1 : 0}
                    $simple={props.simple ? 1 : 0}
                    $transparent={props.theme === "transparent" ? 1 : 0}
                  >
                    {group.skills.map((skill, s_idx) => (
                      <SkillTag
                        key={`${group.title}-skill-${s_idx}`}
                        icon={skill.icon && skill.icon}
                        label={skill.label && skill.label}
                        theme={props.theme}
                        simple={props.simple}
                        size={props.size}
                        highlight={props.highlight}
                        handleHighlight={handleHighlight}
                      />
                    ))}
                  </Skills>
                </div>
              ))}
          </Groups>
        </>
      )}
    </section>
  )
}

SkillGroup.propTypes = {
  theme: PropTypes.oneOf(["dark", "light", "transparent"]),
  transparent: PropTypes.bool,
  title: PropTypes.string,
  data: PropTypes.array,
  center: PropTypes.bool,
  children: PropTypes.node,
  simple: PropTypes.bool,
  highlight: PropTypes.bool,
  size: PropTypes.string,
}

SkillGroup.defaultProps = {
  theme: "dark",
  center: false,
  simple: false,
}

export { SkillGroup, SkillTag }
