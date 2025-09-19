import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CURSOS, HOME } from './Routers/router'

import './App.css'
import { Cursos } from './Pages/Cursos'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
     <Routes>
        <Route path={HOME} element={<Home/>}/>

        <Route path={CURSOS} element={<Cursos/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
