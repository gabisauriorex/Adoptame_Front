import axios from "axios";


//conexion entre front y back

import { FORM_SUCCESS, GET_DETAIL_PETS } from "../ActionsTypes/actions_types";

export const postPet = (formData) => {
  return async function (dispatch){
    axios.post("pets", formData)
      .then(() =>{
        dispatch({
          type: FORM_SUCCESS,
          payload: formData
        })
      })
      .catch((error) =>{
        console.log(error)
      })
  }
};

export function getDetails(id) {
  if (id) {
    return async function (dispatch) {
      try {
        const response = await axios.get(`pets/${id}`);
        console.log(response.data);
        dispatch({
          type: GET_DETAIL_PETS,
          payload: response.data,
        });
      } catch (error) {
        console.log({ message: error.message });
      }
    };
  }
}

/* 


modo promesas
export function getVideogames() {
  return function (dispatch) {
    axios
      .get("videogames/")

      .then((r) => {
        dispatch({
          type: GET_VIDEOGAMES,
          payload: r.data,
        });
      })

      .catch((error) => {
        console.error("Error in getVideogames: ", error);
      });

    // console.log(r.data);
  };
}

*/
