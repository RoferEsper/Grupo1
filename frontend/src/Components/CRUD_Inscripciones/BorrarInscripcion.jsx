import { Button } from "react-bootstrap";
import axios from 'axios'
import { borrarInscripciones } from "../../Endpoints/endpoint";

const BorrarInscripcion = ({id_inscripcion, traerInscripciones}) => {


    const borrar = async()=>{
        try {
            const {data} = await axios.delete(`${borrarInscripciones}${id_inscripcion}`)
            console.log(data);
            traerInscripciones()
        } catch (error) {
            console.log(error);
            
        }
    }
    
    return ( 
        <>
            <Button className='w-100' size="sm" variant="danger" onClick={borrar} >Eliminar</Button>
        </>
     );
}
 
export default BorrarInscripcion;