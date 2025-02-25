import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { createEmployee, hideConfirmationModal } from './employeesSlice'
import { states } from '../../constants'

import Form from 'react-bootstrap/Form'
import InputField from '../../components/InputField'
import Dropdown from '../../components/Dropdown'
import Button from 'react-bootstrap/Button'
import { Modal } from 'modal-react-vite'
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
 * The `CreateEmployeeView` component provides a form for adding a new employee.
 *
 * It includes fields for personal details (first name, last name, date of birth),
 * address information (street, city, state, zip code), and department selection.
 * The form integrates with `react-hook-form` for validation and Redux for state management.
 *
 * @component
 * @returns {JSX.Element} The rendered `CreateEmployeeView` component.
 */
const CreateEmployeeView = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch()

  /**
   * Handles form submission, dispatching an action to create a new employee.
   *
   * @param {Object} data - The submitted form data.
   * @param {string} data.firstName - The first name of the employee.
   * @param {string} data.lastName - The last name of the employee.
   * @param {string} data.dateOfBirth - The birth date of the employee.
   * @param {string} data.startDate - The start date of employment.
   * @param {string} data.street - The street address of the employee.
   * @param {string} data.city - The city where the employee resides.
   * @param {string} data.state - The state abbreviation.
   * @param {string} data.zipCode - The postal code.
   * @param {string} data.department - The department the employee belongs to.
   */
  const onSubmit = (data) => {
    dispatch(createEmployee(data))
    reset()
  }

  /**
   * Retrieves the confirmation modal status from Redux store.
   * @type {boolean}
   */
  const modalStatus = useSelector(
    (state) => state.employees.confirmationModalDisplayed
  )

  /**
   * Closes the confirmation modal.
   */
  const handleCloseModal = () => {
    dispatch(hideConfirmationModal(false))
  }

  return (
    <section>
      <Form id="create-employee" onSubmit={handleSubmit(onSubmit)}>
        {/* First Name */}
        <InputField
          label="First Name"
          id="firstName"
          name="firstName"
          register={register}
          validationRules={{ required: true }}
          error={errors.firstName}
        />
        {/* Last Name */}
        <InputField
          label="Last Name"
          id="lastName"
          name="lastName"
          register={register}
          validationRules={{ required: true }}
          error={errors.lastName}
        />
        {/* Date of Birth */}
        <InputField
          label="Date of Birth"
          id="dateOfBirth"
          name="dateOfBirth"
          type="date"
          register={register}
          validationRules={{ required: true }}
          error={errors.dateOfBirth}
        />
        {/* Start Date */}
        <InputField
          label="Start Date"
          id="startDate"
          name="startDate"
          type="date"
          register={register}
          validationRules={{ required: true }}
          error={errors.startDate}
        />
        {/* FIELDSET ADDRESS */}
        <Fieldset className="address">
          <legend>Address</legend>
          {/* Street */}
          <InputField
            label="Street"
            id="street"
            name="street"
            register={register}
            validationRules={{ required: true }}
            error={errors.street}
          />
          {/* City */}
          <InputField
            label="City"
            id="city"
            name="city"
            register={register}
            validationRules={{ required: true }}
            error={errors.city}
          />
          {/* State */}
          <Dropdown
            label="State"
            id="state"
            name="state"
            register={register}
            validationRules={{ required: true }}
            error={errors.state}
          >
            {states.map((state, index) => (
              <option
                key={`${state.abbreviation}-${index}`}
                value={state.abbreviation}
              >
                {state.name}
              </option>
            ))}
          </Dropdown>
          {/* Zip Code */}
          <InputField
            label="Zip Code"
            id="zipCode"
            name="zipCode"
            type="number"
            register={register}
            validationRules={{ required: true }}
            error={errors.zipCode}
          />
        </Fieldset>
        {/* Department */}
        <Dropdown
          label="Department"
          id="department"
          name="department"
          register={register}
          validationRules={{ required: true }}
          error={errors.department}
        >
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Legal">Legal</option>
        </Dropdown>
        {/* Submit Button */}
        <div className="mt-4 mb-5">
          <Button className="w-100" variant="outline-primary" type="submit">
            Save
          </Button>
        </div>
        {/* Confirmation Modal */}
        <Modal
          buttonTitle="Save"
          title="Employee creation"
          description="Employee created with success!"
          modalStatus={modalStatus}
          onToggle={handleCloseModal}
        />
      </Form>
    </section>
  )
}

export default CreateEmployeeView
