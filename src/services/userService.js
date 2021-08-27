import axios from "axios";

export const userService = {
  login,
  //logout,
  //editProfile,
};

const baseURL = "http://locahost:3001/user/";

function login({username, password}) {
  axios({
    method: "post",
    url: `${baseURL}login`,
    data: {
        username,
        password
    },
  })
  .then((response) => {
      if (response.data){
        console.log(response.data);
      }
  });
}
