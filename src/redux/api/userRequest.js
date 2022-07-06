import axios from "axios";

const userRequest = (payload) => {
  console.log(payload);
  return axios.request({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
  });
};

export default userRequest;
