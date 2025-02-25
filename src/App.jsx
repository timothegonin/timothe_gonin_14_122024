import Header from './components/Header'
import Router from './router/Router'

/**
 * Root component of the application.
 *
 * This component is responsible for rendering the main layout of the application,
 * including the `Header` and the `Router` that manages navigation between pages.
 *
 * @component
 * @returns {JSX.Element} The rendered `App` component.
 */
function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  )
}

export default App
