import { userService } from "../services/userService";
import { userConstants2 } from "./constants";

export const userActions = {
  login,
  logout,
  edit,
};

function login(email, password) {
  return (dispatch) => {
    userService.login(email, password).then((user) => {
      dispatch(success(user));      
    });
  };
}

function success(user) {
  return { type: userConstants2.LOGIN, user };
}

function logout() {
  return {
    type: userConstants2.LOGOUT,
  };
}

function edit(firstName, lastName) {
  return {
    type: userConstants2.EDIT,
    firstName,
    lastName,
  };
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
