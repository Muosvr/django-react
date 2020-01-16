import { CREATE_MESSAGES } from './types';

export const createMessage = msg => {
  return {
    type: CREATE_MESSAGES,
    payload: msg
  }
}