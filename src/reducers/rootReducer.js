// contains all teh reducers of the app
import { combineReducers } from "redux";
import signUpReducer from './signUpReducer';
import loginReducer from './loginReducer';
import postQnReducer from './postQnReducer';
import viewAllQnsReducer from './viewAllQnsReducer'

export default combineReducers({
	signUpReducer,
	loginReducer,
	postQnReducer,
	viewAllQnsReducer
});
