import { GET_DETAIL_PETS, POST_PET_ERROR, POST_PET_SUCCESS } from "../ActionsTypes/actions_types";

const initialState = {
  detail: [],
  formData: [],
  error: null,
};

function pets_reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DETAIL_PETS:
      return {
        ...state,
        detail: action.payload,
      };

      case POST_PET_SUCCESS:
        return {
          ...state,
          pets: [...state.pets, action.payload],
          error: null,
        };
      case POST_PET_ERROR:
        return {
          ...state,
          error: action.payload,
        };

    default:
      return state;
  }
}

export default pets_reducer;
