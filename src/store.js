import {createStore, combineReducers} from 'redux';
import {Selectedreducer,Textreducer} from './Reducers';

const store=createStore(combineReducers({Selectedreducer, Textreducer}) );

export default store;