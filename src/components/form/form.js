import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Button from "../button"

import * as g from "../global/vars"
import formStyles from "./styles"

const StyledForm = styled.form`
  ${formStyles};
`

const Form = ({ config, source, ...props }) => {
  const renderInput = opts => (
    <input
      key={opts.contentful_id}
      type={opts.type}
      name={opts.name}
      required={opts.required}
      placeholder={opts.placeholder}
      aria-label={opts.placeholder}
    />
  )

  const renderRadio = opts => (
    <span key={opts.contentful_id}>
      {"Looking for a..."}
      <input
        type={opts.type}
        name={`${opts.name + "name 1"}`}
        id="radio_1"
        value={opts.values[0]}
        required={opts.required}
        placeholder={opts.placeholder}
        aria-label={opts.placeholder}
        defaultChecked
      />
      <label htmlFor="radio_1">{opts.values[0]}</label>
      <input
        type={opts.type}
        name={opts.name}
        id={"radio_2"}
        value={opts.values[1]}
        required={opts.required}
        placeholder={opts.placeholder}
        aria-label={opts.placeholder}
      />
      <label htmlFor={"radio_2"}>{opts.values[1]}</label>
    </span>
  )

  const renderSubmit = opts => (
    <Button key={opts.contenful_id} type={opts.type}>
      {opts.placeholder}
    </Button>
  )

  const renderTextarea = opts => (
    <textarea
      data-autoresize
      key={opts.name}
      name={opts.name}
      placeholder={opts.placeholder}
      aria-label={opts.label + " text area"}
      rows={10}
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
    <StyledForm
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-source" value={`${config.title} - ${source}`} />
      {config.formFields.map(f => fieldMap[f.type](f))}
    </StyledForm>
  )
}

Form.propTypes = {
  config: PropTypes.object.isRequired,
  source: PropTypes.string.isRequired,
}

Form.defaultProps = {}

export default Form
