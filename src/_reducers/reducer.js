import { userConstants } from "../_constants/constants";

let token = JSON.parse(localStorage.getItem("token"));

const initialState = { token };

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN:
      console.log("3 - Reducer userLogin - Sucess");
      return {
        ...state,
        token: action.token,
      };
    case userConstants.LOGOUT:
      console.log("6 - userLogout");
      return {};
    default:
      return state;
  }
};

export const user = (state = {}, action) => {
  switch (action.type) {
    case userConstants.GET_USER: {
      console.log("C - reducer getUser");
      return {
        user: action.user,
      };
    }
    case userConstants.LOGOUT:
      console.log("6 - userLogout");
      return {};
    case userConstants.EDIT: {
      console.log("reducer editUser");
      return {
        ...state,
        firstName: action.firstname,
        lastName: action.lastName,
      };
    }
    default:
      return state;
  }
};
