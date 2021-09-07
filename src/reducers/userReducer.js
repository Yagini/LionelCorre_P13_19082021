/*import { userConstants } from "../constants/userConstants";
console.log("1- reducer call constants: " + userConstants);

let user = JSON.parse(localStorage.getItem("user"));
console.log("2- reducer user: " + user);
const initialState = user ? { loggedIn: true, user } : {};
console.log("3- reducer initial state: " + initialState);

export function userAuth(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      console.log("4-a reducer request");
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_SUCESS:
      console.log("4-b reducer success");
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      console.log("4-c reducer failure");
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GET_USER:
      return {
        ...state,
        loading: true,
        items: action.users,
      };
    default:
      return state;
  }
}*/
