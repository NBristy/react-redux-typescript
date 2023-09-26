import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../pages/home/HomeReducer'; // Import your home reducer

const rootReducer = combineReducers({
  home: homeReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
