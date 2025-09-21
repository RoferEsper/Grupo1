import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import { mostrarEstudiantes } from '../../Endpoints/endpoint';

const EditEstudiante = () => {
    const { id } = useParams();
    const [formData, setFormdata] = useState({ nombre: '', email: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const getEstudiante = async () => {
            try {
                const response = await axios.get(`${mostrarEstudiantes}/${id}`);
                setFormdata(response.data);
            } catch (error) {
                console.error("Error obteniendo el estudiante", error);
                alert("Error obteniendo el estudiante")
                navigate('/estudiantes');
            }
        }
        getEstudiante();
    }, [id, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`${mostrarEstudiantes}/${id}`, formData);
            alert("Estudiante actualizado con exito")
            navigate('/estudiantes');
        } catch (error) {
            console.error("Error actualizando el estudiante", error);
            alert("Error actualizando el estudiante")
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center m-5'>
            <div className="bg-white p-4 rounded-3 shadow text-dark w-50 ">
            <h3 className="text-center mb-4">Editar Estudiante</h3>
            <Form onSubmit={handleSubmit}  >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="nombre" placeholder="Nombre" value={formData.nombre || ''} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Email" value={formData.email || ''} onChange={handleChange} />
                </Form.Group>
                <div className='d-flex justify-content-end'>
                    <Button variant="secondary" className='me-2' onClick={() => navigate('/estudiantes')}>
                        Cancelar
                    </Button>
                    <Button variant="primary" type="submit">
                        Guardar
                    </Button>
                </div>
            </Form>
        </div>
        </div>
    )
}

export default EditEstudiante;
