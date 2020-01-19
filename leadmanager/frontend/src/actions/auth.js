import axios from 'axios';
import { returnErrors } from './messages';
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types';

export const tokenConfig = (getState) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': (
        `Token ${getState().auth.token || localStorage.getItem('token')}`
      )
    }
  }
}

// Get user
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING })

  axios.get('/api/auth/user', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({ type: AUTH_ERROR })
    })
}

// Login
export const login = (username, password) => (dispatch) => {

  const body = JSON.stringify({ username, password })
  const config = {
    'headers': {
      'Content-Type': 'application/json'
    }
  }

  axios.post('/api/auth/login', body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({ type: LOGIN_FAIL })
    })
}

// Register
export const register = ({ username, email, password }) => (dispatch) => {

  const body = JSON.stringify({ username, email, password })
  const config = {
    'headers': {
      'Content-Type': 'application/json'
    }
  }

  axios.post('/api/auth/register', body, config)
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err);
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({ type: REGISTER_FAIL })
    })
}


// Logout
export const logout = () => (dispatch, getState) => {
  console.log('logging out');
  console.log('tokenConfig', tokenConfig(getState));
  axios.post('/api/auth/logout', null, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: LOGOUT_SUCCESS,
      })
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
    })
}