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
const ExpandMore = styled((props) => {
const { expand, ...other } = props;
return <IconButton {...other} />;
        })
  (({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    }),
    }));
    
export default function Detail(){
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(() => {
        dispatch(getDetails(id));   
    },[dispatch]);
   const detail = useSelector((state) => state.detail);
   const ejemplo = {
		  id: "1",
      name: "Pichi",
      image:
        "https://www.lavanguardia.com/files/og_thumbnail/uploads/2022/03/15/62308d3f4a45d.png",
      description: "una perra buena ",
      timewait: "20/03/2015",
      breed: "cokkie",
      animal: "perro",
      height: 7,
      color: "Otro",
      identified: true,
      vacunas: "todas",
      edad: "4 años",
      sexo: "Hembra",
      especie: "perro",
	}
    return (
        <div >  
            <Box  className="containerDetail">
                <Box sx={{  display:"flex" }}>
                    <Grid container  /* rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }} */ >
                        <Grid container  item xs={5} md={100} >
                        <Card>
                            <CardContent>
                                <Img alt="complex" src={ejemplo.image}/> {/* cambiar ek ejemplo.etc por detail.etc cuando este la base del back */}
                                <Typography paragraph>Nombre: {ejemplo.name}</Typography>
                                <Typography paragraph>Descripcion: {ejemplo.description}</Typography>
                                <Typography paragraph>Raza: {ejemplo.breed}</Typography>
                                <Typography paragraph>Altura: {ejemplo.height}</Typography>
                                <Typography paragraph>Color: {ejemplo.color}</Typography>
                                <Typography paragraph>Vacunas: {ejemplo.vacunas}</Typography>
                                <Typography paragraph>Edad: {ejemplo.edad}</Typography>
                                <Typography paragraph>Sexo: {ejemplo.sexo}</Typography>
                                <Typography paragraph>Animal: {ejemplo.especie}</Typography>                               
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