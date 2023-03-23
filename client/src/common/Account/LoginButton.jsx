import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {GroupAdd,Lock} from '@mui/icons-material';
import {ListItemButton,ListItemIcon,ListItemText}from '@mui/material'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
              <ListItemButton onClick={() => loginWithRedirect()} >
                <ListItemIcon>
                 <Lock/>
                </ListItemIcon>
               <ListItemText primary='Login' /> 
              </ListItemButton>
      
  )


};

export default LoginButton;