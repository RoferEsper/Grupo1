import axios from 'axios';
import { Link} from "react-router-dom";
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'


export const FormCurso = () => {

  const [curso, setCurso] = useState({
    nombre: "",
    descripcion: ""
  });


  const handleChange = (e) => {
    setCurso({
      ...curso,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/cursos', curso);
      console.log("Curso creado correctamente", response.data);
      setCurso({
        nombre: "",
        descripcion: ""
      });
    
    } catch (error) {
      console.error("Error al crear el curso:", error);
    }

  };

  return (
    <div className="bg-white p-4 rounded-3 shadow text-dark w-100 ">
      <h3 className="text-center mb-4">Formulario de cursos</h3>
      <Form className="px-5" onSubmit={handleSubmit} >
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="nombre" placeholder="Nombre del curso" value={curso.nombre} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control type="text" name="descripcion" placeholder="Introduccion a HTML" value={curso.descripcion} onChange={handleChange} required />
        </Form.Group>

        <div className=" text-end mt3">
          <Link to="/cursos">
            <Button className="m-2" variant="danger">
              Cancelar
            </Button>
          </Link>


          <Button type="submit" variant="primary">Guardar</Button>

        </div>
      </Form>
    </div>
  )
}
