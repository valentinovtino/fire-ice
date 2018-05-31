import { combineReducers } from 'redux';
import { houseReducer } from './house-reducer';

const rootReducer = combineReducers({
  houses: houseReducer
});


export default rootReducer;
