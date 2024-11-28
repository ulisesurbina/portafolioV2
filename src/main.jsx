import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Tiktok from './Tiktok.jsx'
import ElementEffect from './ElementEffect.jsx'
import Navbar from './Navbar.jsx'
import Openfinance from './Openfinance.jsx'
import Body from './Body.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  // StrictMode no funciona en producción
  <StrictMode>
    <Navbar />
    <Body />
    <ElementEffect />
    {/* <App /> */}
    <Tiktok />
    <Openfinance />
  </StrictMode>
)
