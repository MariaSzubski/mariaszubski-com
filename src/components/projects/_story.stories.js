import React from "react"
// import { select } from "@storybook/addon-knobs"
import Component from "./"
import { Row, Col } from "grid-system"

// Category|Group/Sub-Group
export default {
  title: "Project",
}

export const card = () => (
  <Row>
    <Col md={6} lg={4}>
      <Component skills={["reactjs", "gatsby", "contentful"]} />
    </Col>
    <Col md={6} lg={4}>
      <Component
        title="Mike Albert Fleet Solutions"
        summary="Gatsby Site"
        skills={["gatsby", "reactjs", "dato", "netlify"]}
        hero="//images.ctfassets.net/sx9v94b5k8eh/5xVVYQ49TJZmBTHtqmwwjS/f576431f683d3bb61fcbaba3a3771aca/proj_guitar.png?w=800&q=50&fm=webp"
      />
    </Col>
    <Col md={6} lg={4}>
      <Component
        title="Ruya Coffee Shop"
        summary="Shopify Theme"
        skills={["shopify", "css3"]}
        hero="//images.ctfassets.net/sx9v94b5k8eh/GF8Zlil8X4rJMe5fh6ecB/f131277429faeefab243cd96121d71da/proj_insight.png?w=800&q=50&fm=webp"
      />
    </Col>
    <Col md={6} lg={4}>
      <Component
        title="Kitchen 1883"
        summary="Gatsby Site"
        skills={["gatsby", "reactjs", "storybook"]}
        hero="//images.ctfassets.net/sx9v94b5k8eh/3lxWkZh6yvFUk6McY0V9gp/3e239b3d4e977f5efba6ee9c9695c9e4/showcase.png?w=800&q=50&fm=webp"
      />
    </Col>
    <Col md={6} lg={4}>
      <Component
        title="On The Rhine"
        summary="Gatsby Site"
        skills={["gatsby", "reactjs", "storybook"]}
        hero="//images.ctfassets.net/sx9v94b5k8eh/GF8Zlil8X4rJMe5fh6ecB/f131277429faeefab243cd96121d71da/proj_insight.png?w=800&q=50&fm=webp"
      />
    </Col>
    <Col md={6} lg={4}>
      <Component
        title="The Cincinnati Experience"
        summary="Ruby on Rails Site"
        skills={["ruby", "scss", "bootstrap"]}
        hero="//images.ctfassets.net/sx9v94b5k8eh/5xVVYQ49TJZmBTHtqmwwjS/f576431f683d3bb61fcbaba3a3771aca/proj_guitar.png?w=800&q=50&fm=webp"
      />
    </Col>
    <Col md={6} lg={4}>
      <Component
        title="Spooky Characters"
        summary="CSS Keyframe Animation"
        skills={["css3", "scss"]}
      />
    </Col>
    <Col md={6} lg={4}>
      <Component
        title="Style Guide"
        summary="Documentation Template"
        skills={["php", "javascript", "jquery", "less"]}
      />
    </Col>
    <Col md={6} lg={4}>
      <Component
        title="Guitar Practice"
        summary="Mobile App Prototype"
        skills={["javascript", "less"]}
      />
    </Col>
    <Col md={6} lg={4}>
      <Component
        title="Code Your First Website"
        summary="Beginner HTML/CSS Workshop"
        skills={["html5", "css3", "reveal"]}
      />
    </Col>
    <Col md={6} lg={4}>
      <Component
        title="Insight"
        summary="Standardized Testing Concept"
        skills={["html5", "phonegap", "jquery"]}
      />
    </Col>
  </Row>
)
