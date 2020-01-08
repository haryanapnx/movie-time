import * as constants from "../constants";
import { apiCall } from "../../services/apiCall";

export function setLoading(bool) {
  return {
    type: constants.MOVIES_LOADING,
    bool
  };
}

export const getMovies = () => async dispatch => {
  dispatch(setLoading(true));
  const res = await dispatch(
    apiCall({
      method: "get",
      url: `/movie/now_playing?api_key=e851c47c40552466a1a415867974f98a`
    })
  );
  if (res) {
    const { results } = res.data;
    dispatch(setLoading(false));
    return dispatch({
      type: constants.MOVIES_GET,
      payload: results
    });
  } else {
    dispatch(setLoading(false));
  }
  //some function
};
export const searchMovies = (query) => async dispatch => {
  dispatch(setLoading(true));
  const res = await dispatch(
    apiCall({
      method: "get",
      url: `/search/movie?api_key=e851c47c40552466a1a415867974f98a&query=${query}`
    })
  );
  if (res) {
    const { results } = res.data;
    dispatch(setLoading(false));
    return dispatch({
      type: constants.MOVIES_SET,
      payload: results
    });
  } else {
    dispatch(setLoading(false));
  }
  //some function
};
