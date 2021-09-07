import { userConstants2 } from "./constants";

console.log(userConstants2);

const initialState = { isAutenticate: false, user: {} };

export const isAuthenticate = (state = initialState, action) => {
  switch (action.type) {
    case userConstants2.LOGIN:
      console.log("3 - userLogin - Sucess");
      return {
        ...state,
        isAuthenticate: true,
        user: action.user,
      };

    case userConstants2.LOGOUT:
      console.log("4 - userLogout");
      return state;

    default:
      return state;
  }
};
