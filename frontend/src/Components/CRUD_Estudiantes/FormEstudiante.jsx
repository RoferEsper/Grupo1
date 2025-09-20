import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:8000/estudiantes';

function FormEstudiante() {
    const initialState = {
        nombre: "",
        email: ""
    };
    const [formData, setFormdata] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(API_URL, formData);
            alert("Estudiante creado con exito")
            setFormdata(initialState);
            navigate('/estudiantes');
        } catch (error) {
            console.error("Error creando el estudiante", error);
            alert("Error creando el estudiante")
        }
    }

    return (
        <div className="bg-white p-4 rounded-3 shadow text-dark w-50 ">
            <h3 className="text-center mb-4">Formulario de Estudiantes</h3>
            <Form onSubmit={handleSubmit}  >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
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
    )
}

export default FormEstudiante;
