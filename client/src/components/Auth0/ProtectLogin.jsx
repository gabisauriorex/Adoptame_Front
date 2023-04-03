import { Navigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import {Notify} from '../Notificacion/Notify'
const ProtectLogin = ({ children }) => {
    const {isAuthenticated,loginWithRedirect} = useAuth0()
    console.log(isAuthenticated)
    if (isAuthenticated) return children;

    else 
    {
        Notify('info', "Debe estar logueado para poder ingresar", 'botton-end', 4000)
    
        setTimeout(()=>{
            loginWithRedirect();
        },3000)
       
    }
    
    
}

export default ProtectLogin;





/* <Navigate to="/" */