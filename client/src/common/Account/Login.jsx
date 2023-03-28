import React,{useState} from 'react';
import { Box ,IconButton,Avatar,Tooltip,Menu,MenuItem,Typography,Button} from '@mui/material';
/* import {} from '@mui/material'; */
import  {LockOpen}  from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons';
import {Notify} from '../../components/Notificacion/Notify'

/* import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton'*/

import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

export default function Login() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      }
    });

  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
    returnTo,
    isLoading
  } = useAuth0();



  return (

  <>
      
      {
         (!isAuthenticated)&&(
          <Button variant='outlined' color='primary'
            onClick={() => loginWithRedirect()}
            startIcon={<LockOpen/>}
          >
            Login
          </Button> )
      }
      
       {(isAuthenticated && user.email_verified===false)&&
    
        Notify('info', "Debe validar su cuenta vaya a su correo por favor!! ", 'bottom-end',20000)       
       } 

      {isAuthenticated && (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="menu login">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.picture} src={user.picture} />
              </IconButton>
           
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            
            <MenuItem >
              <IconButton >
                <Avatar alt={user.picture} src={user.picture} sizes="small" />
              </IconButton>
           {/*  <Typography variant='h6' textAlign="center" >{user.nickname}</Typography> */}
            <Typography variant='body1' textAlign="center" >{user.email}</Typography>
              </MenuItem>
            <MenuItem component={Link} to="/Profile">
              <IconButton>
                <FontAwesomeIcon icon={faUser} />
              </IconButton>
              <Typography variant='body1' textAlign="center" >Profile</Typography>
             </MenuItem>
            
            <MenuItem onClick={() =>logoutWithRedirect()}>
              <Typography variant='subtittle1' textAlign="center" >
                
                <IconButton>
                  <FontAwesomeIcon icon={faLock} />
                </IconButton>
                Logout</Typography>
            </MenuItem>
            
            </Menu>
          </Box>
      )}   
  </>     
  
  );
}



