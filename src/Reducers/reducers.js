import {combineReducers} from 'redux';

const clicks = (state=0, action) =>{
    switch (action.type) {
      case "INCREASE_COUNTER":
        return state+1;
      case "ZERO_COUNTER":
        return state = 0;
      case "DECREASE_COUNTER":
        return state-1;
      default:
        return state
    }
  }

let reducers = combineReducers({clicks})

export default reducers