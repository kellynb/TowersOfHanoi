import {createStore} from 'redux';
import state from './state'
import reducers from './Reducers/reducers'

const store = createStore(reducers, state);

export default store;