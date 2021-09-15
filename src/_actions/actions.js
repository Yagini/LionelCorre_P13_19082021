import { userService } from "../services/userService";
import { userConstants } from "../_constants/constants";

export const userActions = {
  login,
  logout,
  getUser,
  editUser,
};

function login(email, password) {
  return (dispatch) => {
    userService.login(email, password).then((token) => {
      dispatch(success(token));
      console.log("4- action dispatch", token);
    });
  };

  function success(token) {
    return { type: userConstants.LOGIN, token };
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function getUser() {
  return (dispatch) => {
    userService.getUser().then((user) => dispatch(success(user)));
    console.log("B - action dispatch");
  };

  function success(user) {
    return { type: userConstants.GET_USER, user };
  }
}

function editUser(firstName, lastName) {
  return (dispatch) => {
    userService.editUser(firstName, lastName).then((user) => {
      dispatch(success(user));
    });
  };

  function success(user) {
    return { type: userConstants.EDIT_USER, user }
  }
}

/*export const userActions = {
  login,
  logout,
  edit,
};

function login(isAuthenticate) {
  return {
    type: userConstants2.LOGIN,
    isAuthenticate,
  };
}

function logout(isAuthenticate) {
  return {
    type: userConstants2.LOGOUT,
    isAuthenticate,
  };
}

function edit(user) {
  return {
    type: userConstants2.EDIT,
    user,
  };
}*/
