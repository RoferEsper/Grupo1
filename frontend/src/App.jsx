import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { CREAR_INSCRIPCIONES, CURSOS, HOME, INSCRIPCIONES, VER_CURSO, } from './Routers/router'
import { CURSOS, VER_CURSO, CREAR_CURSO, EDITAR_CURSO, CREAR_INSCRIPCIONES, HOME, INSCRIPCIONES, EDITAR_INSCRIPCION, } from './Routers/router'

import './App.css'
import { Cursos } from './Pages/Cursos'
import Home from './Pages/Home'
import { VerCurso } from './Components/CRUD_Cursos/VerCurso'
import Inscripciones from './Pages/Inscripciones'
import CrearInscripciones from './Components/CRUD_Inscripciones/CrearInscipciones'
import { FormCurso } from './Components/CRUD_Cursos/FormCurso'
import { EditCurso } from './Components/CRUD_Cursos/EditCurso'
import EditarInscripcion from './Components/CRUD_Inscripciones/EditarInscripcion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
     <Routes>
        <Route path={HOME} element={<Home/>}/>
        <Route path={INSCRIPCIONES} element={<Inscripciones/>}/>
        <Route path={CREAR_INSCRIPCIONES} element={<CrearInscripciones/>}/>
        <Route path={EDITAR_INSCRIPCION} element={<EditarInscripcion/>}/>

        <Route path={CURSOS} element={<Cursos/>}/>
        <Route path={VER_CURSO} element={<VerCurso/>}/>
        <Route path={CREAR_CURSO} element={<FormCurso/>}/>'
        <Route path={EDITAR_CURSO} element={<EditCurso/>}/>'
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
