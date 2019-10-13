import { css } from 'styled-components'

import milkshake from "./milkshake.ttf"

const fontfaces = css`
  @font-face {
    font-family: 'Milkshake';
    src: url(${milkshake}) format('truetype');
    font-weight: 300;
  }
`

export default fontfaces
