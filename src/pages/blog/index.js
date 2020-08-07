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

const BlogPostTemplate = props => {
  let blogDate = new Date("2020-08-07")
  let trans = blogDate.toDateString()
  return (
  <Layout>
    <Grid fluid>
      <Row around="md">
        <Col xl={10}>
          <section className="element">
            <hgroup>
              <h1>{props.title}</h1>
              <h6>Maria Szubski</h6>
              <h6>{trans}</h6>
            </hgroup>
            <HTML content={props.content} className="" />
          </section>
          {/* Share */}
          {/* View on Medium */}
          {/* Follow Me on Medium /dev.to */}
          {/* Book Me for a talk */}
        </Col>
      </Row>
    </Grid>
  </Layout>
)}

BlogPostTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.object,
  hero: PropTypes.string,
  // related posts
  // tags
}

BlogPostTemplate.defaultProps = {
  title: "Gatsby Workshop Overview",
  content: {
    childMarkdownRemark: {
      html:
        '<p>This workshop covers the basics of GatsbyJS and the benefits of Static Site Generators. It begins with a brief comparison of popular generators before moving on to a hands-on demo. Participants will build a single-page Gatsby site and deploy it to Netlify.</p>\n<p>This workshop explores the basics of React and Gatsby including function components, props and state, routing, plugins, and css-in-js. </p>\n<p>⏱ <strong>Workshop Duration:</strong> 60 - 90 minutes\n🔥 <strong><a href="https://docs.google.com/presentation/d/12_HeL80Du2B6GEUQhsxrLm4R0gKGQdaM9Hm1JEtk_HQ">Slides</a></strong></p>\n<h4>Topics Covered</h4>\n<ul>\n<li>React project structure &#x26; routing</li>\n<li>Pre-fetching with Gatsby Link</li>\n<li>Gatsby Image</li>\n<li>React Building Blocks: Function Components, Props, Hooks, State</li>\n<li>Plugins: Styled Components, Web Font Loader</li>\n<li>Netlify deployment</li>\n</ul>\n<h4>Static Site Generators to check out</h4>\n<ul>\n<li><a href="https://www.gatsbyjs.org/">Gatsby</a> (React)</li>\n<li><a href="https://nextjs.org/">Next</a> (React)</li>\n<li><a href="https://jekyllrb.com/">Jekyll</a> (Liquid, GitHub Pages)</li>\n<li><a href="https://middlemanapp.com/">Middleman</a> (ERB)</li>\n<li><a href="https://gohugo.io/">Hugo</a> (Go)</li>\n<li><a href="https://nuxtjs.org/">Nuxt</a> (Vue)</li>\n<li><a href="https://www.staticgen.com/">Full List of Static Site Generators</a></li>\n</ul>\n<h4>Podcasts &#x26; books mentioned</h4>\n<ul>\n<li>🎧 Syntax - <a href="https://syntax.fm/show/120/gatsby-vs-next">Gatsby vs Next</a></li>\n<li>🎧 Syntax - <a href="https://syntax.fm/show/034/why-static-site-generators-are-awesome">Why Static Site Generators Are Awesome</a></li>\n<li>📘 O\'Reilly - <a href="https://www.oreilly.com/library/view/static-site-generators/9781492048558/">Static Site Generators free eBook</a></li>\n</ul>\n<h4>Helpful resources</h4>\n<ul>\n<li>📖 <a href="https://www.gatsbyjs.org/docs/">Official Gatsby Docs</a></li>\n<li>🛠 <a href="https://www.gatsbyjs.org/starters/?v=2">Starter Templates</a></li>\n<li>🛠 <a href="https://www.gatsbyjs.org/plugins/">Gatsby Plugins</a></li>\n<li>👩‍💻 <a href="https://github.com/MicheleBertoli/css-in-js">List of CSS-In-JS Techniques</a></li>\n<li>🛠 <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/">Styled Components</a></li>\n<li>🛠 <a href="https://github.com/typekit/webfontloader#modules">Web Font Loader</a></li>\n</ul>\n<h4>Presented At</h4>\n<ul>\n<li>JAMStack Cincinnati - June 2019</li>\n</ul>',
    },
  },
  hero:
    "//images.ctfassets.net/sx9v94b5k8eh/2Pnmp6sjLadMjQsWQi8g77/19e440fb36248457a742aa7ce57c859c/style_guide.png?w=1600&q=100&fm=webp",
}

export default BlogPostTemplate
