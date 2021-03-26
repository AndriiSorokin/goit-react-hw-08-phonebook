import axios from 'axios';
import authAction from './authAction';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerOperation = userData => async dispatch => {
  dispatch(authAction.registerRequest());
  try {
    const result = await axios.post('/users/signup', userData);
    token.set(result.data.token);
    dispatch(authAction.registerSuccess(result.data));
  } catch (error) {
    dispatch(authAction.registerError(error.message));
  }
};
export const loginOperation = userData => async dispatch => {
  dispatch(authAction.loginRequest());
  try {
    const result = await axios.post('/users/login', userData);
    token.set(result.data.token);
    dispatch(authAction.loginSuccess(result.data));
  } catch (error) {
    dispatch(authAction.loginError(error.message));
  }
};

export const logOut = tkn => async dispatch => {
  dispatch(authAction.logoutRequest());
  try {
    await axios.post('/users/logout', null, token.set(tkn));
    token.unset();
    dispatch(authAction.logoutSuccess());
  } catch (error) {
    dispatch(authAction.logoutError(error.message));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(authAction.getCurrentUserRequest());
  try {
    const result = await axios.get('user/current');
    dispatch(authAction.getCurrentUserSuccess(result.data));
  } catch (error) {
    dispatch(authAction.getCurrentUserError(error.message));
  }
};
