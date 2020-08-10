import { css } from "styled-components"

import * as g from "../global/vars"

const fieldMixin = css`
  width: 100%;
  margin: 1rem auto;
  padding: 2rem;
  border: 0.1rem solid ${g.colors.white};
  height: 4.8rem;
  &::placeholder {
    font-style: italic;
    color: ${g.colors.blue500};
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
      border: 0.1rem solid ${g.colors.blue900};
    }
    :focus {
      outline: none;
      border: 0.1rem solid ${g.colors.plum500};
    }
  }

  textarea {
    height: auto;
    min-height: 4.8rem;
  }

  form button {
    margin-top: 1rem;
  }

@media ${g.screen.min.sm} {
  .field-50 {
    width: calc(50% - 1rem);
    &.col-left {
      margin-right: 1rem;
    }
    &.col-right {
      margin-left: 1rem;
    }
  }
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
