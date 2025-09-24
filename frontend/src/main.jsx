import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
<<<<<<< HEAD
=======
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

>>>>>>> 398a3498cd4ff7511fa1b83d04ae3b4a2539325e

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)