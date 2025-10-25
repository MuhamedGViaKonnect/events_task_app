// rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';

import cardsReducer from './slices/cardsSlice';
const rootReducer = combineReducers({
  cards: cardsReducer,
});

export default rootReducer;
