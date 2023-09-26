import React from 'react'
// import React, { forwardRef } from 'react'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
// import 'react-datepicker/dist/react-datepicker.min.css'
import Form from 'react-bootstrap/Form'
// import { format } from 'date-fns'

/**
 * The `CustomDatePicker` component is a custom date picker component built on top of
 * the `react-datepicker` library. It provides a styled input field for selecting dates.
 *
 * @component
 * @param {string} label - The label text for the date picker input.
 * @param {string} htmlForLabel - The `htmlFor` attribute for the associated label.
 * @param {string} value - The initial date value in "MM-dd-yyyy" format (e.g., "09-18-2023").
 * @param {function} handler - A callback function that is called when a date is selected.
 *   It receives the selected date in "MM-dd-yyyy" format as an argument.
 * @returns {JSX.Element} The rendered CustomDatePicker component.
 */
const CustomDatePicker = ({ label, htmlForLabel, value, handler }) => {
  /**
   * The `CustomInput` component is a custom input field for the date picker.
   * It renders a Form.Group containing a Form.Label, Form.Control input, and validation feedback.
   *
   * @param {object} props - The component's props.
   * @param {string} props.value - The input value (date).
   * @param {function} props.onClick - The click event handler.
   * @param {React.Ref} ref - A ref forwarded by the date picker.
   * @returns {JSX.Element} The rendered CustomInput component.
   */

  return (
    <Form.Group>
      <Form.Label htmlFor={htmlForLabel}>{label}</Form.Label>
      <Form.Control
        required
        type="date"
        id={htmlForLabel}
        placeholder="month/day/year"
        value={value}
        onChange={(e) => handler(e.target.value)}
        aria-label={`${label} input`}
      />
      <Form.Control.Feedback type="invalid">
        Please choose a {label.toLowerCase()}.
      </Form.Control.Feedback>
    </Form.Group>
  )
}

export default CustomDatePicker
