import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Desc from './Desc.jsx'
import Bande from './Bande.jsx'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App /> }/>
        <Route path="/desc/:value" element={<Desc /> }/>
        <Route path="/bande/:value" element={<Bande /> }/>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
