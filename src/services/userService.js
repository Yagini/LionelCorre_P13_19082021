import axios from "axios";

export const userService = {
  login,
  logout,
  getUser,
  editUser,
};

const baseURL = `${process.env.REACT_APP_API_URL}/api/v1/user`;

/**
 * Login function for fetch JWToken
 * @param {string} email the user email
 * @param {string} password the user password
 * @returns token
 */
function login(email, password) {
  return axios({
    method: "POST",
    url: `${baseURL}/login`,
    data: {
      email,
      password,
    },
  })
    .then((response) => {
      localStorage.setItem("token", response.data.body.token);      
      return response.data.body.token;
    })
    .catch((error) => {
      console.error(error);
    });
}

/**
 * Clean localStorage when the user disconnect
 */
function logout() {
  localStorage.removeItem("token");
}

/**
 * Get all information about the user
 * @returns {object}
 */
function getUser() {
  let token = localStorage.getItem("token");
  return axios({
    method: "POST",
    url: `${baseURL}/profile`,
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response) => {
      return response.data.body;
    })
    .catch((error) => {
      console.error(error);
    });
}

/**
 * Put the modification of user name in the Api
 * @param {string} firstName new firstname
 * @param {string} lastName new lasName
 * @returns
 */
function editUser(firstName, lastName) {
  let token = localStorage.getItem("token");
  return axios({
    method: "PUT",
    url: `${baseURL}/profile`,
    headers: { Authorization: `Bearer ${token}` },
    data: {
      firstName,
      lastName,
    },
  })
    .then((response) => {
      return response.data.body;
    })
    .catch((error) => {
      console.error(error);
    });
}
