const getIsAuthentificated = state => state.auth.isLogin;
const getUser = state => state.auth.user;

export default {
  getIsAuthentificated,
  getUser,
};
