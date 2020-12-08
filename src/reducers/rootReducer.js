import { combineReducers } from "redux";
// import restaurantReducer from './restaurantReducer'
// import manageReview from './manageReview'
import authReducer from '/authReducer'

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;