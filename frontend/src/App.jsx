import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CURSOS, HOME, mostrarEstudiantes, crearEstudiante, mostrarEstudiante, actualizarEstudiante } from './Routers/router'

import './App.css'
import { Cursos } from './Pages/Cursos'
import Home from './Pages/Home'
import MainEstudiante from './Components/CRUD_Estudiantes/MainEstudiante'
import FormEstudiante from './Components/CRUD_Estudiantes/FormEstudiante'
import EditEstudiante from './Components/CRUD_Estudiantes/EditEstudiante'
// import VerEstudiante from './Components/CRUD_Estudiantes/VerEstudiante'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={CURSOS} element={<Cursos />} />
          <Route path={mostrarEstudiantes} element={<MainEstudiante />} />
          <Route path={crearEstudiante} element={<FormEstudiante />} />
          <Route path={actualizarEstudiante} element={<EditEstudiante />} />
        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
