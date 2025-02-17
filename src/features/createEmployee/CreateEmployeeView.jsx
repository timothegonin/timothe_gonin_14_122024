// import { useRef, useState } from 'react'
import styled from 'styled-components'
// import { useDispatch, useSelector } from 'react-redux'
// import { createEmployee, hideConfirmationModal } from './employeesSlice'
// import { states } from '../../constants'

import Form from 'react-bootstrap/Form'
import InputField from '../../components/InputField'
// import CustomDatePicker from '../../components/CustomDatePicker'
// import Dropdown from '../../components/Dropdown'
import Button from 'react-bootstrap/Button'
// import { Modal } from 'modal-react-vite'
import { useForm } from 'react-hook-form'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Fieldset = styled.fieldset`
  margin: 16px 0 5px;
  padding: 0px 12px 36px;
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;

  legend {
    float: none;
    clear: both;
    width: auto;
    margin: 0;
  }
`

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */

/**
 * The `CreateEmployeeView` component represents the view for creating a new employee.
 *
 * This component includes a form with various fields for entering employee information,
 * such as first name, last name, date of birth, and address details.
 *
 * @component
 * @returns {JSX.Element} The rendered CreateEmployeeView component.
 */

const CreateEmployeeView = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }

  // const dispatch = useDispatch()
  // const modalStatus = useSelector(
  //   (state) => state.employees.confirmationModalDisplayed
  // )

  // const [validated, setValidated] = useState(false)
  // const formRef = useRef(null)
  // const [newEmployee, setNewEmployee] = useState({
  //   firstName: '',
  //   lastName: '',
  //   dateOfBirth: '',
  //   startDate: '',
  //   department: '',
  //   street: '',
  //   city: '',
  //   state: '',
  //   zipCode: '',
  // })

  // const handleInputChange = (e) => {
  //   setNewEmployee({ ...newEmployee, [e.target.id]: e.target.value })
  // }

  // const handleDatePickerChange = (key, value) => {
  //   setNewEmployee({ ...newEmployee, [key]: value })
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const form = event.currentTarget
  //   if (form.checkValidity() === false) {
  //     event.stopPropagation()
  //     setValidated(true)
  //     return
  //   }

  //   dispatch(createEmployee(newEmployee))
  //   setValidated(false)
  //   setNewEmployee(
  //     Object.fromEntries(Object.keys(newEmployee).map((key) => [key, '']))
  //   )
  //   formRef.current.reset()
  // }

  // const handleCloseModal = () => {
  //   dispatch(hideConfirmationModal(false))
  // }

  return (
    <section>
      <Form
        // ref={formRef}
        // noValidate
        // validated={validated}
        id="create-employee"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* First Name */}
        <InputField
          label="First Name"
          id="firstName"
          name="firstName"
          // onChange={handleInputChange}
          register={register}
          validationRules={{ required: true }}
        />
        {/* Last Name */}
        <InputField
          label="Last Name"
          id="lastName"
          name="lastName"
          register={register}
          validationRules={{ required: true }}
        />
        {/* Date of Birth */}
        {/* <CustomDatePicker
          label="Date of Birth"
          htmlForLabel="date-of-birth"
          value={newEmployee.dateOfBirth}
          handler={(date) => handleDatePickerChange('dateOfBirth', date)}
        /> */}
        {/* Start Date */}
        {/* <CustomDatePicker
          label="Start Date"
          htmlForLabel="start-date"
          value={newEmployee.startDate}
          handler={(date) => handleDatePickerChange('startDate', date)}
        /> */}
        {/* FIELDSET ADRESS */}
        <Fieldset className="address">
          <legend>Address</legend>
          {/* Street */}
          <InputField
            label="Street"
            id="street"
            name="street"
            register={register}
            validationRules={{ required: true }}
          />
          {/* City */}
          <InputField
            label="City"
            id="city"
            name="city"
            register={register}
            validationRules={{ required: true }}
          />
          {/* State */}
          {/* <Dropdown
            label="State"
            htmlForLabel="state"
            value={newEmployee.state}
            handler={handleInputChange}
            id="state"
          >
            {states.map((state, index) => (
              <option
                key={`${state.abbreviation}-${index}`}
                value={state.abbreviation}
              >
                {state.name}
              </option>
            ))}
          </Dropdown> */}

          {/* Zip Code */}
          <InputField
            label="Zip Code"
            id="zipCode"
            name="zipCode"
            type="number"
            register={register}
            validationRules={{ required: true }}
          />
        </Fieldset>
        {/* Department */}
        {/* <Dropdown
          label="department"
          htmlForLabel="department"
          value={newEmployee.department}
          handler={handleInputChange}
          id="department"
        >
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Legal">Legal</option>
        </Dropdown> */}
        {/* Submit Button */}
        <div className="mt-4 mb-5">
          <Button className="w-100" variant="outline-primary" type="submit">
            Save
          </Button>
        </div>
        {/* Confirmation Modal */}
        {/* <Modal
          buttonTitle="Save"
          title="Employee creation"
          description="Employee created with success !"
          modalStatus={modalStatus}
          onToggle={handleCloseModal}
        /> */}
      </Form>
    </section>
  )
}

export default CreateEmployeeView
