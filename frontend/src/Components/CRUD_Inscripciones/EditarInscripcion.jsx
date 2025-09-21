import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { editarInscripcion } from '../../Endpoints/endpoint';


const EditarInscripcion = () => {
    const navigate = useNavigate()

    const {id} = useParams();

    const [inscripcion, setInscripcion] = useState({
        fecha_inscripcion: "",
        id_estudiante: "",
        id_curso: ""
    })

    const getInscripcion = async (id) => {
        try {
        const response = await axios.get(`http://localhost:8000/inscripciones/${id}`);
        setInscripcion(response.data[0]);
        } catch (error) {
        console.error("Error al obtener el inscripcion:", error);
        }
    };

    useEffect(() => {
        if (id) getInscripcion(id);
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`${editarInscripcion}${inscripcion.id_inscripcion}`, inscripcion);
            console.log("Inscripcion actualizado correctamente", response.data);
            navigate("/inscripciones")

            } catch (error) {
            console.error("error alactualizar elcurso:", error);

            }
        };

        console.log(inscripcion);
        
        const handleChange = (e) => {
            setInscripcion({
            ...inscripcion,
            [e.target.name]: e.target.value
            });
        }

    return ( 
        <>
            <div className="bg-white p-4 rounded-3 shadow text-dark w-100 ">
                <h3 className="text-center mb-4">Formulario de editar inscripcion</h3>
                <Form className="px-5" onSubmit={handleSubmit} >
                <Form.Group className="mb-3">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="text" name="fecha_inscripcion" placeholder="1111-11-11" value={inscripcion.fecha_inscripcion.slice(0, 10) || ""} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Legajo de estudiante (id)</Form.Label>
                    <Form.Control type="text" name="id_estudiante" placeholder="1" value={inscripcion.id_estudiante ||""} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Codigo de curso (id)</Form.Label>
                    <Form.Control type="text" name="id_curso" placeholder="1" value={inscripcion.id_curso ||""} onChange={handleChange} required />
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
        </>
     );
}
 
export default EditarInscripcion;