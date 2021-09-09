/*import { userConstants } from "../constants/userConstants";
import { alertActions } from "./alertActions";
import { userService } from "../services/userService";
import { createBrowserHistory } from "history";

export const login = (email, password, from) => {
  const history = createBrowserHistory()
  return (dispatch) => {
    dispatch(request({ email }));

    userService.login(email, password).then(
      (user) => {
        dispatch(success(user));
        history.push(from);
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
};

export const logout = () => {
  userService.logout();
  return { type: userConstants.LOGOUT };
};*/
