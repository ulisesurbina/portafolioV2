import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Navbar.jsx'
import Body from './Body.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  // StrictMode no funciona en producción
  <StrictMode>
    <Navbar />
    <Body />
    
  </StrictMode>
)
