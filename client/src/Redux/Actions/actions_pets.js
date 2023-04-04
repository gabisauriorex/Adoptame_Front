import axios from "axios";

//conexion entre front y back

import { FORM_SUCCESS, GET_DETAIL_PETS } from "../ActionsTypes/actions_types";

export const postPet = (formData) => {
	return async function (dispatch) {
		axios
			.post("/api/pets", formData)
			.then(() => {
				dispatch({
					type: FORM_SUCCESS,
					payload: formData,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export function getDetails(id) {
	if (id) {
		return async function (dispatch) {
			try {
				const response = await axios.get(`/api/pets/${id}`);
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
