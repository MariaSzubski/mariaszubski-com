import React from "react"
import { select } from "@storybook/addon-knobs"
import Component from "./"

// Category|Group/Sub-Group
export default {
  title: "Button",
}

export const button = () => {
  let color = select("Color", ["green", "plum", "white"], "green")
  return (
    <Component to="/" color={color} activeClassName="active">
      Let&apos;s Connect
    </Component>
  )
}
