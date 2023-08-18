import { combineReducers } from "redux";
import adminLoginAuthReducer from "./login_auth"


const rootReducer = combineReducers({
    adminLogin: adminLoginAuthReducer,

});

export default rootReducer;