import React from "react"
// import { select } from "@storybook/addon-knobs"
import Component from "./"

// Category|Group/Sub-Group
export default {
  title: "Title",
}

export const labelA = () => {
  let knob = select("Color", ["green", "plum", "white"], "green")
  return <Component attr={knob}>Let&apos;s Connect</Component>
}

export const labelB = () => <Component>Let&apos;s Connect</Component>
