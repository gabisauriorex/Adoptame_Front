import axios from "axios";


//conexion entre front y back

import { POST_SUCCESS, GET_DETAIL_PETS } from "../ActionsTypes/actions_types";

export const postPet = (payload) => {
  return async (dispatch) => {
    // console.log(payload)
    try {
      await axios.post("pets", payload);
      dispatch({
        type: POST_SUCCESS,
        //payload: response.data,
      });
    } catch (error) {
      console.log({ message: error.message });
    }
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
