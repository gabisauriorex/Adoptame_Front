import React,{useState} from 'react';

import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {GroupAdd,Lock} from '@mui/icons-material';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton'
import Profile from './Profile'
import { useAuth0 } from "@auth0/auth0-react";
const settings = [
/* { name:'Perfil',
 // path:'/register',
  component: <Profile/>,  
  icon:<GroupAdd/>
}
, */
  { name:'Iniciar Session',
   //path:'/login',
  //comp: <LoginButton/> ,
  //icon: <Lock/>
}
,
{// name:'Cerrar Session',
  //path:'/register',
 // comp: <LogoutButton/>,  
  //icon:<Lock/>
}

/* { name:'Crear Cuenta',
  path:'/register',
  comp: <LogoutButton/>,  
  icon:<GroupAdd/>
} */
  
];

export default function Account() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    const { isAuthenticated } = useAuth0();
  return (

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src='' />
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


             {/*  <div onClick={handleCloseUserMenu}> */}

              { isAuthenticated?
              (
                 <>
                  <Profile/>
                <LogoutButton/>
                 </>
              )
              :
                <LoginButton/>
               }
               
              
     
             


            {/*   {settings.map((setting) => (
                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
              
                 <ListItemButton component={Link} to={setting.path}>
                  <Typography textAlign="center">{setting.name}</Typography>  
                <ListItemText primary={setting.name} /> 
              </ListItemButton>
                </MenuItem>
              ))} */}


            </Menu>
          </Box>

  );
}




/* 

   {arrayNav2.map((item2,index) => (
            <ListItem key={item2.name} disablePadding>
              <ListItemButton component={Link} to={item2.path}>
                <ListItemIcon>
          
               {item2.icon}
                </ListItemIcon>
                <ListItemText primary={item2.name} />
              </ListItemButton>
            </ListItem>
          ))}
*/