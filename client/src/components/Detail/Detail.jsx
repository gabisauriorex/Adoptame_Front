 import React ,{ useEffect }from "react";
import { Link, useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {getDetails}from '../../Redux/Actions/actions_pets' 
import  '../Detail/Detail.css' 


import { styled } from '@mui/material/styles';
import {Card,Grid,Box} from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
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

    return (
        <div >  
 <Box className="containerDetail">


         
    <Grid container /* rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }} */ >
 
        
        <Grid container  item xs={5} md={4} >
         <Card>
         <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
         
        </CardContent>
         </Card>
        </Grid>
          <Grid item xs={4} sm={9} md={4}>

        
<Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
    {/*   <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent> */}
          </Card>
        </Grid> 
         <Grid item xs={4} sm={9} md={4}>
          ultima caja
        </Grid>
    
      </Grid> 


      
      <div className="contenedorBoton">
                 <Link  to={'/home'} >
               <button className="botonVolver">VOLVER</button>
               </Link>
            </div>  

 </Box>










                
         
        </div> 
             )}
            
        



             
          {/*  <div className="detail_container">
                 <h4>{detail.name}</h4> 
                 <img className='imagen p' src ={detail.image} height="250px" width='250px' alt='not found'/>
                 <p className="title" >{detail.description}</p>
                 <p className="p"> <span className="text color">Color </span> <span className="text ">{detail.color}</span></p>
                 <p className="p"> <span className="text color">Altura </span> <span className="text ">{detail.height}</span></p>
                 <p className="p"> <span className="text color">Peso </span> <span className="text ">{detail.weight}</span></p>
                 <p className="p"> <span className="text color">Encontrado el dia: </span> <span className="text ">{detail.timewait}</span></p>
                 <p className="p"> <span className="text color">Especie </span> <span className="text ">{detail.breed}</span></p>
                 <p className="p"> <span className="text color">Adoptado </span> <span className="text ">{detail.adopted}</span></p>
                 <p className="p"> <span className="text color">Identificado </span> <span className="text ">{detail.identified}</span></p>
                 <p className="p"> <span className="text color">Edad </span> <span className="text ">{detail.age}</span></p>
    
            </div> 
 */}