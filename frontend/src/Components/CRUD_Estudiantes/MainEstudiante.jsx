import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { mostrarEstudiante, mostrarEstudiantes} from '../../Endpoints/endpoint';

const MainEstudiante = () => {
    const [estudiantes, setEstudiantes] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const navigate = useNavigate();

    const cargarEstudiantes = async () => {
        try {
            const response = await axios.get(mostrarEstudiantes);
            setEstudiantes(response.data);
        } catch (error) {
            console.error("Error al cargar los estudiantes:", error);
        }
    };

    useEffect(() => {
        cargarEstudiantes();
    }, []);

    const estudiantesFiltrados = estudiantes.filter((estudiante) =>
        estudiante.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        estudiante.email.toLowerCase().includes(busqueda.toLowerCase())
    );

    const borrarEstudiante = async (id) => {
        try {
            if (window.confirm("¿Estás seguro de que deseas eliminar este estudiante?")) {
                await axios.delete(`${mostrarEstudiante}${id}`);
                alert("Estudiante eliminado con éxito");
                cargarEstudiantes();
            }
        } catch (error) {
            console.error("Error eliminando el estudiante", error);
            alert("Error eliminando el estudiante");
        }
    };

    return (
        <div className="w-100 d-flex justify-content-center align-items-center flex-column mb-5">
            <div className='d-flex justify-content-center align-items-center m-3 w-75'>
                <Form.Control
                    type="text"
                    placeholder="Buscar por nombre o email"
                    className="w-50 mx-3"
                    style={{ width: '700px' }}
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
                <Button
                    variant="light"
                    style={{ backgroundColor: "rgba(0, 38, 252, 0.5)", color: "#fff" }}
                    onClick={() => navigate('/estudiantes/crear')}
                >
                    Agregar un nuevo Estudiante
                </Button>
            </div>

            <Table striped bordered hover responsive style={{ width: '700px' }}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {estudiantesFiltrados.length > 0 ? (
                        estudiantesFiltrados.map((estudiante) => (
                            <tr key={estudiante.id || estudiante._id}>
                                <td>{estudiante.nombre}</td>
                                <td>{estudiante.email}</td>
                                <td className="text-center">
                                    <Button className='w-100'size="sm" variant="warning" onClick={() => navigate(`/estudiantes/editar/${estudiante.id_estudiante}`)}>Editar</Button></td>
                                <td className="text-center"><Button className='w-100' size="sm" variant="danger" onClick={() => borrarEstudiante(estudiante.id_estudiante)}> Eliminar </Button></td>
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
    );
};

export default MainEstudiante;

