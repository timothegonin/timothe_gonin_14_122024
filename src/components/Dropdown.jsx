import React from 'react'

import Form from 'react-bootstrap/Form'

const Dropdown = ({ label, htmlForLabel, value, handler, children }) => {
  return (
    <Form.Group className="pe-auto">
      <Form.Label htmlFor={htmlForLabel}>{label}</Form.Label>
      <Form.Select
        defaultValue={value}
        onChange={(e) => handler(e.target.value)}
        aria-label={`${label} dropdown menu`}
        role="button"
      >
        <option className="text-muted">
          Choose your {label.toLowerCase()}
        </option>
        {children}
      </Form.Select>
    </Form.Group>
  )
}

export default Dropdown
