import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CURSOS } from './Routers/router'

import './App.css'
import { Cursos } from './Pages/Cursos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
     <Routes>
        <Route path={CURSOS} element={<Cursos/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
