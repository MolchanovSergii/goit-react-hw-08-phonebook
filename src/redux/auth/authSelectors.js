const selectLoggedIn = state => state.auth.isLoggedIn;
const selectUserName = state => state.auth.user.name;

const authSelectors = {
  selectLoggedIn,
  selectUserName,
};

export default authSelectors;
