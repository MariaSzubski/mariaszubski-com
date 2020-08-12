import { css } from "styled-components"

import * as g from "../global/vars"

const fieldMixin = css`
  width: 100%;
  margin: 1rem auto;
  padding: 3rem;
  border: none;
  height: 5.2rem;
  font-size: 2.2rem;
  font-weight: 400;
  color: ${g.colors.white};
  &::placeholder {
  color: ${g.colors.gray300};
  }
  &.invalid {
    box-shadow: 0rem 0rem 0rem 0.2rem ${g.colors.pink500};
  }
`

const formStyles = css`
  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem 0rem;
  }

  input,
  textarea,
  select {
    ${fieldMixin}
    :hover {
      ${"" /* border: 0.1rem solid ${g.colors.blue900}; */}
    }
    :focus {
      outline: none;
      ${"" /* border: 0.1rem solid ${g.colors.gray500}; */}
    }
  }

  textarea {
    height: auto;
    min-height: 4.8rem;
  }

  form button {
    margin-top: 1rem;
  }

  ${"" /* Bug fix for react-flexbox-grid */}
  @media ${g.screen.max.md} {
    form  {
      font-size: 1.6rem;
      padding: 0rem 0.7rem;
    }
  }
}
`

export { fieldMixin }
export { formStyles as default }
