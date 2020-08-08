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

const Section = styled.section`
  img {
    display: inline-block;
    max-width: 48%;
    margin: auto;
  }
`

const BlogPostTemplate = props => {
  let blogDate = new Date("2020-08-07")
  let trans = blogDate.toDateString()
  return (
    <Layout>
      <Grid fluid>
        <Row around="md">
          <Col xl={7}>
            <Section className="element">
              <hgroup>
                <h1>{props.title}</h1>
                <h6>Maria Szubski</h6>
                <h6>{trans}</h6>
              </hgroup>
              <HTML content={props.content} className="" />
            </Section>
            <section className="element">🔗 Share Links</section>
            <section className="element">
              🏷 Tags, Workshop, Gatsby, React, JavaScript
            </section>
            <section className="element">💁🏻‍♀️ Book me for a talk</section>
          </Col>
        </Row>
      </Grid>
    </Layout>
  )
}

BlogPostTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.object,
  hero: PropTypes.string,
  // related posts
  // tags
}

BlogPostTemplate.defaultProps = {
  title: "Guest Speaker & Event Organizer",
  content: {
    childMarkdownRemark: {
      html:
        '<h3>My Role As Guest Speaker</h3>\n<p>Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n<h5>Tech Talks I&#39;ve Led</h5>\n<ul>\n<li>👩🏻‍💻 Intro to HTML &#x26; CSS <em>(Jan 2018)</em> ⏱ 8 hours</li>\n<li>👩🏻‍💻 Intro to HTML &#x26; CSS <em>(Apr 2018)</em> ⏱ 8 hours</li>\n<li>☕️ Code &#x26; Coffee: HTML Study Session <em>(Apr 2018)</em> ⏱ 2 hours</li>\n<li>☕️ Code &#x26; Coffee: Event Organizer Training <em>(May 2018)</em> ⏱ 1 hour</li>\n<li>⚡️ GDI 100k Celebration: My Coding Journey <em>(Jul 2018)</em> ⏱ 5-10 min</li>\n<li>👩🏻‍💻 Getting Started with GatsbyJS <em>(Jun 2019)</em> ⏱ 90 min</li>\n</ul>\n<p><img src="//images.ctfassets.net/sx9v94b5k8eh/7mFaS9QYyGzpP97vFjjfaK/4322cab724393723f3f78a688ca85a30/28433952_150548205639561_2678838786904817664_n.jpg" alt="Instructor - 1">\n<img src="//images.ctfassets.net/sx9v94b5k8eh/5LLZYP7qWB7Lb7UknpvgoQ/1c07ab5b6343c2eb357db8908caaf4fc/31108414_190959121542602_5830512954377764864_n.jpg" alt="Instructor - 2"></p>\n<h3>My Role As Organizer</h3>\n<p>Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n<h5>Tech Workshops I&#39;ve Organized</h5>\n<ul>\n<li>💻 Social Media 2.0 Workshop <em>(Aug 2017)</em></li>\n<li>💻 Intro to Python <em>(Sep 2017)</em></li>\n<li>💻 Intro to HTML &#x26; CSS <em>(Oct 2017)</em></li>\n<li>💻 Bootstrap Workshop <em>(Feb 2018)</em></li>\n<li>💻 Intro to JavaScript <em>(Mar 2018)</em></li>\n<li>☕️ Code &#x26; Coffee: WordPress.org <em>(May 2018)</em></li>\n<li>☕️ Code &#x26; Coffee: Study Session <em>(Jul 2018)</em></li>\n<li>💻 Web VR Workshop <em>(Jul 2018)</em></li>\n<li>💻 Social Media Workshop <em>(Aug 2018)</em></li>\n<li>☕️ Code &#x26; Coffee: Cryptocurrency <em>(Aug 2018)</em></li>\n<li>☕️ Code &#x26; Coffee: Hacktoberfest <em>(Oct 2018)</em></li>\n<li>💻 App Building with Salesforce <em>(Nov 2018)</em></li>\n</ul>\n<p><img src="//images.ctfassets.net/sx9v94b5k8eh/mjBxo4Z31e6XxXVeW1fFm/54971dd5df15ebab2f015f9d5826f9ca/33432642_184275752396416_2333440794020544512_n.jpg" alt="Code &#x26; Coffee"></p>\n<h3>My Role As Teaching Assistant</h3>\n<p>Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n<h5>Tech Workshops I&#39;ve Assisted</h5>\n<ul>\n<li>💻 Intro to HTML &#x26; CSS <em>(Nov 2015)</em></li>\n<li>💻 Intermediate HTML &#x26; CSS <em>(Mar 2016)</em></li>\n<li>💻 Intro to HTML &#x26; CSS <em>(Jul 2016)</em></li>\n<li>💻 Intro to HTML &#x26; CSS <em>(Jan 2017)</em></li>\n<li>💻 Intro to HTML &#x26; CSS <em>(Apr 2017)</em></li>\n<li>💻 Intro to HTML &#x26; CSS <em>(Oct 2017)</em></li>\n</ul>\n<p><img src="//images.ctfassets.net/sx9v94b5k8eh/16hX24Ag4gHqCbJFXDj0Ge/40ad0be12645863ff2b8536a303270d2/29738866_2031117986963112_3067282110260707328_n.jpg" alt="TA -1"></p>\n<p><img src="//images.ctfassets.net/sx9v94b5k8eh/5cZH9H0ixT4LaqXpciqnVp/b04acf0dc5d5574db354b09e269e240f/37368505_2256003071096460_5655430317658341376_o.jpg" alt="37368505 2256003071096460 5655430317658341376 o"></p>\n<h3><a href="/contact">💁🏻‍♀️ Book me for a talk</a></h3>',
    },
  },
  hero:
    "//images.ctfassets.net/sx9v94b5k8eh/2Pnmp6sjLadMjQsWQi8g77/19e440fb36248457a742aa7ce57c859c/style_guide.png?w=1600&q=100&fm=webp",
}

export default BlogPostTemplate
