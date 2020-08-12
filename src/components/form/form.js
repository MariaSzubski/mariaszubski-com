import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Button from "../button"

import * as g from "../global/vars"
import formStyles from "./styles"

const StyledForm = styled.form`
  ${formStyles};
`

const Form = ({ config }) => {
  const renderInput = opts => (
    <input
      key={opts.name}
      type={opts.type}
      name={opts.name}
      required={opts.required}
      placeholder={opts.placeholder}
      aria-label={opts.placeholder}
      className={`${opts.className + " background"}`}
    />
  )

  const renderRadio = opts => (
    <>
      {"Looking for a..."}
      <input
        key={opts.name}
        type={opts.type}
        name={opts.name}
        id="radio1"
        value="radio1"
        required={opts.required}
        placeholder={opts.placeholder}
        aria-label={opts.placeholder}
        className={`${opts.className + " background"}`}
        checked
      />
      <label htmlFor="radio1">Developer</label>
      <input
        key={opts.name}
        type={opts.type}
        name={opts.name}
        id="radio2"
        value="radio2"
        required={opts.required}
        placeholder={opts.placeholder}
        aria-label={opts.placeholder}
        className={`${opts.className + " background"}`}
      />
      <label htmlFor="radio2">Guest Speaker</label>
    </>
  )

  const renderSubmit = opts => (
    <Button key="submit" to="/" type="submit">
      {opts.placeholder}
    </Button>
  )

  const renderTextarea = opts => (
    <textarea
      key={opts.name}
      name={opts.name}
      placeholder={opts.placeholder}
      aria-label={opts.label + " text area"}
      rows={opts.rows || 5}
      className={`${opts.className + " background"}`}
    />
  )

  const fieldMap = {
    input: renderInput,
    email: renderInput,
    radio: renderRadio,
    textarea: renderTextarea,
    button: renderSubmit,
    submit: renderSubmit,
    null: renderInput,
    undefined: renderInput,
  }

  return (
    <StyledForm>{config.form_fields.map(f => fieldMap[f.type](f))}</StyledForm>
  )
}

Form.propTypes = {
  config: PropTypes.object.isRequired,
}

Form.defaultProps = {}

export default Form
