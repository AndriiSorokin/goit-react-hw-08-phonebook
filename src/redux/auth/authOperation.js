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
  try {
    dispatch(authAction.loginRequest());
    const result = await axios.post('users/login', userData);
    token.set(result.data.token);
    dispatch(authAction.loginSuccess(result.data));
  } catch (error) {
    dispatch(authAction.loginError(error.message));
  }
};

export const logOut = () => async dispatch => {
  dispatch(authAction.logoutRequest());
  try {
    await axios.post('users/logout');
    token.unset();
    dispatch(authAction.logoutSuccess());
  } catch (error) {
    dispatch(authAction.logoutError(error.message));
  }
}; 
