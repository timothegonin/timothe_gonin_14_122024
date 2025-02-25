import { Helmet, HelmetProvider } from 'react-helmet-async'
import EmployeesTableView from '../features/employeesTable/EmployeesTableView'

/**
 * Page component displaying the list of current employees.
 *
 * This component uses `HelmetProvider` and `Helmet` from `react-helmet-async` to dynamically
 * manage the document title. The main content includes a heading and the `EmployeesTableView`
 * component, which displays the employees' data in a sortable table.
 *
 * @component
 * @returns {JSX.Element} The rendered `CurrentEmployees` page component.
 */
const CurrentEmployees = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Current Employees</title>
      </Helmet>
      <main id="employee-div" className="wrapper">
        <h2 className="my-5">Current Employees</h2>
        <EmployeesTableView />
      </main>
    </HelmetProvider>
  )
}

export default CurrentEmployees
