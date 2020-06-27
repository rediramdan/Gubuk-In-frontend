import { combineReducers } from "redux";
import book from "./bookReducer";
import auth from "./authReducer";

const rootReducer = combineReducers({
  book,
  auth,
});

export default rootReducer;