import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-grid-system"

import Layout from "../../components/layout"
import ProjectCard from "../../components/projects"

const ProjectsLandingPage = () => (
  <Layout>
    <Container style={{ padding: "0rem" }}>
      <section className="element">
        <hgroup>
          <h1>Recent Projects</h1>
        </hgroup>
        <Row gutterWidth={24}>
          <Col md={6} xl={4}>
            <ProjectCard
              skills={["reactjs", "gatsby", "contentful"]}
              permalink="blog"
            />
          </Col>
          <Col md={6} xl={4}>
            <ProjectCard
              title="Mike Albert Fleet Solutions"
              summary="Gatsby Site"
              skills={["gatsby", "reactjs", "dato", "netlify"]}
              hero="//images.ctfassets.net/sx9v94b5k8eh/5xVVYQ49TJZmBTHtqmwwjS/f576431f683d3bb61fcbaba3a3771aca/proj_guitar.png?w=800&q=50&fm=webp"
              permalink="projects/sample"
            />
          </Col>
          <Col md={6} xl={4}>
            <ProjectCard
              title="Ruya Coffee Shop"
              summary="Shopify Theme"
              skills={["shopify", "css3"]}
              hero="//images.ctfassets.net/sx9v94b5k8eh/GF8Zlil8X4rJMe5fh6ecB/f131277429faeefab243cd96121d71da/proj_insight.png?w=800&q=50&fm=webp"
            />
          </Col>
          <Col md={6} xl={4}>
            <ProjectCard
              title="Kitchen 1883"
              summary="Gatsby Site"
              skills={["gatsby", "reactjs", "storybook"]}
              hero="//images.ctfassets.net/sx9v94b5k8eh/3lxWkZh6yvFUk6McY0V9gp/3e239b3d4e977f5efba6ee9c9695c9e4/showcase.png?w=800&q=50&fm=webp"
            />
          </Col>
          <Col md={6} xl={4}>
            <ProjectCard
              title="On The Rhine"
              summary="Gatsby Site"
              skills={["gatsby", "reactjs", "storybook"]}
              hero="//images.ctfassets.net/sx9v94b5k8eh/GF8Zlil8X4rJMe5fh6ecB/f131277429faeefab243cd96121d71da/proj_insight.png?w=800&q=50&fm=webp"
            />
          </Col>
          <Col md={6} xl={4}>
            <ProjectCard
              title="The Cincinnati Experience"
              summary="Ruby on Rails Site"
              skills={["ruby", "scss", "bootstrap"]}
              hero="//images.ctfassets.net/sx9v94b5k8eh/5xVVYQ49TJZmBTHtqmwwjS/f576431f683d3bb61fcbaba3a3771aca/proj_guitar.png?w=800&q=50&fm=webp"
            />
          </Col>
          <Col md={6} xl={4}>
            <ProjectCard
              title="Spooky Characters"
              summary="CSS Keyframe Animation"
              skills={["css3", "scss"]}
            />
          </Col>
          <Col md={6} xl={4}>
            <ProjectCard
              title="Style Guide"
              summary="Documentation Template"
              skills={["php", "javascript", "jquery", "less"]}
            />
          </Col>
          <Col md={6} xl={4}>
            <ProjectCard
              title="Guitar Practice"
              summary="Mobile App Prototype"
              skills={["javascript", "less"]}
            />
          </Col>
          <Col md={6} xl={4}>
            <ProjectCard
              title="Code Your First Website"
              summary="Beginner HTML/CSS Workshop"
              skills={["html5", "css3", "reveal"]}
            />
          </Col>
          <Col md={6} xl={4}>
            <ProjectCard
              title="Insight"
              summary="Standardized Testing Concept"
              skills={["html5", "phonegap", "jquery"]}
            />
          </Col>
        </Row>
      </section>
    </Container>
  </Layout>
)

export default ProjectsLandingPage
