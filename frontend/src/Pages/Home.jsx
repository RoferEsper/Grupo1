<<<<<<< HEAD
import React from 'react'
import Header from '../Components/Header'
import Main from '../Components/Main'
import Footer from '../Components/Footer'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CARD_Cursos from '../Components/CARD_Cursos';
const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <CARD_Cursos />
      <Button>gfhgf</Button>
      <Footer />
    </div>
  )
}

export default Home
=======
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className=' '>
            <div className='d-flex justify-content-center m-5 text-center'>
                <h1>Sistema Gestion de Inscripciones Examenes Finales</h1>
            </div>
            <div className='d-flex justify-content-center align-items-center flex-wrap'>
                <Card style={{ width: '18rem', height:'200px' }} className='m-1'>
                    <Card.Body className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Card.Title>Estudiantes</Card.Title>
                        <Card.Text>
                            Modulo para gestionar Estudiantes.
                        </Card.Text>
                        <Link to="/estudiantes"><Button variant="primary">GESTIONAR</Button></Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height:'200px' }} className='m-1'>
                    <Card.Body className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Card.Title>
                            Cursos
                        </Card.Title>
                        <Card.Text>
                            Modulo para gestionar Cursos.
                        </Card.Text>
                        <Link to="/cursos"><Button variant="primary">GESTIONAR</Button></Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height:'200px' }} className='m-1'>
                    <Card.Body className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Card.Title>Inscripciones</Card.Title>
                        <Card.Text>
                            Modulo para gestionar Inscripciones.
                        </Card.Text>
                        <Link to="/inscripciones"><Button variant="primary">GESTIONAR</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
     );
}
 
export default Home;
>>>>>>> 398a3498cd4ff7511fa1b83d04ae3b4a2539325e
