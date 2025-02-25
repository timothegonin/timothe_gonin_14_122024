import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'

/**
 * A reusable input field component built with `react-bootstrap` that integrates
 * with form validation via react-hook-form.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.label - The label text displayed above the input field.
 * @param {string} props.id - The unique identifier for the input element.
 * @param {string} props.name - The name attribute of the input element, used for form handling.
 * @param {string} [props.type='text'] - The type of the input field (e.g., 'text', 'email', 'password').
 * @param {function} props.register - The registration function from react-hook-form used to link the input.
 * @param {Object} [props.validationRules] - The validation rules for the input field.
 * @param {Object} [props.error] - The error object containing validation errors for this field.
 * @returns {JSX.Element} The rendered `InputField` component.
 */
const InputField = ({
  label,
  id,
  name,
  type = 'text',
  register,
  validationRules,
  error,
}) => (
  <Form.Group>
    <Form.Label htmlFor={id}>{label}</Form.Label>
    <Form.Control
      aria-label={`${label} input`}
      id={id}
      type={type}
      isInvalid={!!error}
      {...register(name, validationRules)}
    />
    {error && (
      <Form.Control.Feedback type="invalid">
        Please choose a {label.toLowerCase()}.
      </Form.Control.Feedback>
    )}
  </Form.Group>
)

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  register: PropTypes.func.isRequired,
  validationRules: PropTypes.object,
  error: PropTypes.object,
}

export default InputField
