import {createStore, combineReducers,applyMiddleware} from 'redux';
import {Selectedreducer,Textreducer,thunkReducer} from './Reducers';
import thunk from 'redux-thunk';

const store=createStore(combineReducers({Selectedreducer, Textreducer,thunkReducer}),applyMiddleware(thunk) );

export default store;