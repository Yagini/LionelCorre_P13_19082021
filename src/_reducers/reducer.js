import { userConstants } from "../_constants/constants";

const initialState = {};

/**
 * Authentication reducer use for store the token of connected user
 * @param {object} state initialState is empty
 * @param {object} action
 * @returns new state
 */
export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN:
      return {
        ...state,
        token: action.token,
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
};

/**
 * User reducer store the user params
 * @param {object} state initialState is empty
 * @param {object} action user object
 * @returns new state
 */
export const user = (state = {}, action) => {
  switch (action.type) {
    case userConstants.GET_USER: {
      return {
        ...state,
        user: action.user,
      };
    }
    case userConstants.LOGOUT:
      return {};
    case userConstants.EDIT: {
      return {
        ...state,
        user: { firstName: action.firstName, lastName: action.lastName },
      };
    }
    default:
      return state;
  }
};
