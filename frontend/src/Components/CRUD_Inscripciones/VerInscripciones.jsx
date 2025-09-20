import axios from 'axios'
import { useEffect, useState } from "react";
import { mostrarInscripciones } from "../../Endpoints/endpoint";

const VerInscripcioness = () => {
    const [inscripciones, setInscripciones] = useState([])

    const traerInscripciones = async()=>{
        try {
            const {data} = await axios(mostrarInscripciones)
            console.log(data);
            setInscripciones(data)
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        traerInscripciones()
    },[])

    return ( 
        <>
            ver Inscripciones
        </>
     );
}
 
export default VerInscripcioness;