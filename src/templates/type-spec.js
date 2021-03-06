import React from "react"

import data from "../content/all-skills.yml"

import Layout from "../components/layout"
import { SkillGroup } from "../components/skill"
import { SkillList, SkillTag } from "../components/skill/list"

const TypeSpec = () => (
  <Layout>
    <hgroup>
      <h1>h1 Page Title</h1>
      <h2>h2 Subtitle</h2>
    </hgroup>
    <hgroup>
      <h3>h3 Section Header</h3>
      <h5>
        h5 MOBILE UI DESIGN • JQUERY • PHONEGAP • EDUCATION RESEARCH • USER
        TESTING
      </h5>
    </hgroup>
    <h4>h4 Title</h4>
    <h6>h6 Subtitle</h6>
    <p className="text-lg">
      Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam
      eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi
      erat porttitor ligula, eget lacinia odio sem nec elit.
    </p>
    <p className="text-lg">
      Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
      ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus
      varius blandit sit amet non magna. <a href="#">This is an inline link</a>.
      Maecenas sed diam eget risus varius blandit sit amet non magna.
    </p>
    <p>
      <strong>THIS IS A HEADLINE</strong>
    </p>
    <p>
      Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus
      ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus
      commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
      risus. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis
      interdum. <a href="#">This is an inline link</a> Morbi leo risus, porta ac
      consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis
      in, egestas.
    </p>

    <SkillGroup title="Skills" data={data} />

    <SkillList>
      <SkillTag icon="photoshop" label="Adobe Photoshop" />
      <SkillTag icon="w3c" label="Accessibility" />
      <SkillTag icon="bootstrap" label="Bootstrap" />
      <SkillTag icon="styledcomp" label="Styled Components" />
      <SkillTag icon="invision" />
    </SkillList>

    <h4>Card Headers</h4>
    <h6>Labels</h6>
    <p>
      <strong>Front-End Development Consultant</strong>
    </p>
    <p className="subheadline">Company Name</p>
    <p>
      Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac
      consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis
      euismod semper. Donec id elit non mi porta gravida at eget metus. Donec
      ullamcorper nulla non metus.
    </p>
    <p className="headline">UX Designer</p>
    <p className="subheadline">Company Name // Team</p>
    <p>
      Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
      ligula porta felis euismod semper. Vivamus sagittis lacus vel augue
      laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus,
      nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vestibulum id
      ligula porta felis euismod semper. Praesent commodo cursus magna, vel
      scelerisque nisl consectetur et.
    </p>
  </Layout>
)

export default TypeSpec
