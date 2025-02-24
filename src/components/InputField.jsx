import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'

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
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  register: PropTypes.func,
  validationRules: PropTypes.objectOf(PropTypes.bool),
  error: PropTypes.object,
}

export default InputField
