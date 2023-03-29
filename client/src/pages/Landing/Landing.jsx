
import React from 'react'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

import './Landing.css'

function Landing() {
  return (
    <div>
      <h1 className=''>Landing</h1> 

       <Link to="/home">
       <Button variant="contained">ir a home </Button>
       </Link>
       <Link to="/createPet">
      <Button variant="contained">Crear animal</Button>
       </Link>

    </div>
  )
}

export default Landing
