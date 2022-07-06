import { GET_USER, SET_USER, SET_USER_FAIL } from "../constants";

const getUser = (payload) => ({
  type: GET_USER,
  payload,
});

const setUser = (user) => ({
  type: SET_USER,
  user,
});
const getUserFailed = (error) => ({
  type: SET_USER_FAIL,
  error,
});

export { getUser, setUser, getUserFailed };
