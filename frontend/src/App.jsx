import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CURSOS,VER_CURSO, HOME, CREAR_CURSO, EDITAR_CURSO } from './Routers/router'

import './App.css'
import { Cursos } from './Pages/Cursos'
import Home from './Pages/Home'
import { VerCurso } from './Components/CRUD_Cursos/VerCurso'
import { FormCurso } from './Components/CRUD_Cursos/FormCurso'
import { EditCurso } from './Components/CRUD_Cursos/EditCurso'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
     <Routes>
        <Route path={HOME} element={<Home/>}/>

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
