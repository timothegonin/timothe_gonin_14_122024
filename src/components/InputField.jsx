import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'

// const InputField = ({ label, id, type = 'text', value, onChange, ref }) => (
const InputField = ({
  label,
  id,
  name,
  type = 'text',
  register,
  validationRules,
}) => (
  <Form.Group>
    <Form.Label htmlFor={id}>{label}</Form.Label>
    <Form.Control
      aria-label={`${label} input`}
      id={id}
      type={type}
      {...register(name, validationRules)}
      // ref={ref}
    />
    <Form.Control.Feedback type="invalid">
      Please choose a {label.toLowerCase()}.
    </Form.Control.Feedback>
  </Form.Group>
)

InputField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  register: PropTypes.func,
  validationRules: PropTypes.objectOf(PropTypes.bool),
}

export default InputField
