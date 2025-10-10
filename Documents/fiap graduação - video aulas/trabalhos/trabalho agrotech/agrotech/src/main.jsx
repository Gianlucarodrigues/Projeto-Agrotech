import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './src/componentes/header.jsx'
import Form from './components/form.jsx'
import Login from './src/pages/login.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Form/>
    <Login/>
  </StrictMode>,
)
