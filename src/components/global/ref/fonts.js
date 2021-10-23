import { css } from "styled-components"

import milkshake from "./milkshake.ttf"

const fontfaces = css`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap');
  @font-face {
    font-family: "Milkshake";
    src: url(${milkshake}) format("truetype");
    font-weight: 300;
    font-display: block;
  }
`

export default fontfaces
