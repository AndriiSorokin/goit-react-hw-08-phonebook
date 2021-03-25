import axios from 'axios';
import authAction from './authAction';

export const registerOperation = userData => async dispatch => {
  dispatch(authAction.registerRequest());
  try {
    const result = await axios.post(
      'https://goit-phonebook-api.herokuapp.com/users/signup',
      userData,
    );
    dispatch(authAction.registerSuccess(result.data));
  } catch (error) {
    dispatch(authAction.registerError(error.message));
  }
};
// export const loginOperation = userData => async dispatch => {
//   try {
//     dispatch(loaderOn());
//     const result = await axios.post(
//       'https://goit-phonebook-api.herokuapp.com/users/login',
//       userData,
//     );
//     dispatch(setToken(result.data.token));
//   } catch (error) {
//     dispatch(setError('Bad server'));
//   } finally {
//     dispatch(loaderOff());
//   }
// };

// export const logOut = token => async dispatch => {
//   try {
//     dispatch(loaderOn());
//     const result = await axios({
//       url: 'https://goit-phonebook-api.herokuapp.com/users/logout',
//       method: 'post',
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     console.log('logout', result);
//     dispatch(resetToken());
//   } catch (error) {
//     dispatch(setError('Bad server'));
//   } finally {
//     dispatch(loaderOff());
//   }
// };
