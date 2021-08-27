import userConstants from "../constants/userConstants";
import { userService } from "../services/userService";

export const userActions = {
    login,
}

function login(username, password) {
    return dispatch => {
        userService.login(username, password)
    }
}