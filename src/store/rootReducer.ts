// rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';

import settingReducer from './slices/settingSlice';
const rootReducer = combineReducers({
  setting: settingReducer,
});

export default rootReducer;
