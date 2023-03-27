import axios from "axios";

//conexion entre front y back

import { POST_PET_SUCCESS, POST_PET_ERROR, GET_DETAIL_PETS } from "../ActionsTypes/actions_types";

export const postPet = (data) => {
  return (dispatch) => {
    axios.post('pets', data)
      .then((response) => {
        dispatch({ type: POST_PET_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: POST_PET_ERROR, payload: error });
      });
  };
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
