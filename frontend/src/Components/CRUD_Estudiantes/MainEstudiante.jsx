import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { mostrarEstudiantes } from '../../Endpoints/endpoint';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import FormEstudiante from './FormEstudiante';
import EditEstudiante from './EditEstudiante';
import VerEstudiante from './VerEstudiante';




const MainEstudiante = () => {
        //state de estudiantes
    const [estudiantes, setEstudiantes] = useState([]);
    const [estudianteId, setEstudianteId] = useState(null);

    //state de busqueda
    const [busqueda, setBusqueda] = useState("");

    //state de la modal 
    const [showModal, setShowModal] = useState(false);
    const [fromType, setFromType] = useState("");


    //funcion de apertura modal
    const handleOpenModal = (type, id = null) => {
        setFromType(type);
        setClienteId(id);
        setShowModal(true);
    };

    //funcion de cierre modal
    const handleCloseModal = () => {
        setShowModal(false);
        setFromType("");
        setEstudianteId(null);
    };

    const TITULOS = {
        Estudiant: "Nuevo Estudiante",
        verEstudiant: "Ver Estudiante",
        editarEstudiant: "Editar Estudiante"
    };


    const cargarEstudiantes = async () => {
        try {const response = await axios.get(URL_CLIENTES);
            console.log("ESTUDIANTES CARGADOS:", response.data);
            setClientes(response.data)
        } catch (error) {
            console.error("Error al cargar los estudiantes:", error);
        }
    }

    const getEstudiantes = async () => {
        try {
            const response = await axios.get(`${mostrarEstudiantes}/${id}`);
            setEstudiantes(response.data);
        } catch (error) {
            console.error("Error obteniendo los estudiantes", error);
            alert("Error obteniendo los estudiantes")
        }

    useEffect(() => {
        getEstudiantes();
    }   , []);

    const estudiantesFiltrados = estudiantes.filter((estudiante) =>
        estudiante.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        estudiante.email.toLowerCase().includes(busqueda.toLowerCase())
    );

    const borrarEstudiante = async (id) => {
        try {
            if (confirm("¿Estás seguro de que deseas eliminar este estudiante?")) {
            await axios.delete(`${mostrarEstudiantes}/${id}`);
            alert("Estudiante eliminado con éxito");
            getEstudiantes();
        }
    } catch (error) {
            console.error("Error eliminando el estudiante", error);
            alert("Error eliminando el estudiante")
        }
    }



  return (
    <>
            <div className="w-100 d-flex justify-content-center align-items-center flex-column mb-5">
                <div className=' d-flex justify-content-center align-items-center m-3 w-75' >
                    <Form.Control
                        type="text"
                        placeholder="Buscar por nombre o email"
                        className=" w-50 mx-3"
                        style={{ width: '700px' }}
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                    <Button variant="light" style={{ backgroundColor: "rgba(63, 3, 175, 0.5)", color: "#fff" }} onClick={() => handleOpenModal("Estudiant")} >Agregar un nuevo Estudiante</Button>

                </div>


                <Table striped bordered hover responsive className='' style={{ width: '700px' }}>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {estudiantesFiltrados.length > 0 ? (
                            estudiantesFiltrados.map((estudiante) => (
                                <tr key={estudiante.id}>
                                    <td>{estudiante.nombre}</td>
                                    <td>{estudiante.email}</td>
                                    <td>
                                        <Button className='w-100' size="sm" variant='primary' onClick={() => handleOpenModal("verEstudiant", estudiante.id)}>Ver</Button>
                                    </td>
                                    <td className="text-center">
                                        <Button className='w-100' size="sm" variant="warning" onClick={() => handleOpenModal("editarEstudiant", estudiante.id)} >Editar</Button>
                                    </td>
                                
                                    <td className="text-center">
                                        <Button className='w-100' size="sm" variant="danger" onClick={() => { borrar(estudiante.id) }} >Eliminar</Button>
                                    </td>
                                
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No se encontraron estudiantes.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
            <Modal show={showModal} onHide={handleCloseModal} size='lg' centered>
                <Modal.Header closeButton>
                    <Modal.Title>{TITULOS[fromType]}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex justify-content-center " >
                    {fromType === "Estudiant" && <FormEstudiante onClose={handleCloseModal} onUpdated={cargarEstudiantes} />}
                    {fromType === "verEstudiant" && <VerEstudiante id={estudianteId} />}{/*paso el id por prop */}
                    {fromType === "editarEstudiant" && <EditEstudiante id={estudianteId} onClose={handleCloseModal} onUpdated={cargarEstudiantes} />}
                </Modal.Body>


            </Modal>

        </>
  )
}
}

export default MainEstudiante;

