import { css } from "styled-components"

import * as g from "../global/vars"

const fieldMixin = css`
  display: block;
  width: 100%;
  margin: 1rem auto;
  padding: 1.25rem 1.5rem;
  border: none;
  font-size: 1.8rem;
  font-weight: 400;
  color: black;
  border-radius: 0.4rem;
  box-shadow: 0rem 0rem 1rem rgba(0,0,20,.6);
  resize: none;
  &::placeholder {
  color: ${g.colors.gray300};
  }
  &.invalid {
    box-shadow: 0rem 0rem 0rem 0.2rem ${g.colors.pink500};
  }
`

const formStyles = css`
  form {
    ${"" /* padding: 1rem 0rem; */}
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
  }

  form button {
    margin-top: 1rem;
  }

  ${"" /* Bug fix for react-flexbox-grid */}
  @media ${g.screen.max.md} {
    form  {
      ${"" /* font-size: 1.6rem; */}
      ${"" /* padding: 0rem 0.7rem; */}
    }
  }
}
`

export { fieldMixin }
export { formStyles as default }
