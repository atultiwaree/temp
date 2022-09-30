import decred from "./decs/decred";
import incred from "./incs/incred";
import { combineReducers } from "redux";

export default combineReducers({
  inc: incred,
  dec: decred,
});
