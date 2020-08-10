import { css, createGlobalStyle } from "styled-components"

import { fonts, colors, screen } from "./vars"
import normalize from "./ref/normalize"
import fontfaces from "./ref/fonts"

const global_styles = css`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    color: ${colors.white};
    font-family: ${fonts.nunito};
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    ${"" /* -webkit-font-smoothing: antialiased; */}

    position: relative;
    background-color: ${colors.white};

    &:before {
      content: '';
      width: 100vw;
      height: 100vh;
      position: fixed;
      z-index: -1;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: 100vw 100vh;
      ${"" /* background: linear-gradient( 150deg, ${colors.black} 8%, ${colors.gray700} 100% ); */}
      ${"" /* background: linear-gradient( 150deg, ${colors.black} 8%, ${colors.green500}  100% ); */}
      background: linear-gradient( 150deg, ${colors.black} 8%, ${colors.blue500} 100% );
      ${"" /* background: linear-gradient( 150deg, ${colors.black} 8%, ${colors.grape500} 100% ); */}
      ${"" /* background: linear-gradient( 150deg, ${colors.black} 8%, ${colors.plum500} 100% ); */}
      ${"" /* background: linear-gradient( 150deg, ${colors.gray300} 8%, ${colors.white} 100% ); */}
      ${"" /* background: linear-gradient( 150deg, ${colors.pink500} 0%, ${colors.plum500} 100% ); */}
      ${"" /* background: linear-gradient( 150deg, ${colors.yellow} 0%, ${colors.plum300} 100% ); */}
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-size: 16px;
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 1.5;
    ${"" /* opacity: 0; */}
    &.loaded{
      opacity: 1;
      transition: opacity 0.4s 0.2s ease-in;
    }
  }

  strong {
    font-weight: 700;
    color: ${colors.yellow};
    .highlighted p:first-of-type & {
      font-weight: inherit;
    }
  }

  a {
    text-decoration: none;
    position: relative;
    color: ${colors.white};
    font-weight: 600;

    p &:before,
    p &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 0.2rem;
      bottom: 0;
      left: 0;
    }

    p &:before {
      background: ${colors.blue300};
      background: ${colors.blue300 + "80"};
    }

    p &:after {
      background: ${colors.blue200 + "AA"};
      transform: scaleX(0);
      transform-origin: bottom center;
      transition: transform .2s ease-out;
    }

    p &:hover:after {
      transform: scaleX(1);
    }
  }

  img,
  svg {
    display: inline-block;
    vertical-align: middle;
  }

  ul,
  li {
    list-style-type: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    margin: 0rem;
  }

  hgroup,
  h1.pad,
  h2.pad,
  h3.pad,
  h4.pad,
  h5.pad,
  h6.pad,
  .highlighted h4 {
    margin-bottom: 1.25em;
  }

  h1 {
    font-family: ${fonts.milkshake};
    font-weight: 200;
    font-size: 4.8rem;
    text-align: center;
    color: ${colors.green200};
    text-shadow: 0.2rem 0.2rem 0rem ${colors.black};
  }

  h2 {
    font-weight: 400;
    font-size: 2rem;
    text-transform: none;
    text-shadow: none;
    letter-spacing: 0.02rem;
    text-align: center;
    text-shadow: 0.2rem 0.3rem 0rem ${colors.black};
    margin-top: 2px;
    margin-bottom: 12px;
  }

  h3 {
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;
    font-size: 3.6rem;
    text-shadow: 0.2rem 0.3rem 0rem ${colors.black};
    padding-top: 1rem;
  }

  h4 {
    font-weight: 800;
    font-size: 2rem;
  }

  h5 {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${colors.yellow};
    text-transform: uppercase;
    letter-spacing: 0.02rem;
    text-align: center;
  }

  h6,
  .h6 {
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 1.6rem;
    color: ${colors.gray200};
    text-transform: uppercase;
    letter-spacing: 0.02rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 3rem;
    line-height: 140%;
  }

  *.element{
    margin: 8rem 0rem;
    :first-of-type {
      margin: 2rem 0rem;
    }
  }

  *.element-minor{
    margin: 4rem 0rem;
  }

  .background {
    background-color: ${colors.blue900 + "55"};
    box-shadow: 0px 0.4rem 1rem rgba(0,0,20,.2);
    border-radius: 0.5rem;
    * {
      text-shadow: 1px 1px 2px black;
    }

    > h4 {
      padding: 2rem 3rem 1rem 3rem;
    }
  }

  *.text-sm,
  *.text-sm * {
    font-size: 1.3rem;
  }

  .highlighted p:first-of-type,
  *.text-lg,
  .highlighted p:first-of-type,
  *.text-lg * {
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 145%;
  }

  *.text-light,
  *.text-light *  {
    color: ${colors.gray700};
  }

  *.text-center,
  *.text-center *  {
    text-align: center;
  }

  @media ${screen.max.md} {
    html:before{
      height: 120vh;
      background-size: 100vw 120vh;
    }
    body {
      font-size: 1.6rem;
      line-height: 1.4;
    }
    .highlighted p:first-of-type,
    *.text-lg,
    .highlighted p:first-of-type,
    *.text-lg * {
      font-size: 1.8rem;
    }
  }

`
const all_styles = css`
  ${normalize}
  ${fontfaces}
  ${global_styles}
`

const GlobalStyles = createGlobalStyle`${all_styles}`

export default GlobalStyles
