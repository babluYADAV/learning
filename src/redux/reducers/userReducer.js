import { SET_USER, SET_USER_FAIL } from "../constants";

const initialState = {
  user: [],
  error: "",
  loading: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action;
      return {
        ...state,
        loading: false,
        user,
      };
    case SET_USER_FAIL:
      const { error } = action;
      return {
        ...state,
        error,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
