import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CURSOS,VER_CURSO, HOME } from './Routers/router'

import './App.css'
import { Cursos } from './Pages/Cursos'
import Home from './Pages/Home'
import { VerCurso } from './Components/CRUD_Cursos/VerCurso'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
     <Routes>
        <Route path={HOME} element={<Home/>}/>

        <Route path={CURSOS} element={<Cursos/>}/>
        <Route path={VER_CURSO} element={<VerCurso/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
