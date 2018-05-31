import { combineReducers } from 'redux';
import { fake } from './fake-reducer';
import { houseReducer } from './house-reducer';

const rootReducer = combineReducers({
  fake,
  houseReducer
});


export default rootReducer;
