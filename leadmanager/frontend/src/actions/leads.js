import axios from 'axios';
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS, CREATE_MESSAGES } from './types';
import { createMessage, returnErrors } from './messages';

export const getLeads = () => dispatch => {
  axios.get('/api/leads')
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      })
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const deleteLead = id => dispatch => {
  axios.delete(`/api/leads/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_LEAD,
        payload: id
      })
      dispatch(createMessage({ deleteLead: 'Lead Deleted' }))
    }).catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      }
      dispatch({
        type: GET_ERRORS,
        payload: errors
      })
    })
}

export const addLead = lead => dispatch => {
  axios.post(`/api/leads/`, lead)
    .then(res => {
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      })
      dispatch(createMessage({ createLead: 'Lead Created' }))
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};