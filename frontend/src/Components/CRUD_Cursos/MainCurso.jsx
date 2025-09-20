import axios from 'axios';
import { mostrarCursos } from '../../Endpoints/endpoint'
import { Link, UNSAFE_createClientRoutesWithHMRRevalidationOptOut } from "react-router-dom";

import { mostrarCurso } from '../../Endpoints/endpoint'
import { useState, useEffect } from 'react';
import { FormCurso } from './FormCurso'
import { EditCurso } from './EditCurso'
import { VerCurso } from './VerCurso'
import Table from 'react-bootstrap/Table';
import { Button, Form, Container, Row, Col } from "react-bootstrap";
export const MainCurso = () => {

    //state de busqueda
    const [busqueda, setBusqueda] = useState("");

    const [cursos, setCursos] = useState([]);
    const [cursosId, setCursosId] = useState(null);

    const cargarCursos = async () => {
        try {
            const response = await axios.get(mostrarCursos);
            console.log("CURSOS CARGADOS CORRECTAMENTE:", response.data);
            setCursos(response.data);
        } catch (error) {
            console.error("Error al cargar los cursos:", error);

        }
    }
    useEffect(() => {
        cargarCursos();
    }, []);

    const borrar = async (id) => {
        try {
            await axios.delete(`${mostrarCurso}${id}`);
            console.log("Curso eliminado correctamente");
            cargarCursos();
        } catch (error) {
            console.error("Error al eliminar el curso:", error);
        }
    }

    const cursosFiltrados = cursos.filter((curso) =>
        curso.nombre.toLowerCase().includes(busqueda.toLowerCase())

    );
    return (

        <>
            <div className="w-100 d-flex justify-content-center align-items-center flex-column mb-5">
                <div className=' d-flex justify-content-center align-items-center m-3 w-75' >
                    <Form.Control
                        type="text"
                        placeholder="Buscar por nombre o DNI"
                        className=" w-50 mx-3"
                        style={{ width: '700px' }}
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                    <Button variant="light" style={{ backgroundColor: "rgba(63, 3, 175, 0.5)", color: "#fff" }} onClick={<FormCurso />} >Crear un nuevo Curso</Button>

                </div>


                <div className='' style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                    <Table striped bordered hover responsive className='w-100 table table-striped' style={{ overflowX: 'x' }}>
                        <thead>
                            <tr>
                                <th>Nombre</th>

                            </tr>
                        </thead>
                        <tbody className=''>
                            {cursosFiltrados.length > 0 ? (
                                cursosFiltrados.reverse().map((curso) => (
                                    <tr key={curso.id_curso}>
                                        <td>{curso.nombre}</td>

                                        <td>
                                            <Link to={`/cursos/${curso.id_curso}`}>
                                                <Button className='w-100' size="sm" variant='primary' >Ver</Button>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <Link to={`/editar-curso/${curso.id_curso}`}>
                                                <Button className='w-100' size="sm" variant="warning" onClick={<EditCurso />} >Editar</Button>
                                            </Link>
                                        </td>

                                        <td className="text-center">
                                            <Button className='w-100' size="sm" variant="danger" onClick={() => { borrar(curso.id_curso) }} >Eliminar</Button>

                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">
                                        No se encontraron clientes.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}
