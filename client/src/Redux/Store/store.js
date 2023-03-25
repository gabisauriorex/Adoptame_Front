import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../Reducer";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

/* 
import {
  legacy_createStore as createStore,
  applyMiddleware,
  //combineReducers,
  compose,
} from "redux";

//import genresReducer from "../Reducer/reducers_genres";
import rootReducerVideogames from "../Reducer/reducers_videogames";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = rootReducerVideogames;
const middleware = composeEnhancers(applyMiddleware(thunk));

export default createStore(rootReducer, middleware);


*/
