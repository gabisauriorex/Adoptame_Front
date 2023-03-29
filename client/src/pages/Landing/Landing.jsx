
import React from 'react'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import './Landing.css'

function Landing() {
  return (
    <div className='land'>
       <Link to="/Home">
       <Button variant="contained">Adopta</Button>
       </Link>
       <Link to="/createPet">
      <Button variant="contained">Registrar animal</Button>
       </Link>
       <Link to="/Dona">
      <Button variant="contained">Ayudanos</Button>
       </Link>
    </div>
  )
}

export default Landing
