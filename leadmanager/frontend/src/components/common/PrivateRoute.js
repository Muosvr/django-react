import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const privateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isLoading) {
          console.log('auth.isLoading', auth.isLoading)
          return <h2>Loading...</h2>;
        } else if (!auth.isAuthenticated) {
          console.log('redirecting to login')
          return <Redirect to='login' />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(privateRoute);