import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authAction from '../auth/authAction';

const initialUserState = {
  name: null,
  email: null,
};

const user = createReducer(initialUserState, {
  [authAction.registerSuccess]: (state, { payload }) => payload.user,
});

const token = createReducer(null, {
  [authAction.registerSuccess]: (state, { payload }) => payload.token,
});

const error = createReducer(null, {
  [authAction.registerError] : (state, {payload}) => payload
});

export default combineReducers({
  user,
  token,
  error,
});
