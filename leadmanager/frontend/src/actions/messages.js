import { CREATE_MESSAGES } from './types';

export const createMessage = msg => {
  return {
    type: CREATE_MESSAGES,
    payload: msg
  }
}

export const returnErrors = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status }
  }
}