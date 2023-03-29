import {
  GET_PETS,
  FILTER_BY_ANIMAL,
  FILTER_BY_COLOR,
  FILTER_BY_SIZE,
  FILTER_BY_BREED,
  FILTER_BY_IDENT,
} from "../ActionsTypes/actions_types";

/* import {Notify} from '../../components/Notificacion/Notify'
import { useAuth0 ,withAuthenticationRequired} from "@auth0/auth0-react";



  const { isAuthenticated ,
     getAccessTokenSilently

  } = useAuth0();


    if(isAuthenticated)
    {
         const token = await getAccessTokenSilently();
    } 
    else{
        Notify('warning','Su usuario no esta autentificado debe loguearse','botton-end',3000 )
    }
   
 */


//===============ARRAY DE RAZAS==============
export const razas = [
  "todos",
  "Labrador",
  "Bulldog",
  "Boxer",
  "Caniche",
  "Pomerania",
  "Pug",
  "Forterrier",
  "Cocker",
  "Pastor",
  "Retriever",
  "Dalmata",
  "Husky",
  "Pitbull",
  "Doberman",
  "Dogo",
  "Chihuahua",
  "Gran Danes",
  "Mastín",
  "Perro Callejero",
  "               ",
  "Persa",
  "Siames",
  "Azul ruso",
  "Angora",
  "Siberiano",
  "Maine Coon",
  "Gato Callejero",
  "               ",
  "Otro",
];

export const tamanio = ["todos", "Grande", "Mediano", "Chico"];
export const color = [
  "todos",
  "Blanco",
  "Negro",
  "Cafe oscuro",
  "Cafe claro",
  "Amarillo",
  "Gris",
  "Otro",
];

//filtros
export const filterByBreed = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FILTER_BY_BREED,
        payload,
      });
    } catch (error) {
      console.log({ message: error.message });
    }
  };
};

//=====================
export const filterByAnimal = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FILTER_BY_ANIMAL,
        payload,
      });
    } catch (error) {
      console.log({ message: error.message });
    }
  };
};

export const filterBySize = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FILTER_BY_SIZE,
        payload,
      });
    } catch (error) {
      console.log({ message: error.message });
    }
  };
};

export const filterByColor = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FILTER_BY_COLOR,
        payload,
      });
    } catch (error) {
      console.log({ message: error.message });
    }
  };
};

export const filterByIdent = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FILTER_BY_IDENT,
        payload,
      });
    } catch (error) {
      console.log({ message: error.message });
    }
  };
};

export const getPets = () => {
  return async function (dispatch) {
    try {
      let response = await axios.get("pets"
      );
    
      dispatch({
        type: GET_PETS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error in get Pets: ", error);
    }
  };
};
