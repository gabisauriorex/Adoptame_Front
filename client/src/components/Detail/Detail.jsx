import React ,{ useEffect }from "react";
import { Link, useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getDetails}from '../../Redux/Actions/actions_pets' 
import  '../Detail/Detail.css' 
import { styled } from '@mui/material/styles';
import {Card,Grid,Box} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Img = styled('img')({
  margin:'1px',
  width:'200px',
  height:'140px',
  borderRadius:"5px",
  padding:'1px'
});
    
export default function Detail(){
    const dispatch = useDispatch();
    const {id} = useParams();
    const detail = useSelector((state) => state.pets_reducer.detail);
   async function handleGetDetail(id){
    dispatch(getDetails(id));   
   }
    useEffect(() => {
        handleGetDetail(id);   
    },[dispatch]);
    return (
        <div >  
            <Box  className="containerDetail">
                <Box sx={{  display:"flex" }}>
                    <Grid container  /* rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }} */ >
                        <Grid container  item xs={5} md={100} >
                        <Card>
                            <CardContent>
                            <Img alt="IMG" src={detail?.image}/> 
                                <Typography paragraph>Nombre: {detail?.name}</Typography>
                                <Typography paragraph>Descripcion: {detail?.description}</Typography>
                                <Typography paragraph>Raza: {detail?.breed}</Typography>
                                <Typography paragraph>Altura: {detail?.height}</Typography>
                                <Typography paragraph>Edad: {detail?.age}</Typography>
                                <Typography paragraph>Sexo: {detail?.sex}</Typography>
                                <Typography paragraph>Animal: {detail?.animal}</Typography>                                
                            </CardContent>
                        </Card>
                        </Grid>                                   
                    </Grid>       
                    <div className="contenedorBoton">
                      <Link  to={'/home'}>
                          <Stack direction="row">
                            <Button variant="contained">Volver</Button>
                          </Stack>                           
                      </Link>
                      <Link  to={'/Adopta'}>
                          <Stack direction="row">
                            <Button variant="contained">Adoptame</Button>
                          </Stack>                           
                      </Link>
                    </div>  
                </Box> 
            </Box>         
        </div> 
      )}