import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import peopleReducer from "./peopleReducer";
import placesReducer from "./placesReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  people: peopleReducer,
  places: placesReducer
});

export default rootReducer;
