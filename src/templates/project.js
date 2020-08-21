import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"
import { Container, Row, Col } from "react-grid-system"

import Layout from "../components/layout"
import HTML from "../components/utilities/html"
import Button from "../components/button"
import { SkillList, SkillTag } from "../components/skill/list"

const Hero = styled(Img)`
  margin-bottom: 6rem;
`

const Aside = styled.aside`
  padding: 2rem 2rem;
  margin-bottom: 2rem;
`

const ProjectTemplate = props => {
  const post = props.data.contentfulProject
  return (
    <Layout>
      <Container style={{ padding: "0rem" }}>
        <Row justify="center">
          <Col xxl={10.5}>
            <section className="element">
              <hgroup>
                <h1>{post.summary}</h1>
                <h2>{post.title}</h2>
              </hgroup>
              <Hero
                fluid={post.hero.fluid}
                alt={`${post.summary} - ${post.title}`}
                object-fit="containe"
              />
            </section>
          </Col>
        </Row>
        <Row justify="center">
          <Col xxl={8.5}>
            <section className="element">
              <Row justify="between">
                <Col lg={9} xl={8.25}>
                  <HTML content={post.desc} className="" />
                </Col>
                <Col lg={3} xl={3.25}>
                  <Aside className="background">
                    {post.skills[0].displayLabel && (
                      <h5>{post.skills[0].title}</h5>
                    )}
                    <SkillList>
                      {post.skills[0].skill.map((skill, i) => (
                        <SkillTag
                          icon={skill.toLowerCase()}
                          label={skill}
                          key={`${post.skills[0].contentful_id}-${i}`}
                        />
                      ))}
                    </SkillList>
                  </Aside>
                  <Aside className="background">
                    {post.links.map(link => (
                      <Button
                        to={link.url}
                        target={link.targetBlank && "_blank"}
                        key={link.contentful_id}
                        $stacked
                      >
                        {link.label}
                      </Button>
                    ))}
                  </Aside>
                </Col>
              </Row>
            </section>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

ProjectTemplate.propTypes = {
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  org: PropTypes.string,
  links: PropTypes.array,
  skills: PropTypes.array,
  desc: PropTypes.object,
  hero: PropTypes.string,
  data: PropTypes.object,
}

ProjectTemplate.defaultProps = {
  summary: "Gatbsy Workshop",
  title: "Intro to Static Site Generators",
  org: "JAMStack Cincinnati",
  links: [
    { url: "/", label: "Link 1", targetBlank: true },
    { url: "/", label: "Link 2", targetBlank: true },
  ],
  skills: ["gatsby", "reactjs", "netlify", "styledcomp"],
  desc: {
    childMarkdownRemark: {
      html:
        '<p>This workshop covers the basics of GatsbyJS and the benefits of Static Site Generators. It begins with a brief comparison of popular generators before moving on to a hands-on demo. Participants will build a single-page Gatsby site and deploy it to Netlify.</p>\n<p>This workshop explores the basics of React and Gatsby including function components, props and state, routing, plugins, and css-in-js. </p>\n<p>⏱ <strong>Workshop Duration:</strong> 60 - 90 minutes\n</p><p>🔥 <strong><a href="https://docs.google.com/presentation/d/12_HeL80Du2B6GEUQhsxrLm4R0gKGQdaM9Hm1JEtk_HQ">Slides</a></strong></p>\n<h4>Topics Covered</h4>\n<ul>\n<li>React project structure &#x26; routing</li>\n<li>Pre-fetching with Gatsby Link</li>\n<li>Gatsby Image</li>\n<li>React Building Blocks: Function Components, Props, Hooks, State</li>\n<li>Plugins: Styled Components, Web Font Loader</li>\n<li>Netlify deployment</li>\n</ul>\n<h3>👩‍💻 Additional Resources:</h3><h4>Static Site Generators to check out</h4>\n<ul>\n<li><a href="https://www.gatsbyjs.org/">Gatsby</a> (React)</li>\n<li><a href="https://nextjs.org/">Next</a> (React)</li>\n<li><a href="https://jekyllrb.com/">Jekyll</a> (Liquid, GitHub Pages)</li>\n<li><a href="https://middlemanapp.com/">Middleman</a> (ERB)</li>\n<li><a href="https://gohugo.io/">Hugo</a> (Go)</li>\n<li><a href="https://nuxtjs.org/">Nuxt</a> (Vue)</li>\n<li><a href="https://www.staticgen.com/">Full List of Static Site Generators</a></li>\n</ul>\n<h4>Podcasts &#x26; books mentioned</h4>\n<ul>\n<li>🎧 Syntax - <a href="https://syntax.fm/show/120/gatsby-vs-next">Gatsby vs Next</a></li>\n<li>🎧 Syntax - <a href="https://syntax.fm/show/034/why-static-site-generators-are-awesome">Why Static Site Generators Are Awesome</a></li>\n<li>📘 O\'Reilly - <a href="https://www.oreilly.com/library/view/static-site-generators/9781492048558/">Static Site Generators free eBook</a></li>\n</ul>\n<h4>Helpful resources</h4>\n<ul>\n<li>📖 <a href="https://www.gatsbyjs.org/docs/">Official Gatsby Docs</a></li>\n<li>🛠 <a href="https://www.gatsbyjs.org/starters/?v=2">Starter Templates</a></li>\n<li>🛠 <a href="https://www.gatsbyjs.org/plugins/">Gatsby Plugins</a></li>\n<li>👩‍💻 <a href="https://github.com/MicheleBertoli/css-in-js">List of CSS-In-JS Techniques</a></li>\n<li>🛠 <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/">Styled Components</a></li>\n<li>🛠 <a href="https://github.com/typekit/webfontloader#modules">Web Font Loader</a></li>\n</ul>\n<h4>Presented At</h4>\n<ul>\n<li>JAMStack Cincinnati - June 2019</li>\n</ul>',
    },
  },
  hero:
    "//images.ctfassets.net/sx9v94b5k8eh/2Pnmp6sjLadMjQsWQi8g77/19e440fb36248457a742aa7ce57c859c/style_guide.png?w=1600&q=100&fm=webp",
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      contentful_id
      category
      summary
      title
      org
      links {
        contentful_id
        label
        url
        targetBlank
      }
      skills {
        contentful_id
        title
        displayLabel
        darkMode
        skill
      }
      desc {
        childMarkdownRemark {
          html
        }
      }
      hero {
        fluid {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`
