
import {
    FILTER_BY_ANIMAL,
    FILTER_BY_COLOR,
    FILTER_BY_SIZE,
    FILTER_BY_BREED ,
    FILTER_BY_IDENT,
  } from '../ActionsTypes/actions_types'
  
  

//filtros
export const filterByBreed = (payload) => {
    return {
      type: FILTER_BY_BREED,
      payload,
    };
  };
  
  export const filterByAnimal = (payload) => {
    return {
      type: FILTER_BY_ANIMAL,
      payload,
    };
  };
  
  export const filterBySize = (payload) => {
    return {
      type: FILTER_BY_SIZE,
      payload,
    };
  };
  
  export const filterByColor = (payload) => {
    return {
      type: FILTER_BY_COLOR,
      payload,
    };
  };
  
  export const filterByIdent = (payload) => {
    return {
      type: FILTER_BY_IDENT,
      payload,
    };
  };
  