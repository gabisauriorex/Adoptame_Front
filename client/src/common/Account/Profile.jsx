import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Box,Avatar}from '@mui/material'


//========MUI========

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import './Profile.css'
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log(user)

  const Img = styled('img')({
    margin: 0,
    padding:0,
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  return (

    <div className="container">
      <Box
     
      >

        <Typography variant="h5" color="initial" sx={{ color:'#01579b'}} className="title">Tu perfil</Typography>
        <Grid container spacing={{ xs: 1, sm: 2, md: 2 }}  className='containerCard' >
        
          <Grid  item  xs={3} sm={3} md={3} >
            <ButtonBase sx={{ width:300, height: 200 }}>
              <Img alt="complex" src={user.picture}  width='150px' height='180px'/>
            </ButtonBase>
          </Grid>

            {/* <Grid item xs container direction="column" spacing={2}> */}
          <Grid item xs={3} sm={3} md={3} direction='column'>
                <Typography  variant="subtitle1">
                   {user.given_name} {user.family_name}
                </Typography>
                <Typography  variant="subtitle1" sx={{marginLeft:3}}>
                    Email Verificado: {user.email_verified===true?'Si':"No" } 
                </Typography>
             
              </Grid>
         
        
          <Grid item xs={3} sm={3} md={3}>
              <Typography sx={{ cursor: 'pointer' }} variant="subtitle1">
               Email: {user.nickname}
              </Typography>
            </Grid>


          <Grid item xs={3} sm={3} md={3}>
              <Typography variant="subtitle1">
              Nickname: {user.nickname}
              </Typography>
            </Grid>
     
      

        </Grid>
      </Box>
    
    </div>

   
  );
};

export default Profile;



/* 
  { isAuthenticated  && (
        <>

      
            <Avatar
              alt="Remy Sharp"
              src={user.picture}
              sx={{ width: 56, height: 56 }}
            />

            <h6>{user.name}</h6>
            <p>{user.email}</p>
   

        </>
       )
      }

*/