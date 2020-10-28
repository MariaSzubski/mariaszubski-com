import { css, createGlobalStyle } from "styled-components"

import { fonts, colors, screen } from "./vars"
import normalize from "./ref/normalize"
import fontfaces from "./ref/fonts"

const global_styles = css`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    ${"" /* color: ${colors.gray700}; */}
    color: ${colors.white};
    font-family: ${fonts.nunito};
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    background: ${colors.black};
    position: relative;

    &:before {
      content: '';
      width: 100vw;
      height: 100%;
      position: fixed;
      z-index: -1;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: 100vw 100%;
      background-position: center center;
      -webkit-background-size: cover;
      background-size: cover;
      background: linear-gradient( 150deg, ${colors.black} 8%, ${colors.gray700} 100% );
      ${"" /* background: linear-gradient( 150deg, ${colors.black} 8%, ${colors.green500}  100% ); */}
      ${"" /* background: linear-gradient( 150deg, ${colors.black} 8%, ${colors.green600}  100% ); */}
      ${"" /* background: linear-gradient( 150deg, ${colors.black} 8%, ${colors.green700}  100% ); */}
      ${"" /* background: linear-gradient( 150deg, ${colors.black} 8%, ${colors.blue500} 100% ); */}
      ${"" /* background: linear-gradient( 150deg, ${colors.black} 8%, ${colors.blue700} 100% ); */}
      ${"" /* background: linear-gradient( 150deg, ${colors.black} 8%, ${colors.grape500} 100% ); */}
      ${"" /* background: linear-gradient( 150deg, ${colors.black} 8%, ${colors.plum500} 100% ); */}
      ${"" /* background: linear-gradient( 150deg, ${colors.white} 8%, #FFFFFF 100% ); */}
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
    font-size: 23px;
    font-size: 2.1rem;
    font-weight: 400;
    line-height: 1.55;
    ${"" /* color: ${colors.gray700}; */}
    ${"" /* color: ${"#FFFFFF" + "EE"}; */}
    color: ${ colors.gray100};
    ${"" /* text-shadow: 0.1rem 0.1rem 0.2rem ${colors.black}; */}
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
    ${"" /* position: relative; */}
    color: ${colors.blue200};
    text-shadow: 1px 1px 3px ${colors.blue900};
    &:hover {
      text-decoration: underline;
    }

    ${"" /* p &:before,
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
    } */}
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
    font-size: 5.6rem;
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
    text-transform: uppercase;
    font-size: 3.6rem;
    padding-top: 1rem;
    text-align: left;
    font-weight: 400;
    color: white;
    margin-bottom: 3rem;

    @media ${screen.max.lg} {
      font-size: 3.4rem;
    }

    @keyframes grow {
      0% {
        transform: scaleX(0);
      }
      100% {
        transform: scaleX(1);
      }
    }

    &:after {
      content: "";
      display: block;
      width: 8rem;
      transform: scaleX(0);
      transform-origin: left;
      height: 5px;
      background-color: ${colors.green300};
      border-radius: 0.2rem;
      overflow: hidden;

      animation-name: grow;
      animation-duration: 0.4s;
      animation-timing-function: ease-out;
      animation-delay: 1.1s;
      animation-fill-mode: forwards;
    }
  }

  h4 {
    font-weight: 700;
    font-size: 2.2rem;
    ${"" /* color: ${colors.yellow}; */}
  }

  h5 {
    font-weight: 800;
    font-size: 1.5rem;
    ${"" /* color: ${colors.yellow}; */}
    text-transform: uppercase;
    letter-spacing: 0.02rem;
    text-align: center;
  }

  h6,
  .h6 {
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1.6rem;
    color: ${colors.gray200};
    text-transform: uppercase;
    letter-spacing: 0.02rem;
  }

  p {
    margin: 0;
      margin-bottom: 2.8rem;
    ${"" /* line-height: 140%; */}
  }

  *.element{
    margin: 12rem 0rem;
    :first-of-type {
      margin: 2rem 0rem;
    }
  }

  *.element-minor{
    ${"" /* margin: 4rem 0rem; */}
  }

  .background {
    background-color: ${colors.white};
    color: ${colors.blue700};

    ${"" /* background-color: #00000033; */}
    ${"" /* background-color: ${colors.blue900 + ""}; */}
    box-shadow: 0px 0.4rem 1rem rgba(0,0,20,.2);
    border-radius: 0.4rem;
    * {
      ${"" /* text-shadow: 1px 1px 2px #000000DD; */}
    }

    > h4 {
      padding: 2rem 3rem 1rem 3rem;
    }
  }

  *.text-sm,
  *.text-sm * {
    font-size: 1.3rem;
  }

  *.text-md,
  *.text-md * {
    font-size: 1.7rem;
    line-height: 1.5;
  }

  .highlighted p:first-of-type,
  *.text-lg,
  .highlighted p:first-of-type,
  *.text-lg * {
    font-size: 3rem;
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
      line-height: 1.45;
    }

    h1 {
      font-size: 4.8rem;
    }
    *.text-md,
    *.text-md * {
      font-weight: 400;
      font-size: 1.55rem;
      line-height: 1.4;
    }

    .highlighted p:first-of-type,
    *.text-lg,
    .highlighted p:first-of-type,
    *.text-lg * {
      font-size: 2.3rem;
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
