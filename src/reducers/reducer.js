import { SET_ROBOTS, SET_SEARCH_FIELD, SET_LOADING } from "../actions/types";

const initialState = {
  robots: [],
  searchField: "",
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ROBOTS:
      return { ...state, robots: action.payload };
    case SET_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
