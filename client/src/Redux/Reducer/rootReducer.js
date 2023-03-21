import { GET_DETAIL_PETS, GET_PETS,  POST_SUCCESS, } from "../ActionsTypes/actions_types";

import { 

  FILTER_BY_BREED,
  FILTER_BY_ANIMAL, 
  FILTER_BY_COLOR,
  FILTER_BY_IDENT,
  FILTER_BY_SIZE,
} from "../ActionsTypes/actions_types";



const initialState = {
  pets: [],
  detail:[],
  formData:{}

};

export default function rootReducer(state = initialState, action) {
  // en esta accion mando todos los videogames al arrglo vacio
  switch (action.type) {
    case GET_PETS:
      return {
        ...state,
        pets: action.payload,
      };
    case GET_DETAIL_PETS:
      return {
        ...state,
        detail: action.payload,
      };
 
     case POST_SUCCESS:
     return {
      ...state
     } 
 


     //FILTROS
    case FILTER_BY_BREED:
      const fil_breed = [...state.pets].filter( e => e.breed.toLowerCase() = e.action.payload.toLowerCase())
      //console.log(fil_breed);
      return{
        ...state,
        pets: fil_breed
      };
    case FILTER_BY_SIZE:
      const size_pet = state.pets;
      const fil_size=null;
      if (action.payload === 'grande') {
         fil_size = size_pet.filter( e => e.height >= 45)
      } else if (action.payload === 'chico') {
        fil_size = size_pet.filter( e => e.height <= 25)
      } else {
         fil_size = size_pet.filter( e => e.height > 25 && e.height < 45)
      }
      // console.log(fil_size);
      return {
        ...state,
        pets: fil_size
      };
      case FILTER_BY_COLOR:
        const fil_color = [...state.pets].filter( e => e.color.toLowerCase() = e.action.payload.toLowerCase())
      //console.log(fil_color);
      return{
        ...state,
        pets: fil_color
      };
      case FILTER_BY_ANIMAL:
        const fil_animal = [...state.pets].filter( e => e.animal.toLowerCase() = e.action.payload.toLowerCase())
      //console.log(fil_animal);
      return{
        ...state,
        pets: fil_animal
      };
      case FILTER_BY_IDENT:
        const fil_ident = [...state.pets].filter( e => e.identified.toLowerCase() = e.action.payload.toLowerCase())
      //console.log(fil_ident);
      return{
        ...state,
        pets: fil_ident
      };
      

    //⬇️⬇️ CASE FORM....
    // case POST_REQUEST:
    //   return{
    //     ...state,
    //     isLoading: true,
    //     error: null,
    //   };
    // case POST_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     form: action.payload,
    //   }
    // case POST_FAILURE:
    //   return{
    //     ...state,
    //     isLoading: false,
    //     error: action.payload
    //   }
//---!FORM!
    default:
      return state;
  }
}
