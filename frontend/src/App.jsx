<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
=======
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { CREAR_INSCRIPCIONES, CURSOS, HOME, INSCRIPCIONES, VER_CURSO, } from './Routers/router'
import { CURSOS, VER_CURSO, CREAR_CURSO, EDITAR_CURSO, CREAR_INSCRIPCIONES, HOME, INSCRIPCIONES, EDITAR_INSCRIPCION, mostrarEstudiantes, crearEstudiante, mostrarEstudiante, actualizarEstudiante } from './Routers/router'

import './App.css'
import { Cursos } from './Pages/Cursos'
import Home from './Pages/Home'
import { VerCurso } from './Components/CRUD_Cursos/VerCurso'
import Inscripciones from './Pages/Inscripciones'
import CrearInscripciones from './Components/CRUD_Inscripciones/CrearInscipciones'
import { FormCurso } from './Components/CRUD_Cursos/FormCurso'
import { EditCurso } from './Components/CRUD_Cursos/EditCurso'
import EditarInscripcion from './Components/CRUD_Inscripciones/EditarInscripcion'
import MainEstudiante from './Components/CRUD_Estudiantes/MainEstudiante'
import FormEstudiante from './Components/CRUD_Estudiantes/FormEstudiante'
import EditEstudiante from './Components/CRUD_Estudiantes/EditEstudiante'
// import VerEstudiante from './Components/CRUD_Estudiantes/VerEstudiante'
>>>>>>> 398a3498cd4ff7511fa1b83d04ae3b4a2539325e

function App() {


  return (
    <>
<<<<<<< HEAD
     <Home />
=======
      <BrowserRouter>
        <Routes>
            <Route path={HOME} element={<Home/>}/>
            <Route path={INSCRIPCIONES} element={<Inscripciones/>}/>
            <Route path={CREAR_INSCRIPCIONES} element={<CrearInscripciones/>}/>
            <Route path={EDITAR_INSCRIPCION} element={<EditarInscripcion/>}/>

            <Route path={CURSOS} element={<Cursos/>}/>
            <Route path={VER_CURSO} element={<VerCurso/>}/>
            <Route path={CREAR_CURSO} element={<FormCurso/>}/>
            <Route path={EDITAR_CURSO} element={<EditCurso/>}/>

            <Route path={mostrarEstudiantes} element={<MainEstudiante />} />
            <Route path={crearEstudiante} element={<FormEstudiante />} />
            <Route path={actualizarEstudiante} element={<EditEstudiante />} />
          </Routes>
        </BrowserRouter>
>>>>>>> 398a3498cd4ff7511fa1b83d04ae3b4a2539325e
    </>
  )
}

export default App
