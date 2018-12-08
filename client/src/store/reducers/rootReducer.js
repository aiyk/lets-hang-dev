import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import peopleReducer from "./peopleReducer";
import placesReducer from "./placesReducer";
import profileReducer from "./profileReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  people: peopleReducer,
  places: placesReducer,
  profile: profileReducer
});

export default rootReducer;
