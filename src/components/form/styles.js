import { css } from "styled-components"

import * as g from "../global/vars"

const fieldMixin = css`
  display: block;
  width: 100%;
  margin: 0rem auto 1.6rem auto;
  padding: 1.25rem 1.5rem;
  border: none;
  font-size: 2rem;
  font-weight: 400;
  color: ${g.colors.white};
  border-radius: 0.2rem;
  resize: vertical;
  background-color: #00000044;
  line-height: 1.5;
  &::placeholder {
    color: ${g.colors.gray300};
  }
  &:not(:placeholder-shown):invalid,
  form:invalid & {
    box-shadow: 0rem 0rem 0rem 0.1rem ${g.colors.pink500};
  }
`

const formStyles = css`
  input,
  textarea,
  select {
    ${fieldMixin}
    :focus {
      outline: none;
      box-shadow: 0rem 0rem 0rem 0.2rem ${g.colors.yellow + "44"};
    }
  }

  label, legend {
    font-size: 1.2rem;
    text-transform: uppercase;
    color: white;
    font-weight: 600;
    letter-spacing: 1px;
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
    margin: 2rem 0rem 1rem 0rem;
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
        margin: 0.5rem 0rem;
        white-space: nowrap;
        flex: 0 1 auto;
      }
    }

    span.toggleGrp {
      flex: 1 1 auto;
      min-width: 32.5rem;
      display: flex;
      align-items: center;
      border-radius: 0.3rem;
      overflow: hidden;
      border: 0.1rem solid ${g.colors.green500};

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
          font-size: 2rem;
          font-weight: 400;
          text-transform: capitalize;
          letter-spacing: normal;
          outline: none;
          padding: 0.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          user-select: none;
          color: ${g.colors.gray200};
          background-color: #00000044;
        }

        :checked + span {
          outline: none;
          background: ${g.colors.green300};
          color: black;
        }
      }
    }
  }
`

export { fieldMixin }
export { formStyles as default }
