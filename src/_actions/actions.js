import { userService } from "../services/userService";
import { userConstants } from "../_constants/constants";

export const userActions = {
  login,
  logout,
  getUser,
  editUser,
};

/**
 * Thunk dispatch the loading and fetch API for get Token
 * @param {String} email the email of the user
 * @param {String} password the password of the user
 * @returns action for updading the store
 */
function login(email, password) {
  return (dispatch) => {
    userService.login(email, password).then((token) => {      
      dispatch(success(token));      
    });
  };

  function success(token) {
    return { type: userConstants.LOGIN, token };
  }
}

/**
 * Thunk for logout the user
 * @returns action for updading the store
 */
function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

/**
 * Thunk dispatch for fetch the user on API with the token
 * @returns action for updating the store
 */
function getUser() {
  return (dispatch) => {
    userService.getUser().then((user) => dispatch(success(user)));
  };

  function success(user) {
    return { type: userConstants.GET_USER, user };
  }
}

/**
 * Thunk dispatch the put change on the user first and last name on the API
 * @param {String} firstName
 * @param {String} lastName
 * @returns action for the reducer
 */
function editUser(firstName, lastName) {
  return (dispatch) => {
    userService.editUser(firstName, lastName).then(({ firstName, lastName }) => {
      dispatch(success(firstName, lastName));
    });
  };

  function success(firstName, lastName) {
    return { type: userConstants.EDIT, firstName, lastName };
  }
}
