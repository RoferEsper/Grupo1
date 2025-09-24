<<<<<<< HEAD
import React from 'react'

const VerInscripciones = () => {
  return (
    <div>
      
    </div>
  )
}

export default VerInscripciones
=======
import axios from 'axios'
import { useEffect, useState } from "react";
import { mostrarInscripciones } from "../../Endpoints/endpoint";

import Table from 'react-bootstrap/Table';
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import BorrarInscripcion from './BorrarInscripcion';

const VerInscripcioness = () => {
    const [inscripciones, setInscripciones] = useState([])
    const [allInscripciones, setAllInscripciones] = useState([])
    const [busqueda, setBusqueda] = useState("")

    const traerInscripciones = async()=> {
        try {
            const {data} = await axios(mostrarInscripciones)
            // console.log(data)
            setInscripciones(data)
            setAllInscripciones(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
    traerInscripciones()
    },[])

    const handlerBusqueda = (e) => {
        const value = e.target.value
        setBusqueda(value)

        if (value.trim() === "") {
            setInscripciones(allInscripciones)
        } else {
            const filt = allInscripciones.filter((i)=>
            i.nombre_estudiante.toLowerCase().includes(value.toLowerCase())
            )
            setInscripciones(filt)
        }
    }

    return ( 
        <>
            <div className="w-100 d-flex justify-content-center align-items-center flex-column mb-5">
                <div className=' d-flex justify-content-center align-items-center m-3 w-75' >
                    <Form.Control
                        type="text"
                        placeholder="Buscar por nombre"
                        className=" w-50 mx-3"
                        style={{ width: '700px' }}
                        value={busqueda}
                        onChange={handlerBusqueda}
                    />
                    <Link to="/inscripciones/crear"><Button variant="light" style={{ backgroundColor: "rgba(63, 3, 175, 0.5)", color: "#fff" }}>Crear inscripcion</Button></Link>

                </div>


                <div className='' style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                    <Table striped bordered hover responsive className='w-100 table table-striped' style={{ overflowX: 'x' }}>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Curso</th>
                                <th>Descripcion</th>

                            </tr>
                        </thead>
                        <tbody className=''>
                            {inscripciones.length > 0 ? (
                                [...inscripciones].reverse().map((i) => (
                                    <tr key={i.id_inscripcion}>
                                        <td>{i.fecha_inscripcion.slice(0, 10)}</td>
                                        <td>{i.nombre_estudiante}</td>
                                        <td>{i.email_estudiante}</td>
                                        <td>{i.nombre_curso}</td>
                                        <td>{i.descripcion_curso}</td>

                                        {/* <td>
                                            <Link to={``}>
                                                <Button className='w-100' size="sm" variant='primary' >Ver</Button>
                                            </Link>
                                        </td> */}
                                        <td className="text-center">
                                            <Link to={`/inscripcion/editar/${i.id_inscripcion}`}>
                                                <Button className='w-100' size="sm" variant="warning">Editar</Button>
                                            </Link>
                                        </td>

                                        <td className="text-center">
                                            {/* <Button className='w-100' size="sm" variant="danger" onClick={""} >Eliminar</Button> */}
                                            <BorrarInscripcion id_inscripcion={i.id_inscripcion} traerInscripciones={traerInscripciones}/>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">
                                        No se encontraron inscripciones.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
     );
}
 
export default VerInscripcioness;
>>>>>>> 398a3498cd4ff7511fa1b83d04ae3b4a2539325e
