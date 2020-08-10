import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Button from "../button"

import * as g from "../global/vars"

const Form = ({ config }) => {
  const renderInput = opts => (
    <input
      key={opts.name}
      type="text"
      name={opts.name}
      required={opts.required}
      placeholder={opts.label}
      aria-label={opts.label}
      className={opts.className}
    />
  )

  const renderSubmit = opts => (
    <Button key="submit" type="submit">
      {opts.label}
    </Button>
  )

  const renderTextarea = opts => (
    <textarea
      key={opts.name}
      name={opts.name}
      placeholder={opts.label}
      aria-label={opts.label + " text area"}
      rows={opts.rows || 5}
    />
  )

  const fieldMap = {
    button: renderSubmit,
    null: renderInput,
    string: renderInput,
    submit: renderSubmit,
    text: renderTextarea,
    undefined: renderInput,
  }

  return <form>{config.form_fields.map(f => fieldMap[f.type](f))}</form>
}

Form.propTypes = {
  config: PropTypes.object.isRequired,
}

Form.defaultProps = {}

export default Form
