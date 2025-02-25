import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

/**
 * Entry point of the application.
 *
 * This file is responsible for rendering the React application inside the root element.
 * - Wraps the app with `StrictMode` for highlighting potential problems.
 * - Uses `Provider` to connect the Redux store.
 * - Uses `Router` to enable client-side routing.
 * - Imports global styles including Bootstrap and custom CSS.
 */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>
)
