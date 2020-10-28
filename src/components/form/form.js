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
    <label htmlFor={opts.name} key={opts.contentful_id}>
      <span aria-hidden>{opts.placeholder}</span>
      <input
        type={opts.type === "input" ? "text" : opts.type}
        name={opts.name}
        required={opts.required}
        placeholder=" "
        aria-label={opts.placeholder}
      />
    </label>
  )

  const renderRadio = opts => (
    <fieldset key={opts.contentful_id} className="toggle">
      <span className="toggleField" aria-labelledby="groupLabel">
        <legend id="groupLabel" aria-hidden>{opts.placeholder}</legend>
        <span className="toggleGrp" tabIndex="-1">
          <label tabIndex="-1">
            <input
              type={opts.type}
              name={`${opts.name}`}
              value={opts.values[0]}
              required={opts.required}
              defaultChecked
            />
            <span role="radio" aria-checked="true" tabIndex="0" defaultChecked>
              {opts.values[0]}
            </span>
          </label>
          <label tabIndex="-1">
            <input
              type={opts.type}
              name={opts.name}
              value={opts.values[1]}
              required={opts.required}
            />
            <span
              role="radio"
              aria-checked="false"
              tabIndex="-1"
            >
              {opts.values[1]}
            </span>
          </label>
        </span>
      </span>
    </fieldset>
  )

  const renderSubmit = opts => (
    <Button key={opts.contentful_id} type={opts.type} color="blue" fill>
      {opts.placeholder}
    </Button>
  )

  const renderTextarea = opts => (
    <label key={opts.contentful_id}>
      <span aria-hidden>{opts.name}</span>
      <textarea
        data-autoresize
        name={opts.name}
        placeholder={opts.placeholder}
        aria-label={opts.name + " text area"}
        rows={7}
      />
    </label>
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
      name={`${config.title}`.replace(/\s/g, "-").toLowerCase()}
      aria-label={config.title}
      method="POST"
      autoComplete="off"
      data-netlify="true"
      netlify-honeypot="bot-field"
      key={`${config.contentful_id}-${source}`}
      {...props}
    >
      {/* This field's `value` must match the Form's `name` attribute */}
      <input
        type="hidden"
        name="form-name"
        value={`${config.title}`.replace(/\s/g, "-").toLowerCase()}
        key={`${config.contentful_id}-${source}-hidden`}
      />
      <input
        type="hidden"
        name="form-source"
        value={`${source}`.replace(/\s/g, "-").toLowerCase()}
      />
      <p style={{ display: "none" }}>
        <label>
          Human verification <input name="bot-field" />
        </label>
      </p>
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
