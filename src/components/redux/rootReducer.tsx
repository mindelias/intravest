import { combineReducers } from "redux";
import AuthReducer from "./Auth/Auth.reducer";
import AlertReducer from "./alert/AlertReducer"

export default combineReducers({ Auth: AuthReducer,Alert:AlertReducer });
