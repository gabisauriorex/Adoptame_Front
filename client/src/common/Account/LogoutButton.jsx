import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {GroupAdd,Lock} from '@mui/icons-material';
import {ListItemButton,ListItemIcon,ListItemText}from '@mui/material'
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
             <ListItemButton onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >
                <ListItemIcon>
                 <Lock/>
                </ListItemIcon>
               <ListItemText primary='Logout' /> 
              </ListItemButton>
);
};

export default LogoutButton;