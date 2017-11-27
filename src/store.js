import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Reducer} from './reducers/index';

const store = createStore(
    Reducer,
    applyMiddleware(thunk));

store.getState()

export default store;
