import { useState, useEffect } from 'react';
import { mostrarEstudiante } from '../../Endpoints/endpoint';
import axios from 'axios';
import { Card } from "react-bootstrap";

const VerEstudiante = ({ id }) => {

    const [estudiante, setEstudiante] = useState(null);

    useEffect(() => {
        if (!id) return;

        const getEstudiante = async () => {
            try {
                const response = await axios.get(`${mostrarEstudiante}/${id}`);
                setEstudiante(response.data);
            } catch (error) {
                console.error("Error obteniendo el estudiante", error);
                alert("Error obteniendo el estudiante")
            }
            getEstudiante();
        }
    }, [id]);

    if (!estudiante) return <p>Cargando Estudiante...</p>;

    console.log(estudiante);

  return (
    <>
            <Card className="m-4 p-4 shadow">
                <Card.Body>
                    <Card.Title className="mb-3">{estudiante.nombre}</Card.Title>
                    <Card.Text><strong>Email:</strong> {estudiante.email}</Card.Text>
                </Card.Body>
            </Card>
        </>
  )
}

export default VerEstudiante