import { userConstants } from "./constants";

let token = JSON.parse(localStorage.getItem("token"));

const initialState = { isAuthenticated: false, token };

export const isAuthenticated = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN:
      console.log("3 - userLogin - Sucess");
      return {
        ...state,
        isAuthenticated: true,
        token: action.token,
      };

    case userConstants.LOGOUT:
      console.log("6 - userLogout");
      return {
        
      };

    default:
      return state;
  }
};

export const user = (state= {}, action) => {
  switch (action.type) {
    case userConstants.GET_USER:{
      return {
        user: action.user
      }
    }
    default:
      return state
  }
}
