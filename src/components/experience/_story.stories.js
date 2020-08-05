import React from "react"
import ExpCard from "./"
import Workshop from "./workshop"

export default {
  title: "Experience",
}

export const experienceCard = () => (
  <>
    <h1>Professional Experience</h1>
    <div class="background" style={{ margin: "20px" }}>
      <ExpCard />
      <ExpCard />
    </div>
  </>
)
export const workshopCard = () => <Workshop />
