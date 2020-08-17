import { css } from "styled-components"

import * as g from "../global/vars"

const fieldMixin = css`
  display: block;
  width: 100%;
  margin: 1.6rem auto;
  padding: 1.25rem 1.5rem;
  border: none;
  font-size: 2rem;
  font-weight: 400;
  color: black;
  border-radius: 0.4rem;
  box-shadow: 0rem 0rem 1rem rgba(0, 0, 20, 0.6);
  resize: none;
  &::placeholder {
    color: ${g.colors.gray300};
  }
  &:not(:placeholder-shown):invalid,
  form:invalid & {
    box-shadow: 0rem 0rem 0rem 0.2rem ${g.colors.pink500};
  }
`

const formStyles = css`
  input,
  textarea,
  select {
    ${fieldMixin}
    :focus {
      outline: none;
      box-shadow: 0rem 0rem 0rem 0.2rem ${g.colors.yellow};
    }
  }

  textarea {
    height: auto;
  }

  form button {
    margin-top: 1rem;
  }

  fieldset.toggle {
    border: none;
    padding: 0rem;
    font-size: 2rem;
    outline: none;

    span.toggleField {
      display: flex;
      flex-flow: wrap;
      align-items: center;
      outline: none;

      legend {
        padding-left: 0rem;
        padding-right: 2rem;
        min-height: 3.4rem;
        white-space: nowrap;
        flex: 0 1 auto;
      }
    }

    span.toggleGrp {
      flex: 1 1 auto;
      min-width: 32.5rem;
      display: flex;
      align-items: center;
      border-radius: 0.4rem;
      overflow: hidden;
      border: 0.1rem solid ${g.colors.gray500};
      box-shadow: 0rem 0rem 1rem rgba(0, 0, 20, 0.6);

      label {
        flex: 1 0 auto;
        &:hover {
          cursor: pointer;
        }
      }

      input {
        overflow: hidden;
        height: 0px;
        padding: 0px;
        margin: 0px;
        :focus,
        :focus * {
          outline: none;
          box-shadow: none;
        }
        + span {
          outline: none;
          padding: 0.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          user-select: none;
          color: ${g.colors.gray200};
          text-shadow: 0rem 0.1rem 0.1rem ${g.colors.black + "C0"};
        }

        :checked + span {
          outline: none;
          background: ${g.colors.green300};
          color: white;
        }
      }
    }
  }
`

export { fieldMixin }
export { formStyles as default }
