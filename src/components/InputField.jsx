import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'

const InputField = ({ label, id, type = 'text', value, onChange }) => (
  <Form.Group>
    <Form.Label htmlFor={id}>{label}</Form.Label>
    <Form.Control
      required
      id={id}
      type={type}
      value={value}
      onChange={onChange}
    />
    <Form.Control.Feedback type="invalid">
      Please choose a {label.toLowerCase()}.
    </Form.Control.Feedback>
  </Form.Group>
)

InputField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  handler: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default InputField
