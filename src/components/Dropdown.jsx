import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'

/**
 * A reusable dropdown component built with `react-bootstrap`, providing a styled select input
 * with validation support.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.label - The label text displayed above the dropdown.
 * @param {string} props.id - The unique identifier for the dropdown element.
 * @param {string} props.name - The name attribute for the dropdown, used for form handling.
 * @param {function} props.register - A function from `react-hook-form` to register the input for validation.
 * @param {Object} props.validationRules - The validation rules applied to the dropdown input.
 * @param {React.ReactNode} props.children - The child elements representing the dropdown options.
 * @param {Object} [props.error] - The validation error object, if any, which determines the invalid state.
 * @returns {JSX.Element} The rendered `Dropdown` component.
 */
const Dropdown = ({
  label,
  id,
  name,
  register,
  validationRules,
  children,
  error,
}) => {
  return (
    <Form.Group className="pe-auto">
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <Form.Select
        aria-label={`${label} dropdown menu`}
        role="button"
        id={id}
        isInvalid={!!error}
        {...register(name, validationRules)}
      >
        <option className="text-muted" type="invalid" value="">
          Choose your {label.toLowerCase()}
        </option>
        {children}
      </Form.Select>
      {error && (
        <Form.Control.Feedback type="invalid">
          Please choose a {label.toLowerCase()}.
        </Form.Control.Feedback>
      )}
    </Form.Group>
  )
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  validationRules: PropTypes.object,
  children: PropTypes.node.isRequired,
  error: PropTypes.object,
}

export default Dropdown
