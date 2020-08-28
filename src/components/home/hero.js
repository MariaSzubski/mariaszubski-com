import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"

import { Row, Col, Show } from "../grid-system"
import HTML from "../utilities/html"
import { SkillGroup, SkillTag } from "../skill"
import Button from "../button"

import { colors, screen } from "../global/vars"

const SRow = styled(Row)`
  min-height: 50vh;
  @media ${screen.min.xl} {
    min-height: 92vh;
  }
`

const HeadshotCol = styled(Col)`
  opacity: 0.8;
`

const ContentCol = styled(Col)`
  align-self: center;
  margin-top: 5rem;
  max-width: 96rem;
  p {
    font-size: 2.4rem;
    line-height: 1.6;
    max-width: 80rem;
    text-align: center;
    margin: auto;
  }
  @media ${screen.min.md} {
    p {
      font-size: 3.8rem;
    }
  }
  @media ${screen.min.lg} {
    margin-top: 0rem;
    p {
      margin-bottom: 4rem;
      max-width: none;
      text-align: left;
    }
  }
  @media ${screen.min.xxl} {
    p {
      font-size: 4.6rem;
    }
  }
`

const SButton = styled(Button)`
  margin: 3rem auto 0rem;
`

const HeroSection = props => {
  const data = useStaticQuery(graphql`
    query {
      image: contentfulImage(contentful_id: { eq: "1uTQnGtlm3g2I5UkC2AbA6" }) {
        contentful_id
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      copy: contentfulSection(contentful_id: { eq: "lrABAOlfuglmvqaex6Up6" }) {
        copy {
          childMarkdownRemark {
            html
          }
        }
      }
      skills: contentfulSkillGroup(
        contentful_id: { eq: "52bvVt0XQ6WPd30kBRocp5" }
      ) {
        contentful_id
        title
        skills
      }
      link: contentfulLink(contentful_id: { eq: "6IBxN9h51NYQZOgABP9K8K" }) {
        contentful_id
        label
        url
        targetBlank
      }
    }
  `)
  return (
    <SRow align="center" justify="center" fluid>
      <Show lg>
        <HeadshotCol xs={12} lg={1} xl={3.5} xxl={3} fluid>
          <Img
            object-fit="contain"
            fluid={data.image.image.fluid}
            alt="Maria Szubski - Freelance Developer"
            style={{ borderRadius: "100%" }}
          />
        </HeadshotCol>
      </Show>
      <ContentCol
        xs={12}
        lg={7.5}
        xl={6.8}
        xxl={6.5}
        offset={{ xl: 0.5, xxl: 1 }}
      >
        <HTML content={data.copy.copy} />
        <SkillGroup size="3.8rem" theme="transparent">
          {data.skills.skills.map((tag, idx) => (
            <SkillTag
              icon={tag.toLowerCase()}
              key={`${data.skills.conentful_id}-${idx}`}
            />
          ))}
        </SkillGroup>
        <SButton to={data.link.url} color="blue" fill>
          {data.link.label}
        </SButton>
      </ContentCol>
    </SRow>
  )
}

export default HeroSection
