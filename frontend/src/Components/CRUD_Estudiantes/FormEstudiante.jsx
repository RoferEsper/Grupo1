import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from "axios";
import { crearEstudiante } from '../../Endpoints/endpoint';




function FormEstudiante({ onClose, onUpdated }) {

    const initialState = {
        nombre: "",
        email: ""
    };
    const [formData, setFormdata] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formData, [name]: value });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const validation = validationFormCliente(formData);
        if (validation.length != 0) {
            return alert(validation)
        }

        try {
            const response = await axios.post(crearEstudiante, formData);
            alert("Estudiante creado con exito")
            setFormdata(initialState);
            onUpdated();
            onClose();
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
                    <Form.Control type="nombre" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                </Form.Group>
                </Form>
                <div className='d-flex justify-content-end'>
                    <Button variant="secondary" className='me-2' onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Guardar
                    </Button>
                </div>
    </div>
  )
}

export default FormEstudiante
