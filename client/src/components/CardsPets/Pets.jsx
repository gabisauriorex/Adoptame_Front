import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardPet from "../Card/CardPet";
 //import {pets} from '../../Datos.js' 
import style from "./Pets.module.css";
//===============
import Paginate from "../Paginate/Paginate";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { getPets } from "../../Redux/Actions/actions_filter";
//esta funcion GENERA EL TOKEN Y ME LO DEVULEVE es por cada usuario
import { useAuth0 } from "@auth0/auth0-react";


function Pets() {
  const dispatch = useDispatch();  
 const pets = useSelector((state) => state.filtres_reducer.pets);
  //const { getAccessTokenSilently } = useAuth0();
  
  
  const handleGetPets = async () => {
   // const token = await getAccessTokenSilently(); //genera el token x cada usuario 
    dispatch(getPets());
  }; 
  useEffect(() => {
    handleGetPets() //monto la funcion genradora del token , despacho y envio el token por parametros
  }, [dispatch]);

  
  
    return (
        <div className={style.gridContainer}>
         <Box  sx={{ flexGrow: 1 ,margin:3 }}>
           <Grid  container item spacing={2}>
           {pets?.map(p=>{
             return(
            <CardPet
             id={p.id}
              image={p.image}
              name={p.name}
              edad={p.edad}
              sexo={p.sexo}
              description={p.description}
              />
          ) })}
          </Grid>
        </Box>
        <Box container  sx={{flexGrow:1 ,marginTop:10}} >
        <Paginate   />     
        </Box>
    </div>
  );
}

export default Pets;
