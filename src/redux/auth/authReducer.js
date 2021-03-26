import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authAction from '../auth/authAction';

const initialUserState = {
  name: null,
  email: null,
};

const user = createReducer(initialUserState, {
  [authAction.registerSuccess]: (state, { payload }) => payload.user,
  [authAction.loginSuccess]: (state, { payload }) => payload.user,
  [authAction.logoutSuccess]: () => initialUserState,
});

const token = createReducer(null, {
  [authAction.registerSuccess]: (state, { payload }) => payload.token,
  [authAction.loginSuccess]: (state, { payload }) => payload.token,
  [authAction.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [authAction.registerError]: (state, { payload }) => payload,
  [authAction.loginError]: (state, { payload }) => payload,
  [authAction.logoutError]: (state, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  error,
});
