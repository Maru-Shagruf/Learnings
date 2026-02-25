import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import App1 from '../ROUTER/App1.jsx'
import Context from '../Context/Context.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    {/* <App1/> */}
    {/* <App/> */}
    {/* <Context/> */}
    </>
  </StrictMode>,
)
