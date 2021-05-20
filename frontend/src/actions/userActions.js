import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from '../constants/userConstants.js'
import axios from 'axios'

export const listUsers = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST })
    const { data } = await axios.get('/api/profile')

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
