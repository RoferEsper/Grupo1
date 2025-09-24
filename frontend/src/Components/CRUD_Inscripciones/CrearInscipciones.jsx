import axios from 'axios';
import { Link, useNavigate} from "react-router-dom";
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { crearInscripciones } from '../../Endpoints/endpoint';


const CrearInscripciones = () => {
    const navigate = useNavigate()
    const [inscripcion, setIncripcion] = useState({
        fecha_inscripcion: "",
        id_estudiante: "",
        id_curso: ""
    });


    const handleChange = (e) => {
        setIncripcion({
        ...inscripcion,
        [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post(crearInscripciones, inscripcion);
        console.log("inscripcion creado correctamente", response.data);
        setIncripcion({
            fecha_inscripcion: "",
            id_estudiante: "",
            id_curso: ""
        });
        alert("Inscripcion creada con exito.")
        navigate("/inscripciones")
        } catch (error) {
            console.error("Error al crear el inscripcion:", error);
            alert("Error al crear inscripcion.")
        }

    };

    console.log(inscripcion);
    

    return ( 
        <div className='d-flex justify-content-center align-items-center m-5'>
            <div className="bg-white p-4 rounded-3 shadow text-dark w-50 ">
                <h3 className="text-center mb-4">Formulario de Inscripciones</h3>
                <Form className="px-5" onSubmit={handleSubmit} >
                    <Form.Group className="mb-3">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="text" name="fecha_inscripcion" placeholder="111-11-11" value={inscripcion.fecha_inscripcion} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                    <Form.Label>Legajo de estudiante (id)</Form.Label>
                    <Form.Control type="text" name="id_estudiante" placeholder="1" value={inscripcion.id_estudiante} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                    <Form.Label>Codigo de curso (id)</Form.Label>
                    <Form.Control type="text" name="id_curso" placeholder="1" value={inscripcion.id_curso} onChange={handleChange} required />
                    </Form.Group>

                    <div className=" text-end mt3">
                    <Link to="/inscripciones">
                        <Button className="m-2" variant="danger">
                        Cancelar
                        </Button>
                    </Link>

                    <Button type="submit" variant="primary">Guardar</Button>

                    </div>
                </Form>
            </div>
        </div>
     );
}
 
export default CrearInscripciones;