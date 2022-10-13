import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import Reducer from './cases';

const rootReducer = combineReducers({
  cases: Reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
