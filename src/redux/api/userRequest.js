import axios from "axios";

const userRequest = (payload) => {
  console.log(payload);
  return axios.request({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
  });
};

export default userRequest;

// export const registerUserService = (request) => {
//   const REGISTER_API_ENDPOINT = 'http://localhost:4000/api/v1/register';

//   const parameters = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(request.user)
//   };

//   return fetch(REGISTER_API_ENDPOINT, parameters)
//     .then(response => {
//       return response.json();
//     })
//     .then(json => {
//       return json;
//     });
// };

// export const loginUserService = (request) => {
//   const LOGIN_API_ENDPOINT = 'http://localhost:4000/api/v1/login';

//   const parameters = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(request.user)
//   };

//   return fetch(LOGIN_API_ENDPOINT, parameters)
//     .then(response => {
//       return response.json();
//     })
//     .then(json => {
//       return json;
//     });
// };
