import { Button } from "react-bootstrap";
import axios from 'axios'
import { borrarInscripciones } from "../../Endpoints/endpoint";

const BorrarInscripcion = ({id_inscripcion, traerInscripciones}) => {


    const borrar = async()=>{
        try {
            if (window.confirm("¿Estás seguro de que deseas eliminar esta inscripcion?")) {
                const {data} = await axios.delete(`${borrarInscripciones}${id_inscripcion}`)
                // console.log(data);
                traerInscripciones()
                alert("Inscripcion borrada con exito.")
            }
        } catch (error) {
            console.log(error);
            alert("Error al eliminar inscripcion.")
            
        }
    }
    
    return ( 
        <>
            <Button className='w-100' size="sm" variant="danger" onClick={borrar} >Eliminar</Button>
        </>
     );
}
 
export default BorrarInscripcion;