/* import { useAuth0 } from '@auth0/auth0-react';

export const AuthWrapper = () => {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();

    return new Promise((resolve, reject) => {
        if (!isAuthenticated) {
            reject('El usuario no está autenticado');
        } else {
            getAccessTokenSilently()
                .then((accessToken) => resolve(accessToken))
                .catch((error) => reject(error));
        }
    });
};
 */



 import { useAuth0 } from '@auth0/auth0-react';
import { Notify } from '../../components/Notificacion/Notify'

 export const getAccessToken = async () => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    try {
        if (!isAuthenticated) {
            loginWithRedirect(); // Redirecciona a la página de login
            return null;
        }
        const accessToken = await getAccessTokenSilently();
        return accessToken;
    } catch (error) {
        console.log(error);
        Notify('error', 'Su usuario no esta autenticificado debe loguearse', 'center', 3000);
        setTimeout(() => {
            loginWithRedirect(); // Redirecciona a la página de login
        }, 3000);
    }
};
