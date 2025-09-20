import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CURSOS, HOME, INSCRIPCIONES } from './Routers/router'

import './App.css'
import { Cursos } from './Pages/Cursos'
import Home from './Pages/Home'
import Inscripciones from './Pages/Inscripciones'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
     <Routes>
        <Route path={HOME} element={<Home/>}/>
        <Route path={INSCRIPCIONES} element={<Inscripciones/>}/>

        <Route path={CURSOS} element={<Cursos/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
