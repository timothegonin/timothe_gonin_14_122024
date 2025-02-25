import { useSelector } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import { SortableTable } from 'sortable-table-react'

/**
 * Component for displaying a sortable table of employee data.
 * If no employees are available, a loading spinner is shown.
 *
 * @component
 * @returns {JSX.Element} - The rendered `EmployeesTableView` component.
 */
const EmployeesTableView = () => {
  /**
   * Retrieves the list of employees from the Redux store.
   * @type {Employee[]}
   */
  const employees = useSelector((state) => state.employees.currentEmployees)

  /**
   * Table headers defining the columns displayed in the sortable table.
   * @type {string[]}
   */
  const tableHeadsList = [
    'First Name',
    'Last Name',
    'Start Date',
    'Department',
    'Date of Birth',
    'Street',
    'City',
    'State',
    'Zip Code',
  ]

  return employees.length === 0 ? (
    <Spinner animation="border" role="status" variant="primary">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <SortableTable data={employees} tableHeads={tableHeadsList} />
  )
}

export default EmployeesTableView
