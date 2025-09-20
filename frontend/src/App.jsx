import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CURSOS, ESTUDIANTES, HOME } from './Routers/router'

import './App.css'
import { Cursos } from './Pages/Cursos'
import Home from './Pages/Home'
import Estudiantes from './Pages/Estudiantes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
     <Routes>
        <Route path={HOME} element={<Home/>}/>

        <Route path={CURSOS} element={<Cursos/>}/>
        <Route path={ESTUDIANTES} element={<Estudiantes/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
