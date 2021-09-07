import axios from "axios";

export const userService = {
  login,
  //logout,
  //getUser,
};

const baseURL = "http://locahost:3001/api/v1/user";

function login(email, password) {
  return axios({
    method: "POST",
    url: `${baseURL}/login`,
    data: {
      email,
      password,      
    },
  })
    .then((user) => {
      localStorage.setItem("user", JSON.stringify(user))
      return user;
    })
    .catch((error) => {
      console.error(error);
    });
}

/*function login(email, password) {
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${baseURL}/login`, request)
    .then(handleResponse)
    .then((user) => {
      localStorage.setItem("user", JSON.stringify(user));
      console.log(user);
      return user;
    });
}

function logout() {
  localStorage.removeItem("user");
}

function getUser() {
  const request = {
    method: "GET",
    headers: getUserToken(),
  };

  return fetch(`${baseURL}/profile`, request).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function getUserToken() {
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
}

/*function login(email, password) {
  return axios({
    method: "post",
    url: `${baseURL}/login`,
    data: {
      email: email,
      password: password,
    },
  })
    .then((response) => {
      console.log(response);
    })
    .then((user) => {
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    })
    .catch((error) => console.log(error));
}
console.log("1 " + login())*/
