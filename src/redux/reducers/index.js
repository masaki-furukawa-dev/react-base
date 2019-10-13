import { combineReducers } from 'redux';
import { 
  login,
 } from './General';

const appReducer = combineReducers({
  login,
});

//clear all store data
const rootReducer = (state, action) => {
//  if(action.type.indexOf("@@redux") >= 0) return {};
 // if(action.type.indexOf("persist/PERSIST") >= 0) return {};
  //if(action.type.indexOf("persist/REHYDRATE") >= 0) return {};
  return appReducer(state, action);
}

export default rootReducer;