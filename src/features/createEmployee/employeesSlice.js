import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
// import { data } from '../../MOCK/example-data'

/**
 * Redux slice for managing employee data and confirmation dialog display.
 * This module handles adding new employees and toggling the confirmation modal.
 *
 * @module employeesSlice
 */

/**
 * @typedef {Object} Employee
 * @property {string} id - Unique identifier for the employee.
 * @property {string} firstName - Employee's first name.
 * @property {string} lastName - Employee's last name.
 * @property {string} dateOfBirth - Employee's date of birth.
 * @property {string} startDate - Employee's employment start date.
 * @property {string} street - Employee's street address.
 * @property {string} city - Employee's city of residence.
 * @property {string} state - Employee's state abbreviation.
 * @property {string} zipCode - Employee's zip code.
 * @property {string} department - Employee's department.
 */

/**
 * Initial state for the employees slice.
 *
 * @type {Object}
 * @property {Employee[]} currentEmployees - List of currently registered employees.
 * @property {boolean} confirmationModalDisplayed - Indicates whether the confirmation dialog should be displayed.
 */
const initialState = {
  currentEmployees: JSON.parse(localStorage.getItem('employees')) || [],
  // currentEmployees: [...data],
  confirmationModalDisplayed: false,
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    /**
     * Adds a new employee to the store and updates local storage.
     * Also triggers the confirmation modal.
     *
     * @param {Object} state - The current state.
     * @param {Object} action - The dispatched action.
     * @param {Employee} action.payload - The employee data from the form submission.
     */
    createEmployee: (state, action) => {
      const newEmployee = {
        id: uuidv4(),
        ...action.payload,
      }
      state.currentEmployees.push(newEmployee)
      localStorage.setItem('employees', JSON.stringify(state.currentEmployees))
      employeesSlice.caseReducers.showConfirmationModal(state)
    },

    /**
     * Displays the confirmation modal.
     *
     * @param {Object} state - The current state.
     */
    showConfirmationModal: (state) => {
      state.confirmationModalDisplayed = true
    },

    /**
     * Hides the confirmation modal.
     *
     * @param {Object} state - The current state.
     */
    hideConfirmationModal: (state) => {
      state.confirmationModalDisplayed = false
    },
  },
})

export const { createEmployee, showConfirmationModal, hideConfirmationModal } =
  employeesSlice.actions
export default employeesSlice.reducer
