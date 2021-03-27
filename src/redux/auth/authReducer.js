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
  [authAction.getCurrentUserSuccess]: (state, { payload }) => payload,
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
  [authAction.getCurrentUserError]: (state, { payload }) => payload,
});

const isLogin = createReducer(false, {
  [authAction.registerSuccess]: () => true,
  [authAction.loginSuccess]: () => true,
  [authAction.getCurrentUserSuccess]: () => true,
  [authAction.registerError]: () => false,
  [authAction.loginError]: () => false,
  [authAction.getCurrentUserError]: () => false,
  [authAction.logoutSuccess]: () => false,
});

export default combineReducers({
  user,
  token,
  isLogin,
  error,
});
