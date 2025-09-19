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
