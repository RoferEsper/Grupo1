import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CURSOS, mostrarEstudiantes, crearEstudiante,mostrarEstudiante,actualizarEstudiante,eliminarEstudiante, HOME } from './Routers/router'

import './App.css'
import { Cursos } from './Pages/Cursos'
import Home from './Pages/Home'
import Estudiantes from './Pages/Estudiantes'


function App() {


  return (
    <>
  <BrowserRouter>
     <Routes>
        <Route path={HOME} element={<Home/>}/>
        <Route path={CURSOS} element={<Cursos/>}/>
        <Route path={mostrarEstudiantes} element={<Estudiantes/>}/>
        <Route path={crearEstudiante} element={<Estudiantes/>}/>
        <Route path={mostrarEstudiante} element={<Estudiantes/>}/>
        <Route path={actualizarEstudiante} element={<Estudiantes/>}/>
        <Route path={eliminarEstudiante} element={<Estudiantes/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
