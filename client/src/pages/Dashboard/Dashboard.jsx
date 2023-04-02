import style from './Dashboard.css'
import CardPet from "../../components/Card/CardPet";
import Paginate from "../../components/Paginate/Paginate";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { getPets } from "../../Redux/Actions/actions_filter";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Admin() {
    const dispatch = useDispatch();  
    const pets = useSelector((state) => state.filtres_reducer.pets);
    const handleGetPets = async () => {
    dispatch(getPets());
    }; 
    useEffect(() => {
    handleGetPets() 
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
  )
}


export default Admin
