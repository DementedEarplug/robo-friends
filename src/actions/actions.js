import { SET_SEARCH_FIELD, SET_ROBOTS, SET_LOADING } from "./types";

// This paradigms comes from redux thunk allows to use map actions to props in components
// instead of having to import dispatch, this enables making api calls directly on actions.
export const setSearchField = (text) => (dispatch) => {
  dispatch({ type: SET_SEARCH_FIELD, payload: text });
};

export const setRobots = () => async (dispatch) => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const robots = await res.json();
    dispatch({
      type: SET_ROBOTS,
      payload: robots,
    });
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 200);
  } catch (error) {
    console.log("Error fetching users.");
    console.log(error);
  }
};

export const setLoading = (loading) => dispatch =>{
  dispatch({
    type: SET_LOADING,
    payload: loading
  })
}