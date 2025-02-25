import { Helmet, HelmetProvider } from 'react-helmet-async'
import CreateEmployeeView from '../features/createEmployee/CreateEmployeeView'

/**
 * Page component for creating a new employee.
 *
 * This component wraps the `CreateEmployeeView` inside a `HelmetProvider` to manage
 * the document title dynamically using `Helmet`. The page includes a heading and
 * a form for employee creation.
 *
 * @component
 * @returns {JSX.Element} The rendered `CreateEmployee` page component.
 */
const CreateEmployee = () => {
  return (
    <HelmetProvider>
      <main className="wrapper">
        <Helmet>
          <title>Home - Create Employee</title>
        </Helmet>
        <h2 className="my-5">Create Employee</h2>
        <CreateEmployeeView />
      </main>
    </HelmetProvider>
  )
}

export default CreateEmployee
