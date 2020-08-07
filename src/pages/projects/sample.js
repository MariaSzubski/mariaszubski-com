import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Grid, Row, Col } from "react-flexbox-grid"

import Layout from "../../components/layout"
import HTML from "../../components/utilities/html"
import Button from "../../components/button"
import { SkillList, SkillTag } from "../../components/skill/list"

const Hero = styled.img`
  width: 100%;
  object-fit: contain;
`

const Aside = styled.aside`
  padding: 2rem 2rem;
  margin-bottom: 2rem;
`

const ProjectTemplate = props => (
  <Layout>
    <Grid fluid>
      <Row around="md">
        <Col xl={10}>
          <section className="element">
            <hgroup>
              <h1>{props.title}</h1>
              <h2>{props.summary}</h2>
            </hgroup>
            <Hero src={props.hero} alt={`${props.title} - ${props.summary}`} />
          </section>
          <section className="element">
            <Row>
              <Col lg={9} xl={9}>
                <HTML content={props.desc} className="text-lg" />
              </Col>
              <Col lg={3} xl={3}>
                <Aside className="background">
                  {props.links.map((link, idx) => (
                    <Button
                      to={link.url}
                      target={link.targetBlank && "_blank"}
                      key={`${props.title}-link-${idx}`}
                    >
                      {link.label}
                    </Button>
                  ))}
                </Aside>
                <Aside className="background">
                  <h5>Technologies</h5>
                  <SkillList>
                    {props.skills.map((skill, idx) => (
                      <SkillTag
                        icon={skill}
                        key={`${props.title}-skill-${idx}`}
                      />
                    ))}
                  </SkillList>
                </Aside>
                <Aside className="background">
                  <h5>Presented At</h5>
                  <p>{props.org}</p>
                  <p>June 2019</p>
                </Aside>
              </Col>
            </Row>
          </section>
        </Col>
      </Row>
    </Grid>
  </Layout>
)

ProjectTemplate.propTypes = {
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  org: PropTypes.string,
  links: PropTypes.array,
  skills: PropTypes.array,
  desc: PropTypes.object,
  hero: PropTypes.string,
}

ProjectTemplate.defaultProps = {
  summary: "Gatbsy Workshop",
  title: "Intro to Static Site Generators",
  org: "JAMStack Cincinnati",
  links: [
    { url: "/", label: "Link 1", targetBlank: true },
    { url: "/", label: "Link 2", targetBlank: true },
  ],
  skills: ["gatsby", "reactjs", "dato", "netlify"],
  desc: {
    childMarkdownRemark: {
      html:
        '<p>I led a workshop on <strong>Static Site Generators &#x26; GatsbyJS</strong> for <a href="https://www.meetup.com/JAMstack-Cincinnati/">JAMstack Cincinnati</a>. The demo project for this workshop introduces React components, props and state, routing, plugins, css-in-js, and Netlify deployment.</p>\n<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>',
    },
  },
  hero:
    "//images.ctfassets.net/sx9v94b5k8eh/2Pnmp6sjLadMjQsWQi8g77/19e440fb36248457a742aa7ce57c859c/style_guide.png?w=1600&q=100&fm=webp",
}

export default ProjectTemplate
