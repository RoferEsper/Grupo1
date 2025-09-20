const express = require ("express")
const cors = require ("cors");
const mysql = require ("mysql2")
const {connection} = require('./Config/dataBase')
const inscripciones = require ("./Routers/inscripciones")
const cursos = require ("./Routers/cursos")
const estudiantes = require('./Routers/estudiantes')

//instancio express
const app = express()

//habilito cors
app.use(cors({
  origin: 'http://localhost:5173' // Puerto que utilizo en el frontend
})); 
//utilizo libreria
app.use(express.json())

app.use('/inscripciones', inscripciones)
app.use('/cursos', cursos)
app.use('/estudiantes', estudiantes)


// app.use('/', (req, res)=>{
//    return res.status(200).json('Peticion de prueba jaja jeje jiji jojo juju')
// })


app.listen(8000, () => {
    console.log("Servidor corriendo en el puerto 8000")
})