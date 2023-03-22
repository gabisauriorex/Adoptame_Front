


import { styled } from '@mui/material/styles';

import {Paper,Grid ,Box}from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Pets from '@mui/icons-material/Pets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

import './CardPet.css'


const Img = styled('img')({
  margin:'1px',
  width:'200px',
  height:'140px',
  borderRadius:"5px",
  padding:'1px'
  
   /*  display: 'flex',
     flexDirection:'row',
    justifyContent:'center',
    alignItems:'center' */
});




function CardPet({id,image,name,timewait,description }) 
{
  const path=`/pets/:${id}`;
     return (
 
            <Paper className='containerCardPet'
                >

                  <Grid >
                  <Typography  variant="h6" component="div"  color="#0f4d71" /* sx={{backgroundColor:"#ffa733" ,borderRadius:5 ,margin:"3px"}} */>
                      {name}       <FontAwesomeIcon icon={faPaw} bounce/> 
                  </Typography>
                 
                 
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                  <Button component={Link} to={path} >
                  <Img alt="complex" src={image} />
                  </Button>
                </Grid>
                <Grid item xs={12} sm={3} md={4}  className='containerText' >
                  <Box sx={{ marginLeft:5, display:'flex',flexDirection:'row' ,justifyContent:'center',alignItems:'center'}}>
                  <Typography variant="subtitle2" gutterBottom>
                    {timewait}
                  </Typography>
                  </Box>
                </Grid>
              </Paper>
  
  )
}

export default CardPet





/* 




  <Paper
            key={id}
           sx={{
            p: 1,
            margin: 3,
            maxWidth: 230,
            maxHeight:250,
            flexGrow: 1,
            borderRadius:1
           backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
         
            }}
            >
             <Grid container spacing={5}> 
                <Grid item>
                  <ButtonBase sx={{ width:220, height: 200 ,}}>
                    <Img alt="complex" src={image} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm={3} md={4} container >
                   <Grid item xs container  spacing={4}> 
                    <Grid item >
                      <Typography  variant="subtitle1" component="div">
                       {name}
                      </Typography>
                      <Typography variant="body2" >
                       {timewait}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {description}
                      </Typography>
                   </Grid> 
                   
                    </Grid>
             
                  </Grid>
                </Grid> 
               </Paper>






*/








